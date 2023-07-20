import React from "react";
import "./Toggle.css";
const Toggle = ({ clicktogle }) => {
  function handleClick(event) {
    const btnId1 = document.getElementById("Linechart");
    const btnId2 = document.getElementById("Table");
    const selectbtnid = document.getElementById(event.target.id);
    btnId1.classList.remove("selected");
    btnId2.classList.remove("selected");
    selectbtnid.classList.add("selected");
  }

  return (
    <div className="Toggle-Container">
      <button
        className="btn selected"
        id="Linechart"
        onClick={(event) => {
          clicktogle();
          handleClick(event);
        }}
      >
        Line chart
      </button>
      <button
        className="btn"
        id="Table"
        onClick={(event) => {
          clicktogle();
          handleClick(event);
        }}
      >
        Table
      </button>
    </div>
  );
};

export default Toggle;
