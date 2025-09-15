declare module "react-qr-barcode-scanner" {
  import * as React from "react";

  export interface BarcodeScannerProps {
    onUpdate: (err: unknown, result?: any) => void;
    onError?: (err: string | DOMException) => void;
    width?: string | number;
    height?: string | number;
    facingMode?: "user" | "environment";
    torch?: boolean;
    delay?: number;
    videoConstraints?: MediaTrackConstraints;
    stopStream?: boolean;
    formats?: string[];
  }

  const BarcodeScanner: React.FC<BarcodeScannerProps>;
  export default BarcodeScanner;
}
