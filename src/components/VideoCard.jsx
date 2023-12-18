import React from "react";
import PlayButton from "../svgs/PlayButton";
import "../styles/VideoCard.css";

function VideoCard({ index, image, name }) {
  return (
    <div
      className="videoCard"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <a href="#/">{<PlayButton />}</a>
      <p>{name}</p>
    </div>
  );
}

export default VideoCard;
