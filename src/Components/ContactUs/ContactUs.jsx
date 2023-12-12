/* eslint-disable react/no-unescaped-entities */
import img from "../../assets/Images/2928006-removebg-preview.png"


const ContactUs = () => {
    return (
        <div className="">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold lg:text-5xl text-center">Let's talk!</h2>
                    </div>
                    <img src={img} alt="" className="p-6" />
                </div>
                <form noValidate="" className="space-y-6 shadow-xl bg-zinc-100 p-10 rounded-lg">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Your Full Name" className=" input input-bordered  w-full p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" placeholder="example@gmail.com" className="input input-bordered  w-full p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" placeholder="Feel free to chat with me ...." className="textarea textarea-bordered  w-full p-3 rounded "></textarea>
                    </div>
                    <button type="submit" className="w-full btn bg-[#FD6E0A] text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;