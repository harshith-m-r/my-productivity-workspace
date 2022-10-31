import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type newsProps = {
  newsItemName: string;
  link: string;
};

function NewsItemCard(props: newsProps) {
  return (
    <>
      <div className="newsCard">
        <div className="newsText">{props.newsItemName}</div>
        <a className="moreLink" href={props.link} target="new">
          Read More
        </a>
      </div>
    </>
  );
}

export default NewsItemCard;
