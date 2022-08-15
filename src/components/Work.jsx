import React from "react";

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <div
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/VhzByKYSbQRhETbeOJYebXG9cFRWFcAkqIXl9l11iiHfuJHer2e57_3Hvscf4IVkVySr)`,
            }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider">
                React JS Application In progress
              </span>
              <div className="pt-8 text center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg  text-white  bg-black">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-white text-lg bg-black">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
