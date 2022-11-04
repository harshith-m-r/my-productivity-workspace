import React from "react";
import Popup from "reactjs-popup";
import "./home.css";
import RecentNotesBoard from "../homeContents/recentNotesBoard";
import TaskStatusBoard from "../homeContents/taskStatusBoard";
import TechNewsArea from "../homeContents/techNewsArea";
import YoutubeWidget from "../homeContents/youtubeWidget";
import Navbar from "../homeContents/navbar";

function Home() {
  return (
    <div className="homeGrid">
      <div className="header">
        <span className="title">My productivity workspace</span>
        <span className="userProfile">Hey, user.!</span>
      </div>

      <div className="navbar">
        <Navbar/>
      </div>

      <div className="tasksBoard">
        <TaskStatusBoard />
      </div>

      <div className="notesBoard">
        <RecentNotesBoard />
      </div>

      <div className="techNews">
        <TechNewsArea />
      </div>

      <div className="youtubeWidget">
        <YoutubeWidget />
      </div>

      <div className="footer">
        <div className="footer-content">
          <p className="footerTitle">xyz</p>
          <p className="footerDesg">Developer</p>
          <ul className="socials">
            <li>
              <a href="#" target="1" title="github">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" target="2" title="instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="3" title="linkedin">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">copyright &copy;</div>
      </div>
    </div>
  );
}

export default Home;
