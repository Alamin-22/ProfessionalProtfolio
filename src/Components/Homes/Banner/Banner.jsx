import img from "../../../assets/Images/my pic.jpg"
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#FFF8F3] ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div className=" max-w-3xl ">
                        <p className="text-xl font-medium text-gray-600">Hi, It&rsquo;s me</p>
                        <h1 className="text-5xl font-semibold ">Md. Al Amin Mollik</h1>
                        <p className="py-6 text-xl font-medium text-gray-600">
                            Dedicated Web Developer | Transforming Ideas into Digital Experiences | Crafting Elegant and Functional Websites | Let&rsquo;s Build Your Online Presence Together!
                        </p>
                        <div className="">
                            <Link to={"https://drive.usercontent.google.com/download?id=1_SazDTaXAKmWZ_Rb7zMlPGaFbyb2BImE&export=download&authuser=0&confirm=t&uuid=5bf8a24e-79b9-4535-a74b-5f9480056222&at=APZUnTWnnvFyiBUiZW27ajHASfKi:1702319266467"}>
                                <button className="btn btn-outline hover:bg-[#FD6E0A]  hover:border-[#FD6E0A] text-[#FD6E0A]">
                                    <FaDownload className=" text-xl" />
                                    Download Resume
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;