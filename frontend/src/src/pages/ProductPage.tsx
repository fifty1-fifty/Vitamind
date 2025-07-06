/*import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Lookup from "../components/home-comp/lookup";
import Background from '../components/background-comp/BackgroundMain.tsx';
import Barcode from '../components/barcode-comp/barcode-scanner.tsx';
import {buildPath } from '../../../utils.ts';*/
import ProductStats from '../components/nutrients-comp/stat-layout.tsx';



const ProductPage = () =>
{
 
    return (  
        <div className="center">
          <ProductStats />  
        </div>
    );
}

export default ProductPage;


