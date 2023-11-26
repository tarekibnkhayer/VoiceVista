import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:2626",
    withCredentials: true
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;