import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Experience></Experience>
      <Services></Services>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
