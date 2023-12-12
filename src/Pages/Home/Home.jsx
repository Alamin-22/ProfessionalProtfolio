import Banner from "../../Components/Homes/Banner/Banner";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="bg-[#fff8f3]">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;