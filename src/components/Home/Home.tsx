import React from "react";
import Popup from "reactjs-popup";
import "./home.css";
import RecentNotesBoard from "../homeContents/RecentNotesBoard";
import TaskStatusBoard from "../homeContents/TaskStatusBoard";
import TechNewsArea from "../homeContents/TechNewsArea";
import YoutubeWidget from "../homeContents/YoutubeWidget";
import TodoList from "../ToDo List/Todolist";

function Home() {
  return (
    <div className="homeGrid">
      <div className="header">
        <span className="title">My productivity workspace</span>
        <span className="userProfile">Hey, user.!</span>
      </div>

      <div className="navbar">
        <button className="homeBtn">
          <a href="" title="Home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/16/16304.png"
              className="homeIcon active"
              alt="Home"
            ></img>
          </a>
        </button>

        <Popup
          className="todoPopup"
          trigger={
            <button className="todoBtn">
              <a href="#" title="Your ToDo List" target={""}>
                <img
                  src="https://iconarchive.com/download/i105714/papirus-team/papirus-apps/gnome-todo.ico"
                  className="todoIcon"
                  alt="My ToDos"
                ></img>
              </a>
            </button>
          }
          position="bottom center"
        >
          <div>
            <TodoList />
          </div>
        </Popup>

        {/* 
        <button className="todoBtn">
          <a href="ToDos" title="Your ToDo List">
            <img
              src="https://iconarchive.com/download/i105714/papirus-team/papirus-apps/gnome-todo.ico"
              className="todoIcon"
              alt="My ToDos"
            ></img>
          </a>
        </button> */}

        {/* <button className="notesBtn">
          <a href="" title="Take Quick Notes">
            <img
              src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/512/Note-icon.png"
              className="noteIcon"
              alt="Notes"
            ></img>
          </a>
        </button> */}

        <Popup
          className="notesPopup"
          trigger={
            <button className="notesBtn">
              <a href="#" title="Take Quick Notes" target={""}>
                <img
                  src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/512/Note-icon.png"
                  className="noteIcon"
                  alt="Notes"
                ></img>
              </a>
            </button>
          }
          position="bottom center"
        >
          <div>
            <TodoList />
          </div>
        </Popup>

        {/* <button className="aboutBtn">
          <a href="" title="Get to know the developer">
            <img
              src="https://icons.iconarchive.com/icons/designbolts/ios8-style-social/512/Spring.me-icon.png"
              className="aboutIcon"
              alt="About Me"
            />
          </a>
        </button> */}

        <Popup
          className="aboutMe"
          trigger={
            <button className="aboutBtn">
              <a href="#" title="Get to know the developer" target={""}>
                <img
                  src="https://icons.iconarchive.com/icons/designbolts/ios8-style-social/512/Spring.me-icon.png"
                  className="aboutIcon"
                  alt="About Me"
                />
              </a>
            </button>
          }
          position="bottom center"
        >
          <div>
            <TodoList />
          </div>
        </Popup>
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
              <a href="#" target="1">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" target="2">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="3">
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
