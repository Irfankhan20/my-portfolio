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

          <div className="portfolio-content grid grid-cols-1 mt-10 md:mt-20 md:grid-cols-2 gap-10  w-11/12 lg:w-10/12 mx-auto">
            {/* 1st project  */}
            <div className="row">
              <img
                src="https://i.ibb.co.com/pvbWmgYv/Screenshot-2025-02-10-130234.png"
                alt=""
              />
              <div className="layer">
                <h5>Tourism Management App</h5>

                <div className="icon-div">
                  <a href="https://unique-travel-c3fd8.web.app/">
                    <LiaEyeSolid className="logo" />
                    <span>Preview</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/tourism-guide-client">
                    <FaGithub className="logo" />
                    <span>Client</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/tourism-guide-server">
                    <FaGithub className="logo" />
                    <span>Server</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd project  */}
            <div className="row">
              <img
                src="https://i.ibb.co.com/DfJ17Pk/Screenshot-2024-11-27-123502.png"
                alt=""
              />
              <div className="layer">
                <h5>LingoBingo</h5>

                <div className="icon-div">
                  <a href="https://lingobingo-hindi-learn.surge.sh/">
                    <LiaEyeSolid className="logo" />
                    <span>Preview</span>
                  </a>
                  <a href="https://github.com/Irfankhan20/lingo-bingo-dictionary/tree/main">
                    <FaGithub className="logo" />
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd project  */}
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

            {/* 4th project  */}
            <div className="row">
              <img
                src="https://i.ibb.co.com/ry0trFJ/Screenshot-2024-11-27-124027.png"
                alt=""
              />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
