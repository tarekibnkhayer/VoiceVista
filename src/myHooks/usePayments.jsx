

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePayments = () => {
    const axiosSecure = useAxiosSecure();
    const {data: payments=[], isPending, refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async() => {
            const res = await axiosSecure.get('/payments');
            return res.data;
        }
    })
    return [payments, isPending, refetch]
};

export default usePayments;