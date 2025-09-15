import IndividualHalfRingCard from  '../../components/halfringtrack-comp/halfring-row-track'
import '../../pages/HomePage/home.css';


//import { SemiCircleProgress } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';


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

type HalfRing = {
  productPercents: NutritionValues;
  productValues: NutritionValues;
};



export default function RingRowTrack({productPercents, productValues} : HalfRing) {
    

  return (

  <Carousel
      style={{overflow : 'hidden'}}
      slideSize="70%"
      height='100%'
      slideGap="xs"
      controlsOffset="xs"
      controlSize={26}
      withControls={false}
      withIndicators={false}
        emblaOptions={{
        loop: true,
        dragFree: true,
        align: 'center'
      }}
    >
      {/* ...slides */}
      <Carousel.Slide>
        <IndividualHalfRingCard 
            productPercentOne={productPercents.cholesterol}
            productPercentTwo={productPercents.saturatedFats} 
            productPercentThree={productPercents.totalFats} 
            productValuesOne={productValues.cholesterol} 
            productValuesTwo={productValues.saturatedFats} 
            productValuesThree={productValues.totalFats} 
            labelOne='Cholesterol' 
            labelTwo='Saturated Fats' 
            labelThree='Total Fats'/>
      </Carousel.Slide>
      


      <Carousel.Slide>
        <IndividualHalfRingCard 
            productPercentOne={productPercents.sodium}
            productPercentTwo={productPercents.fiber} 
            productPercentThree={productPercents.sugar} 
            productValuesOne={productValues.sodium} 
            productValuesTwo={productValues.fiber} 
            productValuesThree={productValues.sugar} 
            labelOne='Sodium' 
            labelTwo='Fiber' 
            labelThree='Sugar'/>
      </Carousel.Slide>



      <Carousel.Slide>
        <IndividualHalfRingCard 
            productPercentOne={productPercents.potassium}
            productPercentTwo={productPercents.calcium} 
            productPercentThree={productPercents.magnesium} 
            productValuesOne={productValues.potassium} 
            productValuesTwo={productValues.calcium} 
            productValuesThree={productValues.magnesium} 
            labelOne='Potasssium' 
            labelTwo='Calcium' 
            labelThree='Magnesium'/>
      </Carousel.Slide>     
  
      <Carousel.Slide>
        <IndividualHalfRingCard 
            productPercentOne={productPercents.vitaminA}
            productPercentTwo={productPercents.vitaminD} 
            productPercentThree={productPercents.iodine} 
            productValuesOne={productValues.vitaminA}
            productValuesTwo={productValues.vitaminD} 
            productValuesThree={productValues.iodine} 
            labelOne='Vitamin A' 
            labelTwo='Vitamin D' 
            labelThree='Iodine'/>
      </Carousel.Slide>    

      <Carousel.Slide>
        <IndividualHalfRingCard 
            productPercentOne={productPercents.iron}
            productPercentTwo={productPercents.folate} 
            productPercentThree={productPercents.zinc} 
            productValuesOne={productValues.iron} 
            productValuesTwo={productValues.folate} 
            productValuesThree={productValues.zinc} 
            labelOne='Iron' 
            labelTwo='Folate' 
            labelThree='Zinc'/>
      </Carousel.Slide>    
  </Carousel>



    )
};
