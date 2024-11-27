import { LiaEyeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="projects" data-aos="fade-up" data-aos-duration="1000">
      <div className="portfolio lg:mt-32 mt-20">
        <div className="main-text">
          <h2 className="md:text-[60px] text-[45px] pb-2 md:pb-4 underline text-center font-bold">
            Latest <span className="text-[#0ef]">Project</span>
          </h2>

          <div className="portfolio-content grid grid-cols-1 mt-10 md:mt-20 md:grid-cols-2 gap-10  w-11/12 mx-auto">
            {/* 1st project  */}
            <div className="row">
              <img src="https://i.ibb.co/SQ0KCcG/team-project-ss.jpg" alt="" />
              <div className="layer">
                <h5>HomifyEstate(Team project)</h5>

                <div className="icon-div ">
                  <a href="https://homifyestate-8556d.web.app/">
                    <LiaEyeSolid className="logo" />
                    <span>Preview</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/homifyEsate-client">
                    <FaGithub className="logo" />
                    <span>Client</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/homifyEstate-server">
                    <FaGithub className="logo" />
                    <span>Server</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd project  */}
            <div className="row">
              <img src="https://i.ibb.co/kmj93Rq/food-management.jpg" alt="" />
              <div className="layer">
                <h5>Food Management System</h5>

                <div className="icon-div ">
                  <a href="https://assignment-eleven-website.web.app/">
                    <LiaEyeSolid className="logo" />
                    <span>Preview</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/restaurant-food-management-client-site">
                    <FaGithub className="logo" />
                    <span>Client</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/restaurant-food-management-server-site">
                    <FaGithub className="logo" />
                    <span>Server</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd project  */}
            <div className="row">
              <img src="https://i.ibb.co/XD0c7yJ/delivery-tiger.jpg" alt="" />
              <div className="layer">
                <h5>Online Delivery System</h5>

                <div className="icon-div">
                  <a href="https://fresh-glass.surge.sh/">
                    <LiaEyeSolid className="logo" />
                    <span>Preview</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/delivery-tiger-client-site">
                    <FaGithub className="logo" />
                    <span>Client</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/delivery-tiger-server-site">
                    <FaGithub className="logo" />
                    <span>Server</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 4th project  */}
            <div className="row">
              <img
                src="https://i.ibb.co/8cDZgmX/donation-campaign.jpg"
                alt=""
              />
              <div className="layer">
                <h5>Donation Campaign</h5>

                <div className="icon-div">
                  <a href="https://sudden-berry.surge.sh/">
                    <LiaEyeSolid className="logo" />
                    <span>Preview</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/donation-campaign-website">
                    <FaGithub className="logo" />
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
