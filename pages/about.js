import React from "react";

const about = () => {
  return (
    <div className="text-center" style={{ height: "80vh" }}>
      <h1 className="text-2xl my-10 font-bold">Hi 👋, I am Shubh Agrawal. </h1>
      <div className="mb-2">
        I am a Full Stack Developer and I love to create software and write
        about things. <br /> You can connect with me at my website{" "}
        <a
          target="_blank"
          href="https://www.theshubhagrwl.in"
          className="text-blue-500"
        >
          theshubhagrwl.in
        </a>
      </div>
      <div>
        You can view this project on{" "}
        <a
          href="https://github.com/theshubhagrwl/react-wall-app"
          className="text-blue-500"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default about;
