import { Parallax } from 'react-parallax';

// eslint-disable-next-line react/prop-types
const Education = () => {
    return (
        <Parallax className='my-10'
            blur={{ min: -50, max: 50 }}
            bgImage={"https://i.ibb.co/1bNBnrc/carerstac.jpg"}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero min-h-[70vh]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-5xl mx-auto">

                            <ul className="md:timeline timeline-vertical">
                                
                                <li>
                                    <hr />
                                    <div className="card timeline-start ">
                                    <h1 className='timeline-start mb-10 text-2xl md:text-4xl font-medium '>Education</h1>
                                        <div className="card-body md:text-right">
                                            <h2 className="text-2xl font-semibold"> Higher Secondary Certificate</h2>
                                            <p>Dhaka Udyan Government College</p>
                                            <p>Result: 4.33 out of 5</p>
                                            <p>Group: Science</p>
                                            
                                        </div>
                                        <div className="card-body md:text-right">
                                            <h2 className="text-2xl font-semibold"> Secondary School Certificate </h2>
                                            <p>Rayer Bazar High School</p>
                                            <p>Result: 4.50 out of 5</p>
                                            <p>Group: Science</p>
                                        </div>
                                    </div>
                                    <div className="card timeline-end ">
                                        <h1 className='timeline-end text-2xl md:text-4xl font-medium '>Work Experience</h1>
                                        <div className="card-body text-center md:text-left">
                                            <p>As a fresh junior developer, I&apos;m fueled by an unwavering patience and determination to overcome challenges. While I may not boast formal experience, my commitment to finding effective solutions and navigating the learning process showcases my resilience and dedication.</p>
                                        </div>
                                        <div className="card-body text-center md:text-left">
                                            <p>In addition to my problem-solving skills, I bring a dedicated mindset towards meeting deadlines, consistently delivering results in a timely manner. Despite being a fresher, I am eager to contribute my tenacity to any team, driven by a passion for web development and a strong desire to learn and grow in the field. I am ready to embark on this journey and make meaningful contributions to the world of technology.</p>
                                        </div>
                                    </div>
                                    <hr />
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>



    );
};

export default Education;