import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLink } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { IoServerOutline } from "react-icons/io5";



const WebSiteDetails = ({ web }) => {


    const { WebsiteName, AboutProject, Feature1, Feature2, Feature3, Feature4, Feature5,
        img1, img2, img3, img4, img5, WEbLink, ClientRepo, ServerRepo } = web;

    return (
        <div>
            <Swiper pagination={true}
                modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>
            </Swiper>
            <div className='p-5'>
                <h1 className='text-3xl font-semibold text-gray-700'>
                    {WebsiteName}
                </h1>
                <div>
                    <p className='text-gray-600 font-medium mt-10'>{AboutProject}</p>
                    <p className=' text-lg text-gray-700 font-medium m-7'>Features:</p>
                    <ol className='list-disc list-inside ml-10'>
                        <li>{Feature1}</li>
                        <li>{Feature2}</li>
                        <li>{Feature3}</li>
                        <li>{Feature4}</li>
                        <li>{Feature5}</li>
                    </ol>

                </div>
                <div className='flex flex-wrap gap-5 my-5'>
                    <Link to={WEbLink} target='_blank' >
                        <button className='btn btn-sm text-xl text-[#FD6E0A] hover:text-[#eb8d4b] hover:border-[#FD6E0A] hover:bg-transparent btn-outline'>
                            <FaLink />Live
                        </button>
                    </Link>
                    <Link to={ClientRepo} target='_blank' >
                        <button className='btn btn-sm text-xl text-[#FD6E0A] hover:text-[#eb8d4b] hover:border-[#FD6E0A] hover:bg-transparent btn-outline'>
                            <FaGithub />Client Repo
                        </button>
                    </Link>
                    <Link to={ServerRepo} target='_blank' >
                        <button className='btn btn-sm text-xl text-[#FD6E0A] hover:text-[#eb8d4b] hover:border-[#FD6E0A] hover:bg-transparent btn-outline'>
                            <IoServerOutline />Server Repo
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

WebSiteDetails.propTypes = {
    web: PropTypes.object,
};
export default WebSiteDetails;


