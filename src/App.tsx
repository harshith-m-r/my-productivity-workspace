import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TodoList from "./components/ToDo List/Todolist";
import AboutMe from "./components/AboutMe/AboutMe";
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
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
