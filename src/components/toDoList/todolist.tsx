import React, { useState } from "react";
import "./todolist.css";
import InputComponent from "./todoComponents/inputComponent";
import TodolistDisplay from "./todoComponents/todolistDisplay";


export interface taskObject {
  id: Number;
  title: string;
  // priority: "Low" | "Medium" | "High";
  status: "New" | "In-progress" | "Completed";
}

// let newTaskObject: taskObject;

const taskArray: {}[] = [];

function TodoList() {
  const [todo, setTodo] = useState(taskArray);

  const updateTodoState = (newTaskObj: taskObject) => {
    taskArray.push(newTaskObj);
    setTodo([...taskArray]);
    // console.log(taskArray);
  };

  // const onMarkDone = (indexId, event) => {
  //   const affirm = window.confirm("Confirm task completion.");
  //   if (affirm) {
  //     taskObj[indexId]["taskStatus"] = "Completed";
  //     console.clear();
  //     setTask([taskObj]);
  //     event.currentTarget.disabled = true;
  //   }
  // };

  // const deleteTask = (indexId) => {
  //   delete taskObj[indexId];
  //   setTodo([...taskArray]);
  //   // console.log(taskObj);
  // };

  return (
    <>
    <div className="todosComponent">
      <div className="label">Todolist</div>
      <InputComponent todoStateUpdater={updateTodoState} />
      <TodolistDisplay taskArray={taskArray} />
    </div>

    </>
  );
}

export default TodoList;
