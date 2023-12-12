import axios from "axios";
import { useEffect, useState } from "react";
import PiChart1 from "../Charts/PiChart1";
import PiChart2 from "../Charts/PiChart2";
import PiChart3 from "../Charts/PiChart3";
import PiChart4 from "../Charts/PiChart4";

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get("/skills.json")
            .then(res => setSkills(res.data))
    }, [])
    console.log(skills)

    return (
        <div className="max-w-7xl mx-auto">

            <div className="mt-20 flex flex-col md:flex-row justify-evenly">
                <div className=" max-w-xs mx-auto md:mx-0 pb-5">
                    <h2 className="text-4xl mb-8  text-gray-700 font-semibold text-center">Technical Skills</h2>
                    {
                        skills.map((skill, idx) => <div key={idx} className="w-64 ">
                            <div className="flex justify-between">
                                <p className="text-gray-700 font-semibold">{skill.skillName}</p>
                                <p className="text-gray-700 font-semibold">{skill?.percent}%</p>
                            </div>
                            <progress className="progress progress-warning" value={skill?.percent} max="100"></progress>
                        </div>)
                    }
                </div>
                <div className="px-10 md:px-0">
                    <h2 className="text-4xl mb-8  text-gray-700 font-semibold text-center">Personal Skills</h2>
                    <div className="grid grid-cols-2 ">
                        <PiChart1></PiChart1>
                        <PiChart2></PiChart2>
                        <PiChart3></PiChart3>
                        <PiChart4></PiChart4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;