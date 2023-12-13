import logo from "../../assets/Images/bgRemove.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import gmail from "../../assets/Images/gmail48.png";
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div>
            <div className="drawer z-10  ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar max-w-7xl mx-auto  bg-[#fff8f3] shadow-lg ">
                        <div className="">
                            <div className="flex-none md:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2">
                                <img className="w-[70%] md:w-4/12 mx-auto md:mx-0" src={logo} alt="WebDeveloper Logo" />
                            </div>
                            <div className="flex-none hidden md:block">
                                <ul className="menu menu-horizontal space-x-6 active:space-x-6 items-center">
                                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" className="btn bg-transparent border-none shadow-none hover:bg-transparent hover:border-none transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500" rel="noopener noreferrer">
                                        <FaLinkedin className="text-3xl text-blue-600" />
                                    </a>
                                    <a href="https://github.com/Alamin-22" target="_blank" rel="noopener noreferrer" className="transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">
                                        <FaGithub className="text-3xl text-gray-700" />
                                    </a>
                                    <a href="mailto:mdalaminmollik96@gmail.com" className="transition-transform transform scale-100 hover:scale-150 cursor-pointer duration-500">
                                        <img className="w-[80%]" src={gmail} alt="gmail" />
                                    </a>
                                    <Link to="contact"
                                        spy={true}
                                        smooth={true}
                                        duration={500}>
                                        <button className="btn btn-outline hover:bg-[#FD6E0A] border-2 hover:border-[#FD6E0A] text-[#FD6E0A]">
                                            Let&rsquo;s Talk
                                        </button>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        <li>
                            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" className="btn bg-transparent border-none shadow-none hover:bg-transparent hover:border-none" rel="noopener noreferrer">
                                <FaLinkedin className="text-3xl text-blue-600" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Alamin-22" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-3xl text-gray-700" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mdalaminmollik96@gmail.com">
                                <img className="w-[80%]" src={gmail} alt="gmail" />
                            </a>
                        </li>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            <button className="btn btn-outline hover:bg-[#FD6E0A] border-2 hover:border-[#FD6E0A] text-[#FD6E0A]">
                                Let&rsquo;s Talk
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;

