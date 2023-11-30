import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: allUsers = [], isPending, refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return [allUsers, isPending, refetch];
};

export default useUsers;