import SurveyCard from "../components/forSurveyDetails/SurveyCard";
import useSurveys from "../myHooks/useSurveys";


const SurveyDetails = () => {
    const [allSurvey, isPending] = useSurveys();
    return (
        <div className="mt-24 grid md:grid-cols-2 gap-5">
           {
            !isPending && allSurvey.map(survey  => <SurveyCard key={survey._id} survey={survey}></SurveyCard>)
           }
        </div>
    );
};

export default SurveyDetails;