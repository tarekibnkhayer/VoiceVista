

import { motion } from "framer-motion"
import SectionTitle from "../shared/SectionTitle";

const HowItWorks = () => {
    const steps = [
       {id: 1,title: 'Login', description: "Login thorough your email or google account"},
       {id: 2,title: 'Go to SurveyDetails page', description: "Please go to SurveyDetails page and then if you already not give vote the survey or deadline is not passed you can vote the survey.And after voting it show you the result in pie chart."},
       {id: 3,title: 'Like or DesLike', description: "You can like or dislike the survey.If you don't like the content of the survey you can report it"},
       {id: 4,title: 'Read Comments', description:"You can read comment of other Pro users.And comments also contain user photo and user Name"},
       {id: 5,title: 'To write Comments', description: "To write comments you need to be a pro user.If you are only a logged in user you can only read the comments"},
       {id: 6,title: 'To be a Pro User', description: "You can be Pro user if you pay us 40$ through stripe payment gateway. It is very easy to pay.Just give your card number , expiry date of the card an CVC"}
    ]
    return (
            <div className="lg:max-w-6xl mx-auto md:max-w-2xl max-w-xs">
                {/* <h2 className="text-center text-3xl mt-10 font-black text-blue-600">How it Works for Job Seekers:</h2> */}
                <SectionTitle title="How It Works"></SectionTitle>
        <div className="lg:max-w-6xl mx-auto px-4 py-8 bg-[#1d3557] mt-10 rounded-xl">
            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 mt-8 text-white">
                {
                    steps.map((step )=> (
                       <motion.div key={step.id}  whileHover={{scale: 1.1}} whileTap={{scale:0.8}}
                       className="border px-2 py-4">
                        <h4 className="text-center text-2xl font-bold mb-2">{step.title}</h4>
                        <p>{step.description}</p>
                       </motion.div>
                    ))
                }
            </div>
        </div>
            </div>
    );
};

export default HowItWorks;