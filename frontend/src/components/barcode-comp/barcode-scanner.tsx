import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { Result } from "@zxing/library";

type Props = {
  switchOffScanner: () => void;
};

const BarcodeScanner: React.FC<Props> = ({ switchOffScanner }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    let isMounted = true;

    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current!,
      (result: Result | undefined) => {
        if (isMounted && result) {
          const text = result.getText();
          setResult(text);
        }
      }
    );

    return () => {
      isMounted = false;
      codeReader.stopContinuousDecode();
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
