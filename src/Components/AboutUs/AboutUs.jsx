import "./AboutUs.css";
import Resume from "../../assets/final resume.pdf";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import workIcon1 from "../../assets/recomandation icon.png";
// import recomLetter from "../../assets/recommendation letter_page-0001.jpg";
const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="lg:mt-32 mt-20 w-11/12 mx-auto"
      id="about"
    >
      <h2 className="aboutme-title underline text-center">
        About<span>Me</span>
      </h2>
      <div className=" md:flex w-full justify-between mx-auto">
        {/* <VerticalTimeline>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="PROGGRAMING HERO recomendation letter"
            >
              <img className="lg:w-32 lg:h-32" src={recomLetter} alt="" />
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="PROGGRAMING HERO"
            >
              <img className="lg:w-full lg:h-40" src={recomLetter} alt="" />
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="PROGGRAMING HERO"
            >
              <img className="lg:w-32 lg:h-32" src={recomLetter} alt="" />
            </VerticalTimelineElement>
          </VerticalTimeline> */}

        {/* right  */}
        <div className="about-text pl-5 mb-10 flex-1">
          <h4>MERN Stack Developer!</h4>
          <p className="md:leading-10 md:text-xl pt-3 pb-8">
            <span>Hello!</span> I am highly skilled MERN Stack developer
            crafting robust web apps with seamless user experiences. Proficient
            in front-end (HTML5, CSS3, JavaScript) and back-end (Node.js,
            Express.js, MongoDB) development. Expertise in creating engaging UIs
            using React.js and ensuring optimal performance and data integrity.
            Seamlessly integrating front-end and back-end layers for efficient
            development processes. Proactive problem solver, excelling in
            collaborative environments and effective cross-functional
            communication. Committed to continuous learning, staying updated
            with industry trends for cutting-edge solutions. Let's collaborate
            to bring your web application vision to life!
          </p>
          <a
            href="https://drive.google.com/file/d/1QSRA7oqz_Vz_TbpRiE6bEgQM86Z6n0id/view?usp=sharing"
            className="btn-box  px-4 py-3"
          >
            View Resume
          </a>
          <a
            href={Resume}
            target="_blank"
            download="Irfan_Resume.pdf"
            className="btn-box px-3 py-3"
            id="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
