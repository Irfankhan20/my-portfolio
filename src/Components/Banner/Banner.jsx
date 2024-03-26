import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div id="home">
      <div className="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Irfan Khan Pathan</h1>
          <h3>
            And I'm a{" "}
            <span className="text">
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
          <p>
            I'm a Web Developer with MERN stack. Now I'm learning and practicing
            Next.Js
          </p>
          <div className="home-sci">
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
          {/* <a href="#" className="btn-box">More About Me</a> */}
        </div>
        <span className="home-imgHover"></span>
      </div>
    </div>
  );
};

export default Banner;
