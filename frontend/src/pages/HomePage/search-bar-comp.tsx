//import { useState } from 'react';
//import { buildPath } from '../../../../utils.ts'
import "./home.css"



const Search = () =>
{
    return (
        <div className="search-bar-area">
             <span className="material-icons" id="search-icon">search</span>
             <input type="text" id="searchbar" placeholder=""></input>
        </div>
       
    );
};
export default Search;
