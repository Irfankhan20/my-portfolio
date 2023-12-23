
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="header">
            <div><a href="#" className="logo">Portfolio</a></div>
            <div>
                <nav className="navbar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;