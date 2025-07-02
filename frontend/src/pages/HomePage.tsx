import {useState} from "react";
import Lookup from "../components/home-comp/lookup";
//import Maintracker from "../components/home-comp/maintrack";
import Background from '../components/background-comp/BackgroundMain.tsx';
import Barcode from '../components/barcode-comp/barcode-scanner.tsx';
import DailyStats from '../components/home-comp/dailytrackedcircle.tsx';
import DailyBar from '../components/home-comp/dailytrackedbar.tsx';
import '../components/home-comp/home.css';



const HomePage = () =>
{
  const [toggleScanner, setToggleScanner] = useState<"first" | "second">("first");

    return (  
        <div className='container-fluid' id='top-of-page'>
                  


            <div className="row justify-content-center align-items-start" id="search-bar-barcode">
                <div className="col-auto text-center">
                    {toggleScanner === "first" && <Lookup switchToScanner={() => setToggleScanner("second")} />}
                    {toggleScanner === "second" && <Barcode switchOffScanner={() => setToggleScanner("first")} />}
                </div>
            </div>

       
            <div className='row align-items-center justify-content-center' id='main-progress-rings-area'>

                <div className='col align-self-center' id='calorie-ring-area'>
                    <DailyStats progress={90} size={'512'} text={'Calories'}/>
                </div>



                <div className='col align-self-center justrify-content-center' id='minor-ring-area'>
                    <div className='row align-items-center' id='minor-rings-row-area'>
                        <div className='col align-self-center' id='individual-ring'>
                            <DailyStats progress={120} text={'Protein'}/>
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            <DailyStats progress={90} text={'Carbohydrates'}/>
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            <DailyStats progress={90} text={'Cholesterol'}/>
                        </div>
                    </div>
          


                    <div className='row align-items-center' id='minor-rings-row-area'>
                       <div className='col align-self-center' id='individual-ring'>
                            <DailyStats progress={90} text={'Total Fats'}/>
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            <DailyStats progress={90} text={'Saturated Fats'}/>
                        </div>

                         <div className='col align-self-center' id='individual-ring'>
                            <DailyStats progress={90} text={'Sodium'}/>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row align-items-end justify-content-center'>

                <div className='col align-self-end' id='nuts'>
                     <DailyBar /> 
                     <DailyBar />
                     <DailyBar />
                     <DailyBar />
                     <DailyBar /> 
                     <DailyBar /> 
                     <DailyBar /> 
                     <DailyBar /> 
                     <DailyBar /> 
                     <DailyBar /> 
                     <DailyBar /> 
                </div>

                





            </div>




          
              
            













            <Background />
        </div>
    );
};

export default HomePage;
