import Barcode from '../components/barcode-comp/barcode-scanner';
import '../components/home-comp/home.css';

const TestPage = () => 
{




   return (  
        <div className='container-fluid' id='top-of-page'>
          <Barcode switchOffScanner={(console.log('boobs')} />
        </div>     
);
};
export default TestPage;
