import React from "react";
import "./taskCard.css";

type taskData = {
  //   id: number;
  //   taskItemName: string;
  //   status: boolean;
  taskItem: { id: number; title: string; status: boolean };
  taskId: number;
};

function TaskCard(props: taskData) {
  //   console.log(props.taskItem);
  return (
    <div className="todoCard">
      <span>
        <div className="taskName">{props.taskItem.title}</div>
        <div className="id">{props.taskItem.id}</div>
        <div className="status">Status : {props.taskItem.status}</div>
        {/* <div className="priority">Priority : </div> */}

        <button
          className="deleteBtn"
          //   id={props.taskItem.id}
          //   onClick={(event) => {
          //     console.log(event.target.id);
          //   }}
        >
          Delete
        </button>
        <button
          className="markDone"
          //   id={props.id}
          //   onClick={(event) => {
          //     modTask(event.target.id, event);
          //   }}
        >
          Mark Done
        </button>
      </span>
    </div>
  );
}

export default TaskCard;
