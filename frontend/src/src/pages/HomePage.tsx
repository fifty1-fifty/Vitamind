import {useState} from "react";
import Lookup from "../components/home-comp/lookup";
//import Maintracker from "../components/home-comp/maintrack";
import Background from '../components/background-comp/BackgroundMain';
import Barcode from '../components/barcode-comp/barcode-scanner';
import DailyStats from '../components/home-comp/dailytrackedcircle';
import DailyBar from '../components/home-comp/dailytrackedbar';
import '../components/home-comp/home.css';



//test
import TrackBarGrop from '../components/home-comp/dailytrackbargrouping';


const HomePage = () =>
{
  const [toggleScanner, setToggleScanner] = useState<"first" | "second">("first");
  /*const handleToggleScanner = () =>
  {
    setToggleScanner('second');
  }*/

    

    return (  
        <div className='container-fluid' id='top-of-page'>
                  


            <div className="row justify-content-center align-items-start" id="search-bar-barcode">
                <div className="col-auto text-center">
                    {toggleScanner === "first" && <Lookup switchToScanner={() => setToggleScanner('second')} />}
                    {toggleScanner === "second" && <Barcode switchOffScanner={() => setToggleScanner('first')} />}
                </div>
            </div>

       
            <div className='row align-items-center justify-content-center' id='main-progress-rings-area'>

                <div className='col align-self-center' id='calorie-ring-area'>
                  {toggleScanner === 'first' && <DailyStats
                    progress={90}
                    size={'512'}
                    text={'Calories'}
                    fontSize={35}
                    xAxis={-8}
                    yAxis={135} switchToScanner={() => setToggleScanner('second')}/>
}

                                



            </div>
                <div className='col align-self-center justrify-content-center' id='minor-ring-area'>
                    <div className='row align-items-center' id='minor-rings-row-area'>
                        <div className='col align-self-center' id='individual-ring'>
                            
                            {toggleScanner === 'first' && <DailyStats 
                              progress={120}
                              text={'Protein'}
                              xAxis={20} switchToScanner={() => setToggleScanner('second')}/>}
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90}
                             text={'Carbohydrates'}
                             xAxis={-9} switchToScanner={() => setToggleScanner('second')}/>}
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90} 
                             text={'Cholesterol'}
                             xAxis={4} switchToScanner={() => setToggleScanner('second')}/>}
                        </div>
                    </div>
          


                    <div className='row align-items-center' id='minor-rings-row-area'>
                       <div className='col align-self-center' id='individual-ring'>
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90} 
                             text={'Total Fats'}
                             xAxis={10} switchToScanner={() => setToggleScanner('second')}/>}
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90} 
                             text={'Saturated Fats'}
                             xAxis={-8} switchToScanner={() => setToggleScanner('second')}/>}
                        </div>

                         <div className='col align-self-center' id='individual-ring'>
                            {toggleScanner === 'first' && <DailyStats 
                              progress={90}
                              text={'Sodium'}
                              xAxis={20} switchToScanner={() => setToggleScanner('second')}/>}
                        </div>
                    </div>
                </div>
            </div>



            <div className='row align-items-end justify-content-center'>

                <div className='col align-self-end' id='nuts'>
                    <TrackBarGrop />
                

                   

  


                </div>

                





            </div>




          
              
            













            <Background />
        </div>
    );
};

export default HomePage;







                   /* {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} 
                    {toggleScanner === 'first' && <DailyBar switchToScanner={() => setToggleScanner('second')}/>} */

