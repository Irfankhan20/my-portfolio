import "./AboutUs.css";
import Resume from '../../assets/final resume.pdf';

const AboutUs = () => {
    return (
        <div  id="about">
            {/* border-2 border-red-700 */}
            <div className="max-w-7xl flex justify-between mx-auto">
                <div className="about-img items-center  flex-1 ">
                    <img className="mt-20" src="https://i.ibb.co/hZNCPbk/boot-1.png" alt="Irfan Photo" />
                </div>

                <div className="about-text flex-1">
                <h2 className="aboutme-title  pt-32 ">About<span>Me</span></h2>
                    <h4>MERN Stack Developer!</h4>
                    <p><span>Hello!</span> I am highly skilled MERN Stack developer crafting robust web apps with seamless user experiences.
                        Proficient in front-end (HTML5, CSS3, JavaScript) and back-end (Node.js, Express.js, MongoDB)
                        development. Expertise in creating engaging UIs using React.js and ensuring optimal performance and data
                        integrity. Seamlessly integrating front-end and back-end layers for efficient development processes.
                        Proactive problem solver, excelling in collaborative environments and effective cross-functional
                        communication. Committed to continuous learning, staying updated with industry trends for cutting-edge
                        solutions.
                        Let's collaborate to bring your web application vision to life!</p>
                    <a href="https://drive.google.com/file/d/1QSRA7oqz_Vz_TbpRiE6bEgQM86Z6n0id/view?usp=sharing" className="btn-box">View Resume</a>
                    <a href={Resume} target='_blank' download="Irfan_Resume.pdf" className="btn-box" id="resume-btn">Download Resume</a>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;