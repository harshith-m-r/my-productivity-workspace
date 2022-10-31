import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TodoList from "./components/ToDo List/Todolist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
