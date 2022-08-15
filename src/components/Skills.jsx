import React from "react";
import css from "../assests/css.png";
import github from "../assests/github.png";
import html from "../assests/html.png";
import node from "../assests/node.png";
import react from "../assests/react.png";
import tailwind from "../assests/tailwind.png";
import javascript from "../assests/javascript.png";
import bootstrap from "../assests/bootstrap.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-r from-zinc-50 to-[#C1EFFF]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={bootstrap} alt="HTML icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
