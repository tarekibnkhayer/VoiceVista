import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSurveys = () => {
    const axiosPublic = useAxiosPublic();
    const {data: allSurvey = [], isPending, refetch} = useQuery({
        queryKey: ['allSurvey'],
        queryFn: async() => {
            const res = await axiosPublic.get('/allSurveys');
            return res.data;
        }
    })
    return [allSurvey, isPending, refetch]
};

export default useSurveys;