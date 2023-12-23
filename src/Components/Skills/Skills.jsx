import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
    return (
        <div id="skills">
            <h1 className="sub-title">My <span>Skills</span></h1>
            <div className="skills-section">
                <div className="container1">
                    <h1 className="heading1">Technical Skills</h1>
                    <div className="Technical-bars">
                        <div className="bar"><FaHtml5 className="html" />
                            <div className="info">
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><FaCss3 className="css" />
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><SiJavascript className="javascript" />
                            <div className="info">
                                <span>Javascript</span>
                            </div>
                            <div className="progress-line Javascript">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><FaReact className="react" />
                            <div className="info">
                                <span>React</span>
                            </div>
                            <div className="progress-line react">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><SiMongodb className="mongodb" />
                            <div className="info">
                                <span>MongoDB</span>
                            </div>
                            <div className="progress-line mongodb">
                                <span></span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="container1">
                    <h1 className="heading1">Professional Skills</h1>

                    <div className="professional-skills">

                   <div>
                   <div className="radial-progress first cursor-pointer  bg-[#0ef] text-black border-4 border-[#0ef]" style={{"--value":75}} role="progressbar">75%</div>
                    <div><h1>communication skills</h1></div>
                   
                   </div>

                    <div>
                    <div className="radial-progress cursor-pointer first bg-[#0ef] text-black border-4 border-[#0ef]" style={{"--value":65}} role="progressbar">65%</div>
                    <h1>Spoken English</h1>
                    </div>

                    <div>
                    <div className="radial-progress cursor-pointer first bg-[#0ef] text-black border-4 border-[#0ef]" style={{"--value":70}} role="progressbar">70%</div>
                    <h1>Problem Solving</h1>
                    </div>

                    <div>
                    <div className="radial-progress cursor-pointer first bg-[#0ef] text-black border-4 border-[#0ef]" style={{"--value":85}} role="progressbar">85%</div>
                    <h1>Team Work</h1>
                    </div>

                    

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Skills;