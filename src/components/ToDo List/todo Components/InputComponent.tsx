import { keyboardKey } from "@testing-library/user-event";
import React from "react";
import "./inputComponent.css";
import { useState } from "react";

function InputComponent() {
  const [msg, setMsg] = useState("");

  const handleChange = (event: any) => {
    setMsg(event.target.value);
  };

  const checkKeyDown = (event: keyboardKey, textContent: string) => {
    if (event.key === "Enter") {
      // console.log(event);
      if (textContent) {
        const name = textContent;
        actOnClickOrOnEnter(event, name);
      } else {
        alert("Enter something first...");
      }
    }
  };

  const actOnClickOrOnEnter = (event: keyboardKey, name: string) => {
    if (name) {
      // props.updateState({
      //   id: randomID,
      //   taskName: name,
      //   taskStatus: "New",});
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
