import React from "react";
import "./youtubeWidget.css";

function WeatherWidget() {
  return (
    <>
      <div className="weatherWidgetLabel">Focus Music</div>
      <div className="youtubeEmbed">
        <iframe
          className="youtubeEmbed"
          width="645"
          height="393"
          src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_kgR3fKD6TVQlr8TiN1XYCY8QNdm_8cvLk"
          title="YouTube video player"
          //   frameborder="1px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //   allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default WeatherWidget;
