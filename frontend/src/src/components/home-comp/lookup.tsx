//import { useState } from 'react';
//import { buildPath } from '../../../../utils.ts'
import "./home.css"

type Props = 
{
  switchToScanner: () => void;
}

const Lookup: React.FC<Props> = ({ switchToScanner }) =>
{
    return (
        <div className="search-bar-area">
             <span className="material-icons" id="search-icon">search</span>
             <input type="text" id="searchbar" placeholder=""></input>
             <button id='barcode-scan-button' onClick={switchToScanner}>
                <span className="material-icons" id='barcode-icon'>
                    barcode_reader
                </span>
             </button>
        </div>
       
    );
};
export default Lookup;
