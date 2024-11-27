import { FaHtml5 } from "react-icons/fa";
// import { SiJavascript, SiMongodb } from "react-icons/si";
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="skills"
      className="lg:mt-32 mt-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="md:text-[60px] text-[45px] pb-2 md:pb-4 underline text-center font-bold">
        My <span className="text-[#0ef]">Skills</span>
      </h1>
      <div className="skills-section">
        <div className="container1">
          {/* technical skills  */}
          <h1 className="heading1 text-3xl">Technical Skills</h1>
          <div className="Technical-bars style2 mb-10 md:mb-20 mt-10 md:mt-20 pb-16 pt-8 grid grid-cols-3 md:grid-cols-5 md:max-w-7xl mx-4 md:mx-auto gap-10  justify-center">
            <div className="bar">
              <FaHtml5 className="html w-[132px] pl-20 h-10 style" />
              <div className="info text-center">
                <span>HTML5</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <div className="info text-center">
                <span className="">CSS3</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                alt="javascript"
              />
              <div className="info text-center">
                <span>Javascript</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="react"
              />
              <div className="info text-center">
                <span>React</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="mongodb"
              />
              <div className="info text-center">
                <span>MongoDB</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                alt="express.js"
              />
              <div className="info text-center">
                <span>Express.Js</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="node.js"
              />
              <div className="info text-center">
                <span>Node.Js</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
                alt="vercel"
              />
              <div className="info text-center">
                <span>Vercel</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"
                alt="canva"
              />
              <div className="info text-center">
                <span>Canva</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                alt="figma"
              />
              <div className="info text-center">
                <span>Figma</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white"
                alt="chart.js"
              />
              <div className="info text-center">
                <span>Chart.js</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"
                alt="ESLint"
              />
              <div className="info text-center">
                <span>ESLint</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="tailwind css"
              />
              <div className="info text-center">
                <span>Tailwind CSS</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
                alt="npm"
              />
              <div className="info text-center">
                <span>NPM</span>
              </div>
            </div>

            <div className="bar">
              <img
                className="style h-10 mx-auto"
                src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
                alt="jwt"
              />
              <div className="info text-center">
                <span>JWT</span>
              </div>
            </div>
          </div>
        </div>

        {/* professional skills  */}
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <h1 className="heading1 text-3xl">Professional Skills</h1>

          <div className="professional-skills grid mt-10 md:mt-20 grid-cols-2 broder-2 border-red-700 mx-auto  justify-end text-center">
            <div className=" ">
              <div
                className="mb-4 radial-progress first cursor-pointer  bg-[#0ef] text-black border-4 border-[#0ef]"
                style={{ "--value": 75 }}
                role="progressbar"
              >
                75%
              </div>
              <div>
                <h1>communication skills</h1>
              </div>
            </div>

            <div className="mb-12">
              <div
                className="mb-4 radial-progress cursor-pointer first bg-[#0ef] text-black border-4 border-[#0ef]"
                style={{ "--value": 65 }}
                role="progressbar"
              >
                65%
              </div>
              <h1>Spoken English</h1>
            </div>

            <div>
              <div
                className="mb-4 radial-progress cursor-pointer first bg-[#0ef] text-black border-4 border-[#0ef]"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                70%
              </div>
              <h1>Problem Solving</h1>
            </div>

            <div>
              <div
                className="mb-4 radial-progress cursor-pointer first bg-[#0ef] text-black border-4 border-[#0ef]"
                style={{ "--value": 85 }}
                role="progressbar"
              >
                85%
              </div>
              <h1>Team Work</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
