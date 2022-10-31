import React from "react";
import "./techNewsArea.css";
import { useState, useEffect } from "react";
import NewsItemCard from "./NewsItemCard";

function TechNewsArea() {
  const [newsArr, setNewsArr] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_12209740749f434a621038f18b770094eeddd&q=india"
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        const newsData = response.results;
        // console.log(newsData);
        setNewsArr(newsData);
      });
  }, []);

  const newsItems = newsArr;
  const newsList = newsItems.slice(0, 4).map((newsItem: any, index: number) => {
    return <NewsItemCard newsItemName={newsItem.title} link={newsItem.link} />;
  });

  return (
    <>
      <div className="newsTileLabel">Most Recent Notes</div>
      <>{newsList}</>
      <div className="providerCredits">
        News by <a href="https://newsapi.org">newsapi.org</a>
      </div>
    </>
  );
}

export default TechNewsArea;
