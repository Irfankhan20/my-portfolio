

const Experience = () => {
    return (
        <div id="experience" className="mb-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-[60px] text-center ">Academic <span className="text-[#0ef]">Experience</span></h1>

                <div className="grid  grid-cols-1 md:grid-cols-2 mx-auto  mt-16">

                    {/* honours */}
                 <div className="border-r-4 md:pl-24 leading-8  border-[#0ef] ">
                    <h1 className="text-3xl text-[#a2f2f8]">Bsc Honours in Physics</h1>
                    <p>Mohammadpur Central University College</p>
                    <p>3rd Year(Running)</p>
                    <p>Duration: 2019 - continue</p>
                 </div>

                    {/* hsc */}
                 <div  className=" leading-8 md:pl-24 mb-14 ">
                    <h1 className="text-3xl text-[#a2f2f8]">Higher Secondary School Certificate</h1>
                    <p>Gouripur Govt College</p>
                    <p>GPA: 4.08 (out of 5.00)</p>
                    <p>Duration: 2017 - 2019</p>
                 </div>

                    {/* scc */}
                 <div className=" border-r-4  md:pl-24 border-[#0ef] leading-8">
                    <h1 className="text-3xl  text-[#a2f2f8]">Secondary School Certificate</h1>
                    <p className="">Gouripur R.K. Govt. high School</p>
                    <p>GPA: 4.50 (out of 5.00)</p>
                    <p>Duration: 2011 - 2016</p>
                 </div>

                    {/* course */}
                 <div className=" leading-8 md:pl-24">
                    <h1 className="text-3xl text-[#a2f2f8]">Professional Course</h1>
                    <p className="">Complete web development course with Jhankar Mahbub</p>
                    
                    <p>Duration: July 2023 - Decembar 2023</p>
                 </div>
                </div>

                

            </div>
        </div>
    );
};

export default Experience;