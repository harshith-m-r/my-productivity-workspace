import React from 'react'
import Popup from 'reactjs-popup'
import TodoList from '../toDoList/todolist'
import AboutMe from '../aboutMe/aboutMe'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <>
    {/* <button className="homeBtn"> */}
      <NavLink to={'/'} title="Home">
        <img
          src="https://cdn-icons-png.flaticon.com/512/16/16304.png"
          className="homeIcon active"
          alt="Home"
        ></img>
      </NavLink>
    {/* </button> */}

    <Popup
      className="todoPopup"
      trigger={
        // <button className="todoBtn">
          <NavLink to={'/todolist'} title="Your ToDo List" target={""}>
            <img
              src="https://iconarchive.com/download/i105714/papirus-team/papirus-apps/gnome-todo.ico"
              className="todoIcon"
              alt="My ToDos"
            ></img>
          </NavLink>
        // </button> 
      }
      position="bottom center"
    >
      <div>
        <TodoList />
      </div>
    </Popup>

    <Popup
      className="notesPopup"
      trigger={
        // <button className="notesBtn">
          <NavLink to={'/notes'} title="Take Quick Notes" target={""}>
            <img
              src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/512/Note-icon.png"
              className="noteIcon"
              alt="Notes"
            ></img>
          </NavLink>
        // </button>
      }
      position="bottom center"
    >
      <div>
        <TodoList />
      </div>
    </Popup>

    <Popup
      className="aboutMe"
      trigger={
        // <button className="aboutBtn">
          <NavLink to={'/aboutme'} title="Get to know the developer" target={""}>
            <img
              src="https://icons.iconarchive.com/icons/designbolts/ios8-style-social/512/Spring.me-icon.png"
              className="aboutIcon"
              alt="About Me"
            />
          </NavLink>
        // </button>
      }
      position="bottom center"
    >
      <div>
        <AboutMe />
      </div>
    </Popup>
</>
  )
}

export default Navbar