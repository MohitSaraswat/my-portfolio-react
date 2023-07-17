import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    }
  ];

  return (
    <div
      name="portfolio"
      className="pt-20 lg:pt-28 px-8 lg:px-40 w-full h-full text-white"
    >
      <div className="">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 red-border">
            Portfolio
          </p>
        </div>
        <p className="text-xl mt-4 pb-12">Check out some of my work right here</p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
