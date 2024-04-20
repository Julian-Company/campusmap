
import React, {useState} from 'react'
import "./SearchBar.css"
import Axios from 'axios'
import SearchResultsList from './SearchResultsList/SearchResultsList';

function SearchBar() {
    const [results, setResults] = useState([])
    const [input, setInput] = useState("");
    const fetchData = (value) => {

        Axios.get("http://localhost:3001/getBuildings")
            .then( (response) => {
                const results = response.data.filter( (user) => {
                    return value && 
                        user && 
                        user.name && 
                        user.name.toLowerCase().includes(value)
                    })
                setResults(results)
            })
            .catch(err => {
                console.error("Error: ", err)
            })

    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }


    return (
        <div className = "search-bar">
            <input type="text" placeholder="Search Location" value = {input} onChange = {(e) => handleChange(e.target.value)}></input>
            <SearchResultsList results = {results} ></SearchResultsList> 
        </div>
    )

}

export default SearchBar