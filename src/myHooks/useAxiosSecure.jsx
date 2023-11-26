import axios from "axios";
import { useEffect } from "react";
import useAuth from './useAuth'
const axiosSecure = axios.create({
    baseURL: 'http://localhost:2626',
    withCredentials: true
});

const useAxiosSecure = () => {
    const {logoutUser} = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.response.use((res) => {
            return res;
        },
        (error) => {
            if(error?.response?.status === 401 || error?.response?.status === 403){
                logoutUser();
            }
        }
        );
    },[logoutUser])
    return axiosSecure;
};

export default useAxiosSecure;