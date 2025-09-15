import { useEffect, useState } from "react";
import BarcodeScanner from "react-qr-barcode-scanner";
import './barcode.css';
import Overlay from './barcode-overlay.svg'

type Props = {
    toggleScanner : true | false;
    setToggleScanner : React.Dispatch<React.SetStateAction<true | false>>
};



function App({toggleScanner, setToggleScanner} : Props) {
  const [data, setData] = useState("Not Found");

  function handleToggle()
  {
    console.log('bean beans beans');
    setToggleScanner(!toggleScanner);
  }

  useEffect( () => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className='format-feed'>
        <img src={Overlay} className='feed-overlay'/>
        <BarcodeScanner 
          width={'100%'}
          height={'100%'}
          onUpdate={(err : any, result : any) => {
            if (result)
            {
              setData(result.getText());
              window.location.href = `product?productid=${encodeURIComponent(result.getText())}`;
            }
            else setData("Not Found" + err);
          }
        }
        />
      </div>
      <button className='return-button' onClick={handleToggle}><span className="material-icons return-icon">chevron_left</span>Return</button>
    </>
  );
}
export default App;