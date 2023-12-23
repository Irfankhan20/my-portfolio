import { FaCode } from "react-icons/fa";
import "./Services.css";

const Services = () => {
    return (
        <div>
            <div className="services" id="services">
                <div className="container">
                    <h1 className="sub-title">My <span>Services</span></h1>
                    <div className="services-list">
                        <div>
                            {/* <i className='bx bx-code' style='color:#00eeff'></i> */}
                            <p className="item"><FaCode /></p>

                            <h2>Front End Development</h2>
                            <p>
                                I use html,CSS, Tailwind CSS , Javascript, React, Daisy UI for Front-End Developing. I also use firebase, jeson web token for authentication.
                            </p>
                            <a href="#" className="read">lern more</a>
                        </div>
                        <div>
                            {/* <i className='bx bx-crop' style='color:#00eeff'></i> */}
                            <p className="item"><FaCode /></p>
                            <h2>Back End Development</h2>
                            <p>
                                I use MongoDB to save data. And use express .js as a middleware between client side code and server side code.
                                I am familier with MongoDB and JWT token.
                            </p>
                            <a href="#" className="read">lern more</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;