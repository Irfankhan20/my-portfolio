import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import "animate.css";

const Banner = () => {
  return (
    <div
      id="home"
      className="md:flex md:flex-row-reverse w-11/12 mx-auto lg:h-[800px] lg:w-full items-center pt-[50px] md:pt-[120px] lg:pt-[85px] "
    >
      {/* right part */}
      <div className="md:w-1/2 md:mb-20 mb-0 lg:mb-0   animate__animated animate__backInRight">
        <img
          className=""
          src="https://i.ibb.co.com/QH2FVgX/Screenshot-2024-11-24-115843.png"
          alt=""
        />
      </div>
      {/* left part  */}
      <div className="home md:w-1/2 flex justify-center">
        <div className="home-content">
          <h2 className="text-2xl animate__animated animate__backInDown md:text-[28px] lg:text-[32px] font-bold">
            Hello, It's Me
          </h2>
          <h1 className=" w-full  animate__animated animate__backInDown py-5 md:py-4 lg:py-7 text-4xl md:text-[40px] lg:text-[56px] font-bold">
            Irfan Khan Pathan
          </h1>
          <h3 className="text-2xl  animate__animated animate__backInDown md:text-[28px] md:leading-10 font-bold lg:text-[32px]">
            And I'm a{" "}
            <span className="text-[#0ef]">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Web Developer | ✍️",
                    "React Developer | ✍️",
                    "Front End Developer | ✍️",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="pt-8  animate__animated animate__backInDown lg:pt-6">
            I'm a Web Developer with MERN stack. Now I'm learning and practicing
            Next.Js
          </p>
          <div className="home-sci  animate__animated animate__backInLeft">
            <a href="https://www.facebook.com/profile.php?id=61552211709891">
              <FaFacebookF className="fb-logo" />
            </a>
            <a href="https://www.linkedin.com/in/irfan-khan-pathan-303700270/">
              <FaLinkedinIn className="fb-logo" />
            </a>
            <a href="https://www.instagram.com/irfanproggramer/">
              <FaInstagramSquare className="fb-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
