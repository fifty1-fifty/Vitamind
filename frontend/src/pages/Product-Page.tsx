/*import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Lookup from "../components/home-comp/lookup";
import Background from '../components/background-comp/BackgroundMain.tsx';
import Barcode from '../components/barcode-comp/barcode-scanner.tsx';
import {buildPath } from '../../../utils.ts';*/
import ProductStats from '../components/nutrients-comp/stat-layout.tsx';
import Background from '../components/background-comp/Background'
import '../components/nutrients-comp/stat-layout.css';



const ProductPage = () =>
{
   function gotoHome()
   {
     window.location.href = '/home';
   }

   function gotoScanner()
   {
     localStorage.setItem('openScannerOnRedirect', 'true');
     window.location.href = '/home';
   }


 
    return (  
        <div className="container-fluid">
            <div className='row justify-content-center' id='product-container-width-formatting'>
           
                 <div className='col' id='main-content-area'>
                      <div className='row' id='top-navigation-button-area'>  
                           <button className='top-navigation-buttons' onClick={gotoHome}><i className='material-icons' id='return-icon'>arrow_back_ios</i>Return</button>
                           <button className='top-navigation-buttons' onClick={gotoScanner}><i className='material-symbols-outlined' id='rescan-icon'>barcode_scanner</i>New Scan</button>
                      </div>
                      <div className='row'>
                          <ProductStats />
                      </div>
 

                </div>

            </div>
            <Background varColor='#040C1E' />
        </div>

       

          );
}

export default ProductPage;








/*   <div className="center">
          <ProductStats />  
          <Background varColor="#a4a4f7"/>
        </div> */



