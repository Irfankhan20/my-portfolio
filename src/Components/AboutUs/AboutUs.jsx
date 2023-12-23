import "./AboutUs.css";
import Resume from '../../assets/final resume.pdf';

const AboutUs = () => {
    return (
        <div  id="about">
            <div className="about">
                <div className="about-img">
                    <img src="https://i.ibb.co/DYsQSkR/boot.png" alt="Irfan Photo" />
                </div>

                <div className="about-text">
                    <h2>About<span>Me</span></h2>
                    <h4>MERN Stack Developer!</h4>
                    <p><span>Hello!</span> I am highly skilled MERN Stack developer crafting robust web apps with seamless user experiences.
                        Proficient in front-end (HTML5, CSS3, JavaScript) and back-end (Node.js, Express.js, MongoDB)
                        development. Expertise in creating engaging UIs using React.js and ensuring optimal performance and data
                        integrity. Seamlessly integrating front-end and back-end layers for efficient development processes.
                        Proactive problem solver, excelling in collaborative environments and effective cross-functional
                        communication. Committed to continuous learning, staying updated with industry trends for cutting-edge
                        solutions.
                        Let's collaborate to bring your web application vision to life!</p>
                    <a href="https://i.ibb.co/nfhxWSJ/final-resume-page-0001.jpg" className="btn-box">View Resume</a>
                    <a href={Resume} target='_blank' download="Irfan_Resume.pdf" className="btn-box" id="resume-btn">Download Resume</a>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;