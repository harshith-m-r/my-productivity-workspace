import { keyboardKey } from "@testing-library/user-event";
import React from "react";
import "./inputComponent.css";
import { useState } from "react";
import { taskObject } from "../Todolist";

type propsType = {
  todoStateUpdater: (newTaskObj: taskObject) => void;
};

function InputComponent(props: propsType) {
  const [msg, setMsg] = useState("");

  const handleChange = (event: any) => {
    setMsg(event.target.value);
  };

  let newTaskObject: taskObject;

  const checkKeyDown = (event: keyboardKey, textContent: string) => {
    if (event.key === "Enter") {
      // console.log(event);
      if (textContent) {
        // const name = textContent;
        actOnClickOrOnEnter(textContent);
      } else {
        alert("Enter something first...");
      }
    }
  };

  const actOnClickOrOnEnter = (name: string) => {
    const randId: Number = Date.now();
    if (name) {
      newTaskObject = { id: randId, title: name, status: "New" };
      // console.log(newTaskObject);
      props.todoStateUpdater(newTaskObject);
      setMsg("");
    } else alert("Enter something first...");
  };

  return (
    <div className="inputComponent">
      <input
        type="text"
        className="inputField"
        placeholder="Add task title here..."
        onChange={(event) => handleChange(event)}
        value={msg}
        onKeyDown={(event: keyboardKey) => checkKeyDown(event, msg)}
      />
    </div>
  );
}

export default InputComponent;
