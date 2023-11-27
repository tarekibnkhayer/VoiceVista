import axios from "axios";
// import { useEffect } from "react";
import useAuth from './useAuth'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const axiosSecure = axios.create({
    baseURL: 'http://localhost:2626',
    withCredentials: true
});

const useAxiosSecure = () => {
    const {logoutUser} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use((response) => {
            return response;
        },
        (error) => {
            if(error?.response?.status === 401 || error?.response?.status === 403){
                 logoutUser();
                 navigate('/login')
            }
            return Promise.reject(error);
        }
        );
    },[logoutUser, navigate])
    return axiosSecure;


};

export default useAxiosSecure;