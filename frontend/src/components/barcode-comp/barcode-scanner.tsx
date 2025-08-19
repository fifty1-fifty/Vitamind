import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import './barcode.css';
import Overlay from './barcode-overlay.svg';

type Props = {
    toggleScanner : true | false;
    setToggleScanner : React.Dispatch<React.SetStateAction<true | false>>
};

const BarcodeScanner: React.FC<Props> = ({ toggleScanner, setToggleScanner }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [result, setResult] = useState<string>("");

 useEffect(() => {
  const codeReader = new BrowserMultiFormatReader();

  codeReader.decodeFromVideoDevice(
    undefined,
    videoRef.current!,
    (decodedResult) => {
      if (decodedResult) {
        const text = decodedResult.getText();
        setResult(text);
      }
    }
  );

 /* return () => {
    //(codeReader as any).reset(); // bypass TypeScript error
  }; */
}, []); 

  useEffect(() => {
    if (result) {
      switchOffScanner();
      window.location.href = `/product?productid=${encodeURIComponent(result)}`;
    }
  }, [result, toggleScanner]);


  return (
 
    <div className="row">
      <div className="live-feed-container">
        <img src={Overlay} id='image-barcode-overlay'/>
        <video id="feed-styling" ref={videoRef} />
      </div>
      <button onClick={() => setToggleScanner(true)} id='return-button'>
        
        <i id='return-icon-style' className="material-icons">turn_left</i>Return      
      </button>

      
    </div>
  );
};

export default BarcodeScanner;
