import React, {useState} from 'react'
import "./SearchResultsList.css"
import SearchResult from "./SearchResult/SearchResult"

const SearchResultsList = ({results, isSearchBarActive}) => {

  return (

    
    
    isSearchBarActive &&
    <div className = "results-list">
    { results.map( (result, id) => {
            return <SearchResult result = {result}/>
        })
    }
    </div>
  )
}

export default SearchResultsList
