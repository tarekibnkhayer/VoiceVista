import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import useAxiosPublic from "../../myHooks/useAxiosPublic";
import Card from "../forSurvey/Card";

const FeaturedSurveys = () => {
    const [featuredSurveys, setFeaturedSurveys] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get('/featuredSurvey')
        .then(res => {
            setFeaturedSurveys(res.data);
        })
    },[axiosPublic])
    return (
        <div>
             <SectionTitle title="Featured Surveys"></SectionTitle>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 md:grid-cols-2">
                {
                    featuredSurveys.map(survey => <Card key={survey._id} survey={survey}></Card>)
                }
             </div>
        </div>
    );
};

export default FeaturedSurveys;