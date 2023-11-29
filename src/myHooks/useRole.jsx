import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: role, isPending} = useQuery({
        queryKey: [user?.email,'role'],
        enabled: !loading,
        queryFn: async() => {
           if(user){
            const res = await axiosSecure.get(`/user-role?email=${user.email}`);
            return res.data?.role;
           }else{
            return null;
           }
        },
    });
    return [role, isPending];
};

export default useRole;