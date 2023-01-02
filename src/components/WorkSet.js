import React from "react";

const WorkSet = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
      {/* Grid item */}
      {data.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              backgroundImage: `url(${el.pic})`,
            }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider">
                {el.about}
              </span>
              <div className="pt-8 text center">
                <a target="_blank" href={`${el.demoLink}`}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg  text-white  bg-black">
                    Visit
                  </button>
                </a>
                <a target="_blank" href={`${el.source}`}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-white text-lg bg-black">
                    FrontEnd
                  </button>
                </a>
                <a target="_blank" href={`${el.sourceBack}`}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-white text-lg bg-black">
                    BackEnd
                  </button>
                </a>
              </div>

              <div style={{ display: "flex" }}>
                {el.skills.map((list, i) => {
                  return (
                    <div
                      key={i}
                      className="text-center rounded-lg p-1 mr-1 text-white text-lg bg-black "
                    >
                      {list}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkSet;
