import { FaCode } from "react-icons/fa";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="lg:mt-32 mt-20"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="services"
    >
      <div className="services">
        <div className="container mx-auto">
          <h1 className="md:text-[60px] text-[45px] pb-2 md:pb-4 underline text-center font-bold">
            My <span className="text-[#0ef]">Services</span>
          </h1>
          <div className="services-list">
            <div>
              <p className="item">
                <FaCode />
              </p>

              <h2>Front End Development</h2>
              <p>
                I use html,CSS, Tailwind CSS , Javascript, React, Daisy UI for
                Front-End Developing. I also use firebase, jeson web token for
                authentication.
              </p>
              <a href="#project" className="read">
                lern more
              </a>
            </div>
            <div>
              {/* <i className='bx bx-crop' style='color:#00eeff'></i> */}
              <p className="item">
                <FaCode />
              </p>
              <h2>Back End Development</h2>
              <p>
                I use MongoDB to save data. And use express .js as a middleware
                between client side code and server side code. I am familier
                with MongoDB and JWT token.
              </p>
              <a href="#" className="read">
                lern more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
