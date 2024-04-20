
import './App.css';
import Taskbar from "./components/Taskbar/Taskbar.js"
import Map from "./components/Map/Map.js"
import Axios from 'axios'

import {useState, useEffect} from 'react'

function App() {

  const [listOfUsers, setListOfUsers] = useState([])

  useEffect( () => {
    Axios.get("http://localhost:3001/getBuildings").then((response) => {
      setListOfUsers(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Taskbar></Taskbar>
      <Map></Map>
      <div>
        {
          listOfUsers.map( (user) => {
            return (
            <div>
              <h1>Name: {user.name}</h1>
              </div>)
          })
        }

      </div>
    </div>
  );
}

export default App;
