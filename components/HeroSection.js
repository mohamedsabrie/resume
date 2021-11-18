import { Link } from "react-scroll";

function HeroSection() {
  
  return (
    <div id="home" className="bg-hero-background bg-cover bg-center  relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
      <div
        className={`container relative flex   items-center justify-center h-screen`}
      >
        <div>
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl lg:text-5xl  ">
              <span className="name inline-block mb-3"> Mohamed Sabry </span>
              <br />
              <span className="job_title inline-block">Front End Developer | React.js</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row  justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 mt-10">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
              className=" bg-gray-200 hover:bg-gray-300 text-center w-40 px-8 py-3 rounded-md text-lg font-semibold cursor-pointer   transition-all duration-500"
            >
              About me
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
              className=" bg-primary hover:bg-green-600  text-center text-white w-40 px-8 py-3 rounded-md text-lg font-semibold cursor-pointer   transition-all duration-500"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
