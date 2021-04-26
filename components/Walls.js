import React, { useState } from "react";

const Walls = ({ walls }) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-1 overflow-hidden">
            {walls.map((wall) => (
              <div
                key={wall.id}
                className="my-1 px-1 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
              >
                <a href={wall.url} alt="download wallpaper" target="_blank">
                  <img
                    className="rounded shadow-lg sm:h-80 sm:w-150 object-cover object-center mb-2"
                    src={wall.small_img}
                    alt={wall.title}
                  />
                </a>
                <div>
                  <div className="mt-2 font-bold text-md">{wall.title}</div>
                  <div className="text-md">
                    by:{" "}
                    <a
                      href={`https://www.reddit.com/user/${wall.author}`}
                      className="text-indigo-500"
                    >
                      {wall.author}
                    </a>
                  </div>
                  <div className="text-md mb-1">Upvotes: {wall.ups}</div>

                  <a href={wall.url} alt="download wallpaper" target="_blank">
                    <button className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-3 rounded inline-flex items-center transform hover:translate-y-1 transition my-2 ">
                      <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      <span>Download</span>
                    </button>
                  </a>

                  <a href={`https://www.reddit.com${wall.permalink}`}>
                    <div className="text-xs ">View on Reddit.com</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Walls;
