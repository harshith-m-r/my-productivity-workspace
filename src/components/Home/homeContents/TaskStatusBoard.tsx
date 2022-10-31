import React from "react";
import "./taskStatus.css";

function TaskStatusBoard() {
  return (
    <>
      <div className="tileLabel">Tasks Status Board</div>
      <div className="todaysTasksArea">
        <div className="noOfTasks">10</div>
        <div className="descText">new tasks for today.</div>
      </div>

      <div className="ongoingTasksArea">
        <div className="noOfTasks">10</div>
        <div className="descText">ongoing tasks.</div>
      </div>

      <div className="todaysTasksArea">
        <div className="noOfTasks">10</div>
        <div className="descText">overdue today.</div>
      </div>
    </>
  );
}

export default TaskStatusBoard;
