import React from "react";

const Walls = ({ walls }) => {
  console.log(walls);
  return (
    <div>
      {walls.map((wall) => (
        <h1 key={wall.data.id}>{wall.data.author}</h1>
      ))}
      <h1>Here the walls will come</h1>
    </div>
  );
};

export default Walls;
