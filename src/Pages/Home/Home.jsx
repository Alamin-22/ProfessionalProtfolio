import Featured from "../../Components/Featured/Featured";
import Banner from "../../Components/Homes/Banner/Banner";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="bg-[#fff8f3] max-w-7xl mx-auto">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Featured></Featured>
        </div>
    );
};

export default Home;