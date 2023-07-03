import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
        </div> 
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex
          magni exercitationem alias, minima voluptas. Minus, esse? Optio cum,
          libero corporis ducimus perferendis tempora, dignissimos placeat
          accusantium recusandae dolore illo id temporibus voluptatum corrupti
          est quo ea omnis facilis vitae.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          eveniet, dolores consectetur eos ullam quidem explicabo molestiae ipsa
          id quos esse alias odio suscipit ad voluptate, laudantium, voluptatum
          provident delectus.
        </p>
      </div>
    </div>
  );
};

export default About;
