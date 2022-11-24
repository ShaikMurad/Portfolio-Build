import React from "react";
import WorkSet from "./WorkSet";

const data = [
  {
    pic: "https://images.unsplash.com/photo-1653202293335-92f6ace9943f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80",
    about: "Platform for renting equipments made easier",
    demoLink: "https://equiphunter.netlify.app",
    source: "https://github.com/KarthikeyanKanniappan/Hackathon-2",
    sourceBack: "https://github.com/KarthikeyanKanniappan/Hackathon2-server",
  },
];

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
