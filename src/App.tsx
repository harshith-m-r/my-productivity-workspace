import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import TodoList from "./components/toDoList/todolist";
import AboutMe from "./components/aboutMe/aboutMe";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="todolist" element={<TodoList/>} />
          <Route path="aboutme" element={<AboutMe/>}/>
        </Route>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
