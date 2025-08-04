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
            
                <div className='col' id='navigation-button-area'>
                    <div id='navigation-button-area-shift'>
                        <button id='navi-button' onClick={gotoScanner}>New Scan<i className='material-symbols-outlined' id='navigation-bar-button-icon'>barcode_scanner</i></button>
                        <button id='navi-button' onClick={gotoHome}>Return<i className='material-icons' id='navigation-return-button-icon'>reply</i></button>
                    </div>
                </div>

                <div className='col-6' id='main-content-area'>
                    <ProductStats />
                </div>

                <div className='col' id='test3'>
                    <button><i className='material-icons'>account_circle</i></button>
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



