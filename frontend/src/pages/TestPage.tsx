import React, { useState, useEffect, Suspense } from 'react';
import { buildPath } from '../../../utils.ts';
import '../components/TESTTESTTEST/test.css';

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
		calicum : string;
		magnesium : string;
		iron : string;
		vitaminA : string;
		vitaminD : string;
		iodine : string;
		folate : string;
		zinc : string;
};





const TestPage = () => {
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
		calicum : '',
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
		calciuum : '',
		magnesium : '',
		iron : '',
		vitaminA : '',
		vitaminD : '',
		iodine : '',
		folate : '',
		zinc : ''
	});

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
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (date) {
      loadDailyStats();
    }
  }, [date]);

  function handleUserSetDate(selectedDate : Date) {
	  //console.log(selectedDate);
	console.log((selectedDate.getMonth() + 1).toString());
	console.log(selectedDate.getDate().toString());
	console.log(selectedDate.getFullYear().toString());
    const userSelectedDate = (selectedDate.getMonth() + 1).toString() + ' - ' + selectedDate.getDate().toString() + ' - ' + selectedDate.getFullYear().toString();
	//console.log(userSelectedDate);
    setDate(userSelectedDate);
  }


	console.log(currentDayProductPercent);
	console.log(currentDayProductValue);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container-fluid" id="home-top-container">
        <div className="row justify-content-center">
          <Search switchToScanner={() => console.log('beef 125 Testpage.tsx')}/>
        </div>

        <div className="row justify-content-center align-items-center" id="all-rings-container">
          <div className="col">
            <div className="row justify-content-center all-rings-formatting">
              <div className="col container-border" style={{ width: '50%', flex: '0 0 auto' }}>
                <Ringtrack size="100%" text="Calories" progressPercent={currentDayProductPercent.calories} />
              </div>

              <div className="col container-border" style={{ width: '45%', flex: '0 0 auto' }}>
                <div className="row justify-content-center" style={{ margin: 'auto' }}>
                  <div className="col minor-rings-container">
                    <Ringtrack size="100%" text="Protein" progressPercent={currentDayProductPercent.protein} />
                  </div>
                  <div className="col minor-rings-container" style={{ margin: 'auto' }}>
                    <Ringtrack size="100%" text="Fat" progressPercent={currentDayProductPercent.totalFats} />
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col minor-rings-container ">
                    <Ringtrack size="47%" text="Carbohydrates" progressPercent={currentDayProductPercent.carbohydrates} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <BarRegion productPercents={currentDayProductPercent} productValue={currentDayProductValue} />
        </div>

        <div className="row justify-content-center">
          <DailyLog />
        </div>

        <div className="row justify-content-center" id="fix-nav-bar">
          <Navigation setValue={handleUserSetDate} displayedDate={date} />
        </div>

        <Background varColor="#040C1E" />
      </div>
    </Suspense>
  );
};

export default TestPage;





//                 <button> <span class="material-icons"> search</span> hello</button>

