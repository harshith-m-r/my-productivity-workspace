import React from "react";
import "./notesBoard.css";

function RecentNotesBoard() {
  return (
    <>
      <div className="noteTileLabel">Most Recent Notes</div>
      <div className="notesCard">
        <div className="noteText">
          This is a note template to give an idea of how a note would look like.
        </div>
      </div>

      <div className="notesCard">
        <div className="noteText">
          This is a note template to give an idea of how a note would look like.
        </div>
      </div>

      <div className="notesCard">
        <div className="noteText">
          This is a note template to give an idea of how a note would look like.
        </div>
      </div>

      {/* <button className="addNewNoteBtn">+</button> */}
    </>
  );
}

export default RecentNotesBoard;
