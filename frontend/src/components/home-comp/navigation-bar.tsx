//import {useState} from "react";
//import { buildPath } from '../../../utils.ts';
//import '../components/home-comp/home.css';
//import './home.css';
import '../TESTTESTTEST/test.css';
import Test from '../TESTTESTTEST/test';
import React from 'react';



type Props = {
  setValue : (date : Date) => void;
  displayedDate : string;
}


let NavigationBar : React.FC<Props> = ({ 
  setValue,
  displayedDate
}) => {



  

  return (  

  <div className='navbar-containee'>
      


      <div className='row'>
            <div className='date-container'>
                <span id='displayed-date'> {displayedDate} </span>
            </div>
      </div>

      <div className='row'>
          <div className='col navigation-buttons-formatting'>
              <Test setValue={setValue}/>
          </div>

          <div className='col'>
              <button className='navigation-buttons-formatting'> <span className="material-symbols-outlined navi-icon-formatting">barcode_scanner</span>  </button>
          </div>

          <div className='col'>
              <button className='navigation-buttons-formatting'> <span className="material-icons navi-icon-formatting">menu</span> </button>
          </div>
      </div>
  



  </div>
  );
};

export default NavigationBar; 






/*   <button id='navigationButton' onClick={() => decrementDateOffset()}> <i className='material-icons' id='navigation-icon'>arrow_back</i> </button>
      <span id='date-safe-area'>{date}</span>
    <button id='navigationButton' onClick={() => incrementDateOffset()}> <i className='material-icons' id='navigation-icon' >arrow_forward</i> </button>*/


        




        
