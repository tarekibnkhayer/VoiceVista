import Banner from "../components/forHomePage/Banner";
import FeaturedSurveys from "../components/forHomePage/FeaturedSurveys";
import FrequentAsk from "../components/forHomePage/FrequentAsk";
import HowItWorks from "../components/forHomePage/HowItWorks";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSurveys></FeaturedSurveys>
            <HowItWorks></HowItWorks>
            <FrequentAsk></FrequentAsk>
        </div>
    );
};

export default Home;