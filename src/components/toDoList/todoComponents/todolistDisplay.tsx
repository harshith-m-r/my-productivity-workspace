import React from "react";
import TaskCard from "./taskCard";
import { taskObject } from "../todolist";

type propsType = {
  taskArray: {}[];
};

function TodolistDisplay(props: propsType) {
  const tasks = props.taskArray;
  //   console.log(tasks);
  const taskList = tasks.map((task: any, index: number & Number) => {
    console.log(index);
    return (
      <TaskCard key={index} taskId={index} taskItem={task} />
      //   console.log(task)
    );
  });
  return <div className="todosDisplayArea">{taskList}</div>;
}

export default TodolistDisplay;
