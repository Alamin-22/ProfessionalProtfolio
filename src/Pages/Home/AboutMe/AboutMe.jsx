import About from "../../../assets/Images/Aboutbg.png"



const AboutMe = () => {
    return (
        <div className="my-12">
            <div className=" max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-evenly px-5 gap-6">
                    <img src={About} className="w-96 rounded-lg mx-auto lg:mx-0 shadow-2xl" />
                    <div className="max-w-xl ">
                        <h1 className="text-3xl font-bold">About Me</h1>
                        <p className="py-6 font-medium text-gray-600">I am a passionate full-stack developer with a strong focus on the MERN stack. I am driven by a love for technology and a desire to create beautiful, functional, and user-friendly web applications.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap gap-4 mb-5">
                                <span className="px-2 py-1 border-2 rounded-lg uppercase font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">html</span>
                                <span className="px-2 py-1 border-2 rounded-lg uppercase font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">css</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">JavaScript</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#dfb37a]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">ReactJs</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">MERN Stack</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">Node.js</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">Express.js</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">REST API</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">MongoDB</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform duration-500 transform scale-100 hover:scale-150 cursor-pointer">Firebase</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform duration-500 transform scale-100 hover:scale-150 cursor-pointer">TailwindCSS</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform duration-500 transform scale-100 hover:scale-150 cursor-pointer">DaisyUi</span>
                                <span className="px-2 py-1 border-2 rounded-lg  font-semibold border-[#eeb264]  text-gray-700 transition-transform duration-500 transform scale-100 hover:scale-150 cursor-pointer">MUI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;