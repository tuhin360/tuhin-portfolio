import React from "react";
import firstImg from "../../assets/portfolio/profile01.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Front End Web Developer</h2>
          <p className="text-gray-500 py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            error nisi voluptate, quis eos accusamus laudantium distinctio
            incidunt ullam mollitia sed tempore ea ratione voluptas natus eaque
            necessitatibus unde officiis
          </p>
          <div>
            <button>
              Portfolio <span><FaArrowRight /></span>
            </button>
          </div>
        </div>
        <div>
            <img src={firstImg} alt="my profile" width="500" height="700" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
