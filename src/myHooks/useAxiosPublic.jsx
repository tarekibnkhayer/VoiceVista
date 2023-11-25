import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:2626"
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;