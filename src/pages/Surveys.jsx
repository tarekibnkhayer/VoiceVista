import Card from "../components/forSurvey/Card";
import useSurveys from "../myHooks/useSurveys";

const Surveys = () => {
   const [allSurvey, isPending] = useSurveys();
    return (
        <div className="mt-24">
            Surveys
            {/* 
            : all surveys will be shown with proper information like
title. Sort description, total voted, etc. Users can filter by title, category, and
vote.

            */}
          <div className="grid grid-cols-3 gap-4">
          {
            !isPending  &&  allSurvey.map(survey => <Card key={survey._id} survey={survey}></Card> )
            }
          </div>
        </div>
    );
};

export default Surveys;