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
                           
                            <ul className="timeline timeline-vertical">
                                <li>
                                    <h1 className='timeline-start text-4xl font-medium mr-28'>Education</h1>
                                    <h1 className='timeline-end text-4xl font-medium ml-24'>Work Experience</h1>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="card timeline-start ">
                                        <div className="card-body">
                                            <h2 className="card-title"> Higher Secondary Certificate</h2>
                                            <p>Dhaka Udyan Government College</p>
                                        </div>
                                        <div className="card-body">
                                            <h2 className="card-title"> Higher Secondary Certificate</h2>
                                            <p>Dhaka Udyan Government College</p>
                                        </div>
                                    </div>
                                    <div className="card timeline-end ">
                                        <div className="card-body text-left">
                                            <p>As a fresh junior developer, I&apos;m fueled by an unwavering patience and determination to overcome challenges. While I may not boast formal experience, my commitment to finding effective solutions and navigating the learning process showcases my resilience and dedication.</p>
                                        </div>
                                        <div className="card-body text-left">
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