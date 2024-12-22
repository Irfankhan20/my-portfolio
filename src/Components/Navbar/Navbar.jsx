// import "./Navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <a href="#home" className="hover:text-[#0ef]">
        Home
      </a>
      <a href="#about" className="hover:text-[#0ef]">
        About
      </a>
      <a href="#experience" className="hover:text-[#0ef]">
        Experience
      </a>
      <a href="#services" className="hover:text-[#0ef]">
        Services
      </a>
      <a href="#skills" className="hover:text-[#0ef]">
        Skills
      </a>
      <a href="#projects" className="hover:text-[#0ef]">
        Projects
      </a>
      <a href="#contact" className="hover:text-[#0ef]">
        Contact
      </a>
    </>
  );
  return (
    <div className="navbar fixed z-50 bg-[#051129]">
      <div className="md:w-11/12 w-full mx-auto flex items-center  justify-between">
        {/* navbar start  */}
        <div className="ml-3 md:ml-0 lg:ml-0">
          <a href="#" className="font-bold text-[25px] text-[#fff]">
            Portfolio
          </a>
        </div>
        {/* nav end  */}
        <div className="">
          {/* for large  */}
          <div className="hidden lg:flex">
            <ul className="menu flex  gap-7 menu-horizontal pt-2 text-xl text-white font-medium">
              {navLinks}
            </ul>
          </div>
          {/* for small  */}
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 bg-[#013b3f] border border-white font-bold space-y-2 text-white rounded-box w-40 shadow-2xl text-lg"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
