import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: "https://voic-vista-server.vercel.app",
    baseURL: 'http://localhost:2626',
    withCredentials: true
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;