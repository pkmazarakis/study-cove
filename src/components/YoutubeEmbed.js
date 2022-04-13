import React from "react";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId }) => (
  <div
    style={{
      borderRadius: "100px",
      justifyContent: "center",
      alignSelf: "center",
      display: "flex",
      flex: 1,
      width: "100%",
    }}
  >
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5qap5aO4i9A"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
