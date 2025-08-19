import {useState, useEffect} from "react";
import { buildPath } from '../../../utils.ts';
import Search from "../components/home-comp/search";
import Background from '../components/background-comp/Background';
import Scanner from '../components/barcode-comp/scanner';
import DailyStats from '../components/home-comp/ringtrack';
import DailyBar from '../components/home-comp/linetrack';
import Navigation from '../components/home-comp/navigation';
import '../components/home-comp/home.css';






const HomePage = () =>
{
 

  const [displayedDate, setDisplayedDate] = useState('');
  const [toggleScanner, setToggleScanner] = useState<"first" | "second">("first");
  const [dateOffset, setDateOffset] = useState(0);
  const [toggleFullStats, setToggleFulLStats] = useState(false);





  const incrementDateOffset = () =>
  {
    console.log('INCREWMENT');
    if(dateOffset < 0)
      setDateOffset(prev => prev + 1);
    console.log(dateOffset);
    
  }

  const decrementDateOffset = () =>
  {
    console.log('DECREMTN');
    setDateOffset(prev => prev - 1);
    console.log(dateOffset);
   
  }
  


  const [currentDayProductValue, setCurrentDayProductValue] = useState({
    calories: '',
    protein: '',
    carbohydrates: '',
    cholesterol: '',
    saturatedFats: '',
    totalFats: '',
    sodium: '',
    sugar: '',
    fiber: '',
    potassium: '',
    calcium: '',
    magnesium: '',
    iron: '',
    vitaminA: '',
    vitaminD: '',
    iodine: '',
    folate: '',
    zinc: ''
  });

  const [currentDayProductPercent, setCurrentDayProductPercent] = useState({
    calories: '',
    protein: '',
    carbohydrates: '',
    cholesterol: '',
    saturatedFats: '',
    totalFats: '',
    sodium: '',
    sugar: '',
    fiber: '',
    potassium: '',
    calcium: '',
    magnesium: '',
    iron: '',
    vitaminA: '',
    vitaminD: '',
    iodine: '',
    folate: '',
    zinc: ''
  });



  const borderStyle = 
  {
    borderWidth: toggleScanner == 'first' ? '2px' : '0px'
  };

  const fullStatsDisplay = 
  {
    display: toggleFullStats == false ? 'none' : 'block',
    animation: toggleFullStats == false ? 'none' : 'fadeIn 0.8s ease-in-out'
  };

   useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(40px);}
        to { opacity: 1; transform: translateY(0);}
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);



 

  useEffect(() =>
  {
    const scannerFlag = localStorage.getItem('openScannerOnRedirect');
    if(scannerFlag == 'true')
    {
      setToggleScanner('second');
      localStorage.removeItem('openScannerOnRedirect');
    }
    loadDailyStats();
  }, [dateOffset]);
  



  async function loadDailyStats()
  {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + dateOffset);
    let newDateToString = (newDate.getMonth() + 1).toString() + ' - ' + newDate.getDate().toString() + ' - ' + newDate.getFullYear().toString();
    setDisplayedDate(newDateToString);

    const obj = { currentDate : newDateToString};
    const js = JSON.stringify(obj);
    console.log(js);

    try 
    {
       const response = await fetch(buildPath('/api/callDailyStats'),
              { method: 'POST', body: js, headers: { 'Content-Type': 'application/json' }, credentials: 'include'});


       var res = JSON.parse(await response.text());
       console.log(response);

       if(response.status == 403)
       {
         console.log('hello I like beans and cake');
         window.location.href = '/login';


       }
        
       /*if(res.message)
       {
          console.log(res.message); 
          //if(res.message == 'Access Denied: No Token Provided')
          //window.location.href = '/login';
       }*/


      // Set values
      setCurrentDayProductValue(prev => ({ ...prev, calories: res != null ? res.dailyCalories : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, protein: res != null ? res.dailyProtein : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, carbohydrates: res != null ? res.dailyCarbohydrates : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, cholesterol: res != null ? res.dailyCholesterol : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, saturatedFats: res != null ? res.dailySaturatedFats : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, totalFats: res != null ? res.dailyTotalFats : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, sodium: res != null ? res.dailySodium : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, sugar: res != null ? res.dailySugar : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, fiber: res != null ? res.dailyFiber : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, potassium: res != null ? res.dailyPotassium : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, calcium: res !=null ? res.dailyCalcium : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, magnesium: res != null ? res.dailyMagnesium : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, iron: res != null ? res.dailyIron : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, vitaminA: res != null ? res.dailyVitaminA : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, vitaminD: res != null ? res.dailyVitaminD : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, iodine: res != null ? res.dailyIodine : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, folate: res != null ? res.dailyFolate : 0 }));
      setCurrentDayProductValue(prev => ({ ...prev, zinc: res != null ? res.dailyZinc : 0 }));

      // Set percentages (check for existence, then parse & compute, else 0)
      setCurrentDayProductPercent(prev => ({ ...prev, calories: res != null ? (100 * parseFloat(res.dailyCalories) / 2500).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, protein: res != null ? (100 * parseFloat(res.dailyProtein) / 55).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, carbohydrates: res != null ? (100 * parseFloat(res.dailyCarbohydrates) / 333).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, cholesterol: res != null ? (100 * parseFloat(res.dailyCholesterol) / 0.3).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, saturatedFats: res != null ? (100 * parseFloat(res.dailySaturatedFats) / 31).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, totalFats: res != null ? (100 * parseFloat(res.dailyTotalFats) / 97).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, sodium: res != null ? (100 * parseFloat(res.dailySodium) / 2.3).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, fiber: res != null ? (100 * parseFloat(res.dailyFiber) / 35).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, sugar: res != null ? (100 * parseFloat(res.dailySugar) / 33).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, potassium: res != null ? (100 * parseFloat(res.dailyPotassium) / 3.4).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, calcium: res != null ? (100 * parseFloat(res.dailyCalcium) / 1).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, magnesium: res != null ? (100 * parseFloat(res.dailyMagnesium) / 0.3).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, iron: res != null ? (100 * parseFloat(res.dailyIron) / 0.008).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, vitaminA: res != null ? (100 * parseFloat(res.dailyVitaminA) / 0.8).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, vitaminD: res != null ? (100 * parseFloat(res.dailyVitaminD) / 0.01).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, iodine: res != null ? (100 * parseFloat(res.dailyIodine) / 0.15).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, folate: res != null ? (100 * parseFloat(res.dailyFolate) / 0.4).toString() : '0' }));
      setCurrentDayProductPercent(prev => ({ ...prev, zinc: res != null ? (100 * parseFloat(res.dailyZinc) / 0.014).toString() : '0' }));


    } 
    catch (error)
    {
      console.log(error);
      //window.location.href = '/login';
    }
  }
 


  //console.log(currentDayProductPercent.calories);
   //console.log(currentDayProductPercent.protein);

      window.addEventListener('scroll', () => {
      console.log(`Scroll position: X=${window.scrollX}, Y=${window.scrollY}`);
      if(window.scrollY > 600)
        setToggleFulLStats(true);
    });
  


    //console.log(currentDayProductValue);
    return (  
      <div className='container-fluid' id='top-of-page'>

      <div className="row" id='row-container'>

        <div className="col">
        </div>


      <div className='col-10'>
      <div className="row justify-content-center align-items-start">
        {toggleScanner === 'first' && <Navigation date={displayedDate} incrementDateOffset={incrementDateOffset} decrementDateOffset={decrementDateOffset}/>}
      </div>


              <div className="row justify-content-center align-items-start" id="search-bar-barcode">
                  <div className="col-auto text-center">
                      {toggleScanner === "first" && <Search switchToScanner={() => setToggleScanner('second')} />}
                      {toggleScanner === "second" && <Scanner switchOffScanner={() => setToggleScanner('first')} />}
                  </div>
              </div>

        
              <div className='row align-items-center justify-content-center' id='main-progress-rings-area'>

                  <div className='col align-self-center' id='calorie-ring-area' style={borderStyle}>
                    {toggleScanner === 'first' && <DailyStats
                      progressPercent={currentDayProductPercent.calories}
                      progressValue={currentDayProductValue.calories}
                      size={'650'}
                      text={'Calories'}
                      fontSize={35}
                      xAxis={-8}
                      yAxis={135} />}
              </div>



                  <div className='col align-self-center justrify-content-center' id='minor-ring-area' style={borderStyle}>
                      <div className='row align-items-center' id='minor-rings-row-area'>
                          <div className='col align-self-center' id='individual-ring'>
                              
                              {toggleScanner === 'first' && <DailyStats 
                                progressPercent={currentDayProductPercent.protein}
                                progressValue={currentDayProductValue.protein}
                                text={'Protein'}
                                xAxis={20} />}
                          </div>

                          <div className='col align-self-center' id='individual-ring'>
                              
                              {toggleScanner === 'first' && <DailyStats 
                              progressPercent={currentDayProductPercent.carbohydrates}
                              progressValue={currentDayProductValue.carbohydrates}
                              text={'Carbohydrates'}
                              xAxis={-9} />}
                          </div>

                          <div className='col align-self-center' id='individual-ring'>
                              
                              {toggleScanner === 'first' && <DailyStats 
                              progressPercent={currentDayProductPercent.cholesterol} 
                              progressValue={currentDayProductValue.cholesterol}
                              text={'Cholesterol'}
                              xAxis={4} />}
                          </div>
                      </div>
            


                      <div className='row align-items-center' id='minor-rings-row-area'>
                        <div className='col align-self-center' id='individual-ring'>
                              {toggleScanner === 'first' && <DailyStats 
                              progressPercent={currentDayProductPercent.totalFats}
                              progressValue={currentDayProductValue.totalFats}
                              text={'Total Fats'}
                              xAxis={10} />}
                          </div>

                          <div className='col align-self-center' id='individual-ring'>
                              {toggleScanner === 'first' && <DailyStats 
                              progressPercent={currentDayProductPercent.saturatedFats}
                              progressValue={currentDayProductValue.saturatedFats}
                              text={'Saturated Fats'}
                              xAxis={-8} />}
                          </div>

                          <div className='col align-self-center' id='individual-ring'>
                              {toggleScanner === 'first' && <DailyStats 
                                progressPercent={currentDayProductPercent.sodium}
                                progressValue={currentDayProductValue.sodium}
                                text={'Sodium'}
                                xAxis={20} />}
                          </div>
                      </div>
                  </div>  
              </div>

              <div className='row align-items-end justify-content-center' style={{'minHeight' : '940px', 'display' : 'flex', 'alignContent' : 'flex-start'}}>
                <div className='col align-self-end' id='nuts' style={fullStatsDisplay}>
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Calories'} progressPercent={currentDayProductPercent.calories} progressValue={currentDayProductValue.calories}/>}  
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Protein'} progressPercent={currentDayProductPercent.protein} progressValue={currentDayProductValue.protein}/>} 
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Carbohydrates'} progressPercent={currentDayProductPercent.carbohydrates} progressValue={currentDayProductValue.carbohydrates}/>}  
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Cholesterol'} progressPercent={currentDayProductPercent.cholesterol} progressValue={currentDayProductValue.cholesterol}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Total Fats'} progressPercent={currentDayProductPercent.totalFats} progressValue={currentDayProductValue.totalFats}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Saturated Fats'} progressPercent={currentDayProductPercent.saturatedFats} progressValue={currentDayProductValue.saturatedFats}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Sodium'} progressPercent={currentDayProductPercent.sodium} progressValue={currentDayProductValue.sodium}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Sugar'} progressPercent={currentDayProductPercent.sugar} progressValue={currentDayProductValue.sugar}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Fiber'}progressPercent={currentDayProductPercent.fiber} progressValue={currentDayProductValue.fiber}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Potassium'}progressPercent={currentDayProductPercent.potassium} progressValue={currentDayProductValue.potassium}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Calcium'}progressPercent={currentDayProductPercent.calcium} progressValue={currentDayProductValue.calcium}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Magnesium'}progressPercent={currentDayProductPercent.magnesium} progressValue={currentDayProductValue.magnesium}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Iron'}progressPercent={currentDayProductPercent.iron} progressValue={currentDayProductValue.iron}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Vitamin A'}progressPercent={currentDayProductPercent.vitaminA} progressValue={currentDayProductValue.vitaminA}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Vitamin D'}progressPercent={currentDayProductPercent.vitaminD} progressValue={currentDayProductValue.vitaminD}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Iodine'}progressPercent={currentDayProductPercent.iodine} progressValue={currentDayProductValue.iodine}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Folate'}progressPercent={currentDayProductPercent.folate} progressValue={currentDayProductValue.folate}/>}
                      {toggleScanner === 'first' && toggleFullStats && <DailyBar text={'Zinc'}progressPercent={currentDayProductPercent.zinc} progressValue={currentDayProductValue.zinc}/>}
                  </div>  



                  
              </div>



  

        


            </div>

              <div className="col" id='settings-button-area'>
                <button id='settings-button'>Settings<i id='settings-icon' className='material-icons'>settings</i></button>
              </div>
                

            </div>
                <Background varColor={'#040C1E'}/>
        </div>
    );
};

export default HomePage;




