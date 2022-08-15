import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-gradient-to-r from-zinc-50 to-[#C1EFFF]"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl sm:text-4xl">Hi, I'm </p>
        <h1 className=" pt-3 text-4xl sm:text-7xl font-bold">
          Karthikeyan Kanniappan
        </h1>
        <h2 className=" pb-2 text-2xl sm:text-4xl font-bold">
          A Newbie Full stack Developer
        </h2>
        <p className="text-2xl sm:text-4xl">
          Currently, I'm Focused on building responsive full-stack web
          application
        </p>
        <div>
          <button className="text-black group rounded-lg border-black border-2 px-6 py-2 my-2 flex items-center hover:bg-black hover:text-white ">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="pl-3 group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
