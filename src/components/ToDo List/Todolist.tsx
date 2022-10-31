import React, { useState } from "react";
import "./todolist.css";
import InputComponent from "./todo Components/InputComponent";

interface taskObject {
  id: number;
  title: string;
  isComplete: boolean;
}

const taskArray: Array<taskObject> = [];

function TodoList() {
  const [todo, setTodo] = useState(taskArray);

  //   const updateState = (newTaskObj: taskObject) => {
  //     setTodo(newTaskObj);
  //     taskArray.push(newTaskObj);
  //   };

  return (
    <div className="todosComponent">
      <InputComponent />
    </div>
  );
}

export default TodoList;
