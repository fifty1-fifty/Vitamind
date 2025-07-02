//import {useState} from "react";
import Barcode from '../components/barcode-comp/barcode-testgf';
import '../components/home-comp/home.css';

const TestPage = () => 
{
   //const [testNuts, setTestNuts] = useState('');



   return (  
        <div className='container-fluid' id='top-of-page'>
          <Barcode />
        </div>     
);
};
export default TestPage;
