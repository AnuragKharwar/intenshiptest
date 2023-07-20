import React from "react";
import { Personaldata } from "../Data/Personaldata";
import icon from "../Data/Icon/man.png";
import "./Personaldetail.css";
const Personaldetail = () => {
  const showdetail = () => {
    const pc = document.getElementById("personal-container");
    pc.classList.add("show_detail");
    const closebtn = document.getElementById("closebtn");
    closebtn.classList.add("close_btn_show");
  };
  const hidedetail = () => {
    const pc = document.getElementById("personal-container");
    pc.classList.remove("show_detail");
    const closebtn = document.getElementById("closebtn");
    closebtn.classList.add("close_btn_show");
  };
  window.addEventListener("click", function (e) {
    if (
      !e.target.classList.contains("close_btn") &&
      !e.target.classList.contains("detail_icon")
    ) {
      hidedetail();
    }
  });

  return (
    <div className="personal-container" id="personal-container">
      <span className="iconname">
        <p>Name : {Personaldata.name}</p>
        <img
          className="detail_icon"
          id="icon"
          src={icon}
          onClick={showdetail}
          alt="user"
        ></img>
        <span className="close_btn" id="closebtn" onClick={hidedetail}>
          ❌
        </span>
      </span>
      <span>Email : </span>
      <a href="mailto: `${Personaldata.email}`">{Personaldata.email}</a>
      <p>Contact : {Personaldata.contactno}</p>
    </div>
  );
};

export default Personaldetail;
