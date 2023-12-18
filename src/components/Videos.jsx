import React from "react";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  return (
    <div
      className="videos"
      n
      style={{
        display: "flex",
        margin: "auto",
        width: "90vw",
      }}
    >
      {videos.map((item, index) => (
        <VideoCard
          index={index}
          key={item.image}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
}

export default Videos;
