import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ScrollTrigger from "react-scroll-trigger";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="experience"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="lg:mt-32 mt-20 w-11/12 mx-auto"
    >
      <h1 className="md:text-[60px] text-[45px] pb-2 md:pb-4 underline text-center font-bold">
        Academic <br className="md:hidden" />{" "}
        <span className="text-[#0ef]">Experience</span>
      </h1>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div>
          <VerticalTimeline>
            {/* web  */}
            {counterOn && (
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                date="July 2023 - Decembar 2023"
              >
                <h3 className="text-white text-[24px] font-bold">
                  Professional Course
                </h3>
                <h4 className="text-[#0ef] text-[16px] font-semibold">
                  Complete web development course with Jhankar Mahbub
                </h4>
                <p>
                  I completed a comprehensive web development course, mastering
                  HTML, CSS, Tailwind CSS, and Daisy UI for design, JavaScript
                  and React for interactive interfaces, and backend tools like
                  Node.js, Express.js, and MongoDB for creating full-stack web
                  applications.
                </p>
              </VerticalTimelineElement>
            )}
            {/* honours  */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date="agust 2019 - continue"
            >
              <h3 className="text-white text-[24px] font-bold">
                Bsc Honours in Physics
              </h3>
              <h4 className="text-[#0ef] text-[16px] font-semibold">
                Mohammadpur Central University College
              </h4>
              <p>
                I am currently studying Honours in Physics at Mohammadpur
                Central University College. This program enhances my knowledge
                of core physics principles, analytical skills, and research
                abilities, preparing me to explore scientific concepts and their
                practical applications in various fields.
              </p>
            </VerticalTimelineElement>
            {/* hsc */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date="Agust 2017 - April 2019"
            >
              <h3 className="text-white text-[24px] font-bold">
                Higher Secondary School Certificate
              </h3>
              <h4 className="text-[#0ef] text-[16px] font-semibold">
                Gouripur Govt College
              </h4>
              <p>
                I completed my Higher Secondary Certificate (HSC) in Science
                from Gouripur Govt College. This achievement built a strong
                foundation in physics, chemistry, and mathematics, enhancing my
                analytical skills and preparing me for advanced studies and
                technical challenges.
              </p>
            </VerticalTimelineElement>
            {/* ssc  */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date="Jan 2011 - Feb 2016"
            >
              <h3 className="text-white text-[24px] font-bold">
                Secondary School Certificate
              </h3>
              <h4 className="text-[#0ef] text-[16px] font-semibold">
                Gouripur R.K. Govt. high School
              </h4>
              <p>
                I completed my Secondary School Certificate (SSC) in Science
                from Gouripur R.K. Govt High School. This milestone provided me
                with a solid grounding in fundamental subjects like physics,
                chemistry, and mathematics, fostering my academic growth and
                problem-solving abilities.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Experience;
