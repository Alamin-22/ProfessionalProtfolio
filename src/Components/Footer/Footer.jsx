import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import gmail from "../../assets/Images/gmail48.png";
const Footer = () => {
    return (
        <div>

            <footer className="footer bg-[#ebcfbc] max-w-7xl mx-auto px-10 py-4 border-t  text-base-content border-base-300">
                <div className="footer max-w-7xl mx-auto ">
                    <aside className="items-center grid-flow-col">
                        <img src="/public/icons.png" className="w-12" alt="" />
                        <p className="font-medium">Web Developer<br />Build your Dream Website</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer" ><FaLinkedin className="text-3xl text-blue-700 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500" /></a>
                            <a href="https://github.com/Alamin-22" target="_blank" rel="noreferrer" ><FaGithub className="text-3xl transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500" /></a>
                            <a href="mailto:mdalaminmollik96@gmail.com" target="_blank" rel="noreferrer"><img src={gmail} className="w-9 transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500" alt="" /></a>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;