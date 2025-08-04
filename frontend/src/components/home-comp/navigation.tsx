//import {useState} from "react";
//import { buildPath } from '../../../utils.ts';
//import '../components/home-comp/home.css';
import './home.css';


let NavigationBar = ({ 
date='',
incrementDateOffset? : () => void;
decrementDateOffset? : () => void;
}) => {



  

  return (

  <div className='navbar-container'>
    <button id='navigationButton' onClick={() => decrementDateOffset()}> <i className='material-icons' id='navigation-icon'>arrow_back</i> </button>
      <span id='date-safe-area'>{date}</span>
    <button id='navigationButton' onClick={() => incrementDateOffset()}> <i className='material-icons' id='navigation-icon' >arrow_forward</i> </button>
  </div>
  );
};

export default NavigationBar; 








        
