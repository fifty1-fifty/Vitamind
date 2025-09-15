import { Container} from '@mantine/core';
import { useEffect, useState } from 'react';

import '@mantine/core/styles.css';
import 'material-icons/iconfont/material-icons.css';

import Search from './search-bar-comp';
import RingRowTrack from './ring-row-track';
//import HalfRingRowTrack from '../../components/halfringtrack-comp/halfring-row-track';
import HalfRingCarousel from './halfring-carousel';
import NavigationBar from './navigation-bar';
import DailyLog from './user-daily-log';

import Calendar from '../../components/calendar/calendar';
import './home.css';

import BarcodeScanner from '../../components/barcode-comp/barcode-scanner';

//api comps
import { loadDailyLogStats, loadDailyNutrionalStats }  from './homepage-api/load-daily-stats-api'

// ================================================================================================

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





export default function TemplatePage() 
{
  const date = new Date();
  const currentDate = date.getMonth() + 1 + ' - ' + date.getDate() + ' - ' + date.getFullYear();
  const [toggleCalendar, setToggleCalendar] = useState<boolean>(false);
  const [choosenDate, setChoosenDate] = useState<string | null>(null)
  const [toggleScanner, setToggleScanner] = useState<true | false>(true);

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
  
  

  useEffect(() => 
  {
    async function fetchDailyNutritionData()
    {
      const res = await loadDailyNutrionalStats(choosenDate);
      //console.log(res);
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
    }

    async function fetchDailyLog()
    {
      const res = await loadDailyLogStats(choosenDate);
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
      setUserDailyLog(dailyLogFetched);
    }
    
    fetchDailyNutritionData();
    fetchDailyLog();
  }, [choosenDate]);

  /*useEffect(() => {
        console.log('TEST');
        console.log(userDailyLog);  
    }, [userDailyLog]);*/

  return (
    <Container size="lg">
      {!toggleScanner && <BarcodeScanner toggleScanner={toggleScanner} setToggleScanner={setToggleScanner}/>}
      {toggleScanner &&<Search />}
      {toggleScanner && <RingRowTrack productPercents={currentDayProductPercent} productValues={currentDayProductValue}/>}

      {toggleScanner && <Calendar toggleOpen={toggleCalendar} setToggleCalendar={setToggleCalendar} choosenDate={choosenDate} setChoosenDate={setChoosenDate}/>}

      {toggleScanner && <DailyLog userDailyLog={userDailyLog}/>}
      
      {toggleScanner && <div className='half-ring-track-row'>
        <HalfRingCarousel productPercents={currentDayProductPercent} productValues={currentDayProductValue}/>
      </div>}

      {toggleScanner &&
      <NavigationBar 
        setValue={() => {}}
        displayedDate={choosenDate ? choosenDate : currentDate}
        toggleScanner={toggleScanner}
        setToggleScanner={setToggleScanner}
        setToggleCalendar={setToggleCalendar}
        toggleCalendar={toggleCalendar}
      />}

    </Container>
  );
}

