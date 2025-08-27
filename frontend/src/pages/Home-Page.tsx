import React, { useState, useEffect, Suspense } from 'react';
import { buildPath } from '../../../utils.ts';
import '../components/TESTTESTTEST/test.css';
import Scanner from '../components/barcode-comp/barcode-scanner';

// Lazy-load large/heavy components
const Background = React.lazy(() => import('../components/background-comp/Background'));
const Ringtrack = React.lazy(() => import('../components/home-comp/ringtrack'));
const Search = React.lazy(() => import('../components/home-comp/search'));
const Navigation = React.lazy(() => import('../components/home-comp/navigation-bar'));
//const Test = React.lazy(() => import('../components/TESTTESTTEST/test'));
const BarRegion = React.lazy(() => import('../components/TESTTESTTEST/bar-carousel'));
const DailyLog = React.lazy(() => import('../components/TESTTESTTEST/log-scroll'));

type NutritionValues = {
		calories : string;
		protein : string;
		carbohydrates : string;
		cholesterol : string;
		saturatedFats : string;
		totalFats : string;
		sodium : string;
		fiber : string;
		sugar : string;
		potassium : string;
		calcium : string;
		magnesium : string;
		iron : string;
		vitaminA : string;
		vitaminD : string;
		iodine : string;
		folate : string;
		zinc : string;
};

type UserDailyLoggedProductStats = 
{
	barcode : string;
	imageThumb : string;
	brandName : string;
	productName : string;
	calories : string;
	userID : string;
	date : string;
}





const TestPage = () => {
  
  const [toggleScanner, setToggleScanner] = useState<true | false>(true);


  
  const [date, setDate] = useState('');
 
	const [currentDayProductValue, setCurrentDayProductValue] = useState<NutritionValues>({
		calories : '',
		protein : '',
		carbohydrates : '',
		cholesterol : '',
		saturatedFats : '',
		totalFats : '',
		sodium : '',
		fiber : '',
		sugar : '',
		potassium : '',
		calcium : '',
		magnesium : '',
		iron : '',
		vitaminA : '',
		vitaminD : '',
		iodine : '',
		folate : '',
		zinc : ''
	});

	const [currentDayProductPercent, setCurrentDayProductPercent] = useState<NutritionValues>({
		calories : '',
		protein : '',
		carbohydrates : '',
		cholesterol : '',
		saturatedFats : '',
		totalFats : '',
		sodium : '',
		fiber : '',
		sugar : '',
		potassium : '',
		calcium : '',
		magnesium : '',
		iron : '',
		vitaminA : '',
		vitaminD : '',
		iodine : '',
		folate : '',
		zinc : ''
	});
	
	
	
	const [userDailyLog, setUserDailyLog] = useState<UserDailyLoggedProductStats[]>([]);
	
	

  async function loadDailyStats() {
    const obj = { currentDate: date };
    const js = JSON.stringify(obj);

    try {
      const response = await fetch(buildPath('/api/callDailyStats'), {
        method: 'POST',
        body: js,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.status === 403) {
        window.location.href = '/login';
        return;
      }

      const res = JSON.parse(await response.text()) || {};

      // Batch product values
      const productValues = {
        calories: res.dailyCalories || 0,
        protein: res.dailyProtein || 0,
        carbohydrates: res.dailyCarbohydrates || 0,
        cholesterol: res.dailyCholesterol || 0,
        saturatedFats: res.dailySaturatedFats || 0,
        totalFats: res.dailyTotalFats || 0,
        sodium: res.dailySodium || 0,
        sugar: res.dailySugar || 0,
        fiber: res.dailyFiber || 0,
        potassium: res.dailyPotassium || 0,
        calcium: res.dailyCalcium || 0,
        magnesium: res.dailyMagnesium || 0,
        iron: res.dailyIron || 0,
        vitaminA: res.dailyVitaminA || 0,
        vitaminD: res.dailyVitaminD || 0,
        iodine: res.dailyIodine || 0,
        folate: res.dailyFolate || 0,
        zinc: res.dailyZinc || 0,
      };

      // Batch product percentages
      const productPercents = {
        calories: (100 * parseFloat(res.dailyCalories || 0) / 2500).toString(),
        protein: (100 * parseFloat(res.dailyProtein || 0) / 55).toString(),
        carbohydrates: (100 * parseFloat(res.dailyCarbohydrates || 0) / 333).toString(),
        cholesterol: (100 * parseFloat(res.dailyCholesterol || 0) / 0.3).toString(),
        saturatedFats: (100 * parseFloat(res.dailySaturatedFats || 0) / 31).toString(),
        totalFats: (100 * parseFloat(res.dailyTotalFats || 0) / 97).toString(),
        sodium: (100 * parseFloat(res.dailySodium || 0) / 2.3).toString(),
        fiber: (100 * parseFloat(res.dailyFiber || 0) / 35).toString(),
        sugar: (100 * parseFloat(res.dailySugar || 0) / 33).toString(),
        potassium: (100 * parseFloat(res.dailyPotassium || 0) / 3.4).toString(),
        calcium: (100 * parseFloat(res.dailyCalcium || 0) / 1).toString(),
        magnesium: (100 * parseFloat(res.dailyMagnesium || 0) / 0.3).toString(),
        iron: (100 * parseFloat(res.dailyIron || 0) / 0.008).toString(),
        vitaminA: (100 * parseFloat(res.dailyVitaminA || 0) / 0.8).toString(),
        vitaminD: (100 * parseFloat(res.dailyVitaminD || 0) / 0.01).toString(),
        iodine: (100 * parseFloat(res.dailyIodine || 0) / 0.15).toString(),
        folate: (100 * parseFloat(res.dailyFolate || 0) / 0.4).toString(),
        zinc: (100 * parseFloat(res.dailyZinc || 0) / 0.014).toString(),
      };

      setCurrentDayProductValue(productValues);
      setCurrentDayProductPercent(productPercents);
	  
	  
	  //console.log(currentDayProductPercent);
	  //console.log(currentDayProductPercent.productPercents);
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await fetch(buildPath('/api/callDailyLog'), {
        method: 'POST',
        body: js,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.status === 403) {
        window.location.href = '/login';
        return;
      }

      const res = JSON.parse(await response.text());
      console.log(res);
	  
		const dailyLogFetched = res.map((item: any) => ({
		  barcode: item.barcode,
		  imageThumb: item.imageThumb,
		  brandName: item.brandName,
		  productName: item.productName,
		  calories: item.calories,
		  userID: item.userID,
		  date: item.date
		}));
		
	  console.log(dailyLogFetched);
	  setUserDailyLog(dailyLogFetched);
	  console.log(userDailyLog);
	  
	  
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
	if(date == '')
	  handleUserSetDate(new Date());
    if (date) {
      loadDailyStats();
    }
  }, [date]);
  
  useEffect(() => {
    console.log(toggleScanner);

    }
  , [toggleScanner]);
  
  
  
  

  function handleUserSetDate(selectedDate : Date) 
  {
	  //console.log(selectedDate);
	console.log((selectedDate.getMonth() + 1).toString());
	console.log(selectedDate.getDate().toString());
	console.log(selectedDate.getFullYear().toString());
    const userSelectedDate = (selectedDate.getMonth() + 1).toString() + ' - ' + selectedDate.getDate().toString() + ' - ' + selectedDate.getFullYear().toString();
	//console.log(userSelectedDate);
    setDate(userSelectedDate);
  }
  
  
  
  


	//console.log(currentDayProductPercent);
	//console.log(currentDayProductValue);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container-fluid" id="home-top-container">
        <div className="row justify-content-center">
          {!toggleScanner && <Scanner setToggleScanner={setToggleScanner} toggleScanner={toggleScanner} />}
            {toggleScanner && <Search />}
        </div>

        <div className="row justify-content-center align-items-center" id="all-rings-container">
          <div className="col">
            <div className="row justify-content-center all-rings-formatting">
              <div className="col container-border" style={{ width: '53%', flex: '0 0 auto' }}>
                {toggleScanner && <Ringtrack size="100%" text="Calories" progressPercent={currentDayProductPercent.calories} />}
              </div>

              <div className="col container-border" style={{ width: '40%', flex: '0 0 auto' }}>
                <div className="row justify-content-center" style={{ margin: 'auto' }}>
                  <div className="col minor-rings-container">
                    {toggleScanner && <Ringtrack size="100%" text="Protein" progressPercent={currentDayProductPercent.protein} />}
                  </div>
                  <div className="col minor-rings-container" style={{ margin: 'auto' }}>
                    {toggleScanner && <Ringtrack size="100%" text="Fat" progressPercent={currentDayProductPercent.totalFats} />}
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col minor-rings-container ">
                  {toggleScanner && <Ringtrack size="47%" text="Carbohydrates" progressPercent={currentDayProductPercent.carbohydrates} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
         {toggleScanner && <BarRegion productPercents={currentDayProductPercent} productValues={currentDayProductValue} />}
        </div>

        <div className="row justify-content-center">
         {toggleScanner && <DailyLog userDailyLog={userDailyLog}/>}
        </div>

        <Background varColor="#040C1E" />
      </div>

        <div id="fix-nav-bar">
          {toggleScanner && <Navigation setValue={handleUserSetDate} displayedDate={date} toggleScanner={toggleScanner} setToggleScanner={setToggleScanner}/>}
        </div>
    </Suspense>
  );
};

export default TestPage;





//                 <button> <span class="material-icons"> search</span> hello</button>

