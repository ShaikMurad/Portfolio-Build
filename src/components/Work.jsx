import React from "react";
import WorkSet from "./WorkSet";
import data from "./data.js";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-zinc-50 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container */}
        <WorkSet data={data} />
      </div>
    </div>
  );
};

export default Work;
