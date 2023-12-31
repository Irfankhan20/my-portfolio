




import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="header  py-5 px-3">
            <div><a href="#" className="logo">Portfolio</a></div>
            <div>
                <nav className="navbar hidden md:block">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#services">Services</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;