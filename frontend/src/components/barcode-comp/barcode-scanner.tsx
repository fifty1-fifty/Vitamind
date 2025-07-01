import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import "./barcode.css";
import Background from '../background-comp/BackgroundMain.tsx';


type Props =
{
  switchOffScanner: () => void;
}

const BarcodeScanner: React.FC<Props> = ({ switchOffScanner }) =>
{

  const returnLog = (result) =>
  {
    //console.log(result);
    switchOffScanner();
    window.location.href = `/product?productid=${result}`;
  }



  const videoRef = useRef(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    codeReader.decodeFromVideoDevice(
      null, // Use default camera
      videoRef.current,
      (result, err) => {    
        if (result) {
          setResult(result.getText());
		  console.log(results);
          //codeReader.reset(); // Stop after first successful scan
        }
      }
    );

    return () => {
      //codeReader.reset(); // Clean up on unmount
    };
  }, []);

  return (
      
      <div className="row" id="test">
        

        <div className="live-feed-container">
          <video id="feed-styling" ref={videoRef} />
          {result && returnLog(result)}
          <button onClick={switchOffScanner}>Return</button>
          </div>

             
      <div className="backity">
        <span></span>
      </div>


      </div>
  );
};

export default BarcodeScanner;

//style={{ width: "100%", maxHeight: 900 }}
