import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

type Props = {
  switchOffScanner: () => void;
};

const BarcodeScanner: React.FC<Props> = ({ switchOffScanner }) => {
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

    return () => {
      codeReader.stopDecoding(); // or stopContinuousDecode() if using that method
    };
  }, []);

  useEffect(() => {
    if (result) {
      switchOffScanner();
      window.location.href = `/product?productid=${encodeURIComponent(result)}`;
    }
  }, [result, switchOffScanner]);

  return (
    <div className="row" id="test">
      <div className="live-feed-container">
        <video id="feed-styling" ref={videoRef} />
        <button onClick={switchOffScanner}>Return</button>
      </div>
    </div>
  );
};

export default BarcodeScanner;
