
import React from 'react';
import Header from '../../components/Header';
import { Link } from "react-router-dom";
import SearchBar from './Search/search';
import "./Search/search.css"


function Search() {



  return (
    <div className="App">
        <div className="NotificatiOn">
            <Link className="btn-circl" to="/Notification" >Icon</Link>
          </div>

          <div className="content-text">
              <h1 className="title">Search</h1>
            
          </div>
        <div id='search' className="App-Search">
        <SearchBar/>
        </div>
        <Header/>
      
    </div>
  );
}

export default Search;
