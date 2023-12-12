import axios from "axios";
import { useEffect, useState } from "react";
import WebSiteDetails from "./FeaturedBanner/WebSiteDetails";

const Featured = () => {

    const [webInfo, setWebInfo] = useState([]);

    useEffect(() => {
        axios.get("/public/website.json")
            .then(res => setWebInfo(res.data))
    }, [])


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="my-10 text-4xl text-center font-bold">Featured Projects</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                {
                    webInfo.map((web, idx) => <div key={idx} className="card bg-base-100 shadow-xl">
                        <figure><img src={web?.img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {web?.WebsiteName}
                            </h2>
                            <p className="text-gray-600 font-medium">{web?.shortDescription.slice(0, 60)}</p>
                            <div className="card-actions">
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn w-full bg-[#FD6E0A] text-white hover:bg-[#e29761]" onClick={() => document.getElementById(web.id).showModal()}>Details</button>
                                <dialog id={web.id} className="modal">
                                    <div className="modal-box max-w-5xl">
                                        <form method="dialog">
                                            <button
                                                className="btn btn-sm z-20 btn-circle btn-ghost absolute right-2 top-2">
                                                ✕
                                            </button>
                                        </form>
                                        
                                        <WebSiteDetails web={web}></WebSiteDetails>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Featured;