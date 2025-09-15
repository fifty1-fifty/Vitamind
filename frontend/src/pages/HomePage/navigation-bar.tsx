//import {useState} from "react";
//import { buildPath } from '../../../utils.ts';
//import '../components/home-comp/home.css';
//import './home.css';

import '../HomePage/home.css';

import React from 'react';

//import Calendar from '../../components/calendar/calendar';



type Props = {
  setValue : (date : Date) => void;
  displayedDate : string | null;
  toggleScanner : true | false;
  setToggleScanner : React.Dispatch<React.SetStateAction<true | false>>;
  setToggleCalendar : React.Dispatch<React.SetStateAction<boolean>>;
  toggleCalendar : boolean;
};


let NavigationBar : React.FC<Props> = ({ 
  setValue,
  displayedDate,
  toggleScanner,
  setToggleScanner,
  setToggleCalendar,
  toggleCalendar
}) => {


  function handleToggleCalendar() 
  {
    //console.log("too spicy");
    //setToggleCalendar(state);
    toggleCalendar = !toggleCalendar;
    setToggleCalendar(toggleCalendar);
    //console.log('toggling calendar' + toggleCalendar);
  }

  function handleToggleScanner()
  {
    //console.log('BEFORE' + toggleScanner);
    //console.log('i am a gay');
    toggleScanner = !toggleScanner;
    setToggleScanner(toggleScanner);
    //console.log('AFTER' + toggleScanner);    
  }

  return (  

  <div className='navbar-container'>
      


      <div className='row'>
            <div className='date-container'>
                <span id='displayed-date'> {displayedDate} </span>
            </div>
      </div>

      <div className='row'>
          <div className='col justify-content-center' style={{display: 'flex', alignItems: 'center'}}>
              <button className='navigation-buttons-formatting' onClick={() => handleToggleCalendar()}> <span className="material-icons navi-icon-formatting">calendar_month</span> </button>           
          </div>

          <div className='col justify-content-center' style={{display: 'flex', alignItems: 'center'}}>
              <button className='navigation-buttons-formatting' onClick={() => handleToggleScanner()}> <span className="material-symbols-outlined navi-icon-formatting">barcode_scanner</span>  </button>
          </div>

          <div className='col justify-content-center' style={{display: 'flex', alignItems: 'center'}}>
              <button className='navigation-buttons-formatting'> <span className="material-icons navi-icon-formatting">menu</span> </button>
          </div>
      </div>
  



  </div>
  );
};

export default NavigationBar; 