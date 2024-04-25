
import React from 'react'
import "./Taskbar.css"
import logo from "./taskbar-images/pnw-logo.png"
import SearchBar from "./SearchBar/SearchBar"

function Taskbar() {

    return (
    <div className = "taskbar">

      <a href = "/" id = "pnw-logo"><img src={logo} alt="PNW Logo" id = "pnw-logo"/></a>

      <ul className="taskbar-menu">
        <li><a href="https://www.pnw.edu/events/category/university-calendar/" target = "_blank">Events</a></li>
        <li><a href="1">Element 1</a></li>
        <li><a href="2">Element 2</a></li>
        <li><a href="3">Element 3</a></li>
        <li><a href="4">Element 4</a></li>
      </ul>

      <div className = "search-and-sign-in">
        <SearchBar className = "search"/>
        <button className="taskbar-button">Sign In</button>
      </div>
      

    </div>
    )

}

export default Taskbar