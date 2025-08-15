//import { useState } from 'react';
//import { buildPath } from '../../../../utils.ts'
import "./home.css"

type Props = 
{
  switchToScanner: () => void;
}

const Lookup: React.FC<Props> = ({ switchToScanner }) =>
{
	console.log('balls search.tsx' + switchToScanner);
    return (
        <div className="search-bar-area">
             <span className="material-icons" id="search-icon">search</span>
             <input type="text" id="searchbar" placeholder=""></input>
        </div>
       
    );
};
export default Lookup;
