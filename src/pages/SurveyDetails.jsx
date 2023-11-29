import SurveyCard from "../components/forSurveyDetails/SurveyCard";
import useSurveys from "../myHooks/useSurveys";


const SurveyDetails = () => {
    const [allSurvey, isPending] = useSurveys();
    console.log(allSurvey);
    return (
        <div className="mt-24 grid grid-cols-2">
           {
            !isPending && allSurvey.map(survey  => <SurveyCard key={survey._id} survey={survey}></SurveyCard>)
           }
        </div>
    );
};

export default SurveyDetails;