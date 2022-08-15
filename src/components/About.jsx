import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-zinc-50">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-black">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hi I'm Karthikeyan, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            A self-motivated and enthusiastic web developer with a deep interest
            in JavaScript. To work in the Software industry with modern web
            technologies of different local & multinational Software/ IT
            agencies of India and grow rapidly with increasing responsibilities.
            <br />
            Now Pursuing <b>MERN</b> Full stack web development course in Guvi
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
