
import React from 'react'
import "./Taskbar.css"
import logo from "./pnw-logo.png"

function Taskbar() {

    return (
    <div className = "taskbar">

      <img src={logo} alt="PNW Logo" id = "pnw-logo"/>

      <ul className="taskbar-menu">
        <li><a href="https://www.pnw.edu/events/category/university-calendar/" target = "_blank">Events</a></li>
        <li><a href="#">Element 1</a></li>
        <li><a href="#">Element 2</a></li>
        <li><a href="#">Element 3</a></li>
        <li><a href="#">Element 4</a></li>
      </ul>

      <button className="taskbar-button">Sign In</button>

    </div>
    )

}

export default Taskbar