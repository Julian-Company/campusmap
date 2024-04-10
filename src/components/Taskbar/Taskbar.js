
import React from 'react'
import "./Taskbar.css"
import logo from "./pnw-logo.png"

function Taskbar() {

    return (
    <div className = "taskbar">
      <img src={logo} alt="PNW Logo" id = "pnw-logo"/>   
      <ul className="taskbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="https://www.pnw.edu/events/category/university-calendar/" target = "_blank">Events</a></li>
        <li><a href="#">Buildings</a></li>
      </ul>
      <button className="taskbar-button">Sign In</button>
    </div>
    )

}

export default Taskbar