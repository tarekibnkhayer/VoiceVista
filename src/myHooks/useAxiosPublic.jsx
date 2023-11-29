import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://voic-vista-server.vercel.app",
    withCredentials: true
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;