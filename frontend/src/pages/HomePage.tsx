import {useState} from "react";
import { buildPath } from '../../../utils.ts';
import Lookup from "../components/home-comp/lookup";
//import Maintracker from "../components/home-comp/maintrack";
import Background from '../components/background-comp/BackgroundMain';
import Barcode from '../components/barcode-comp/barcode-scanner';
import DailyStats from '../components/home-comp/dailytrackedcircle';
import DailyBar from '../components/home-comp/dailytrackedbar';
import '../components/home-comp/home.css';
import NavBar from '../components/home-comp/navigation-bar';



//test
//import TrackBarGrop from '../components/home-comp/dailytrackbargrouping';


const HomePage = () =>
{
  const [toggleScanner, setToggleScanner] = useState<"first" | "second">("first");

  const borderStyle = 
  {
    borderWidth: toggleScanner == 'first' ? '2px' : '0px'
  };




  const date = new Date();
  let saveDate = date.getFullYear().toString() + '-' + date.getMonth().toString() + '-' + date.getDate().toString();
  const obj = { currentDate : saveDate};
  const js = JSON.stringify(obj);
  //console.log(savedDate);

  async function loadDailyStats()
  {
    const response = await fetch(buildPath('/api/callDailyStats'),
        { method: 'POST', body: js, headers: { 'Content-Type': 'application/json' }, credentials: 'include'});
    var res = JSON.parse(await response.text());





  }









   /*const handleToggleScanner = () =>
  {
    setToggleScanner('second');
  }*/

    
    loadDailyStats();
    return (  
        <div className='container-fluid' id='top-of-page'>

        <div className="row justify-content-center align-items-start">
        {toggleScanner === 'first' && <NavBar />}
        </div>


            <div className="row justify-content-center align-items-start" id="search-bar-barcode">
                <div className="col-auto text-center">
                    {toggleScanner === "first" && <Lookup switchToScanner={() => setToggleScanner('second')} />}
                    {toggleScanner === "second" && <Barcode switchOffScanner={() => setToggleScanner('first')} />}
                </div>
            </div>

       
            <div className='row align-items-center justify-content-center' id='main-progress-rings-area'>

                <div className='col align-self-center' id='calorie-ring-area' style={borderStyle}>
                  {toggleScanner === 'first' && <DailyStats
                    progress={90}
                    size={'512'}
                    text={'Calories'}
                    fontSize={35}
                    xAxis={-8}
                    yAxis={135} />}
		         </div>



                <div className='col align-self-center justrify-content-center' id='minor-ring-area' style={borderStyle}>
                    <div className='row align-items-center' id='minor-rings-row-area'>
                        <div className='col align-self-center' id='individual-ring'>
                            
                            {toggleScanner === 'first' && <DailyStats 
                              progress={120}
                              text={'Protein'}
                              xAxis={20} />}
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90}
                             text={'Carbohydrates'}
                             xAxis={-9} />}
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90} 
                             text={'Cholesterol'}
                             xAxis={4} />}
                        </div>
                    </div>
          


                    <div className='row align-items-center' id='minor-rings-row-area'>
                       <div className='col align-self-center' id='individual-ring'>
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90} 
                             text={'Total Fats'}
                             xAxis={10} />}
                        </div>

                        <div className='col align-self-center' id='individual-ring'>
                            {toggleScanner === 'first' && <DailyStats 
                             progress={90} 
                             text={'Saturated Fats'}
                             xAxis={-8} />}
                        </div>

                         <div className='col align-self-center' id='individual-ring'>
                            {toggleScanner === 'first' && <DailyStats 
                              progress={90}
                              text={'Sodium'}
                              xAxis={20} />}
                        </div>
                    </div>
                </div>
            </div>



            <div className='row align-items-end justify-content-center'>

               <div className='col align-self-end' id='nuts'>
                    {toggleScanner === 'first' && <DailyBar text={'Calories'} progress={5}/>}  
                    {toggleScanner === 'first' && <DailyBar text={'Protein'} progress={10}/>} 
                    {toggleScanner === 'first' && <DailyBar text={'Carbohydrates'} progress={15}/>}  
                    {toggleScanner === 'first' && <DailyBar text={'Cholesterol'} progress={20}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Total Fats'} progress={25}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Saturated Fats'} progress={30}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Sodium'} progress={35}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Sugar'} progress={40}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Fiber'}progress={45}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Potassium'}progress={50}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Calcium'}progress={55}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Magnesium'}progress={60}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Iron'}progress={65}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Vitamin A'}progress={70}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Vitamin D'}progress={75}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Iodine'}progress={80}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Folate'}progress={85}/>}
                    {toggleScanner === 'first' && <DailyBar text={'Zinc'}progress={90}/>}
                </div>

                





            </div>




          
              
            













            <Background />
        </div>
    );
};

export default HomePage;






//<TrackBarGrop />
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

