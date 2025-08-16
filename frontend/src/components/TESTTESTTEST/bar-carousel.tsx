import React from 'react';
//import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
//import { Button } from '@mui/material';

import TrackBar from '../home-comp/dailytrackedbar';

/*type Props = {
  /*UnsaturatedFats : {
    title : string; 
    percent : number;
    value : string;
  }
  SaturatedFats : {
    title : string; 
    percent : number;
    value : string;
  }
  Cholesterol : {
    title : string; 
    percent : number;
    value : string;
  }
  Zinc : {
    title : string; 
    percent : number;
    value : string;
  }
  Sodium : {
    title : string; 
    percent : number;
    value : string;
  }
  Iron : {
    title : string; 
    percent : number;
    value : string;
  }
  Potassium : {
    title : string; 
    percent : number;
    value : string;
  }
  Calcium : {
    title : string; 
    percent : number;
    value : string;
  }
  Iodine : {
    title : string; 
    percent : number;
    value : string;
  }
  VitaminA : {
    title : string; 
    percent : number;
    value : string;
  }
  VitaminD : {
    title : string; 
    percent : number;
    value : string;
  }
  Folate : {
    title : string; 
    percent : number;
    value : string;
  }
  TotalCarbs : {
    title : string; 
    percent : number;
    value : string;
  }
TotalCarbs : {
    title : string; 
    percent : number;
    value : string;
  }
Sugar : {
    title : string; 
    percent : number;
    value : string;
  }
Fiber : {
    title : string; 
    percent : number;
    value : string;
  } */


/*
 * stat : Array<{
  title : string;
  percent : string;
  value : number;
}>;

 productValues : {};
 productPercents : {};

} */


type ProductPercents = {
  unsaturatedFats: number;
  saturatedFats: number;
  cholesterol: number;
  zinc: number;
  sodium: number;
  iron: number;
  potassium: number;
  calcium: number;
  magnesium: number;
};

interface BarCarouselProps {
  productPercents: ProductPercents;
  // ... any other props you already have
}


const Carousel : React.FC<BarCarouselProps> = ({
  //productValues,
  productPercents
}) => {

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function handleTouchStart(e : React.TouchEvent) {
      const startTouch = e.targetTouches[0].clientX;
      //console.log(startTouch);
      setTouchStart(startTouch);
  }

  function handleTouchMove(e : React.TouchEvent) {
    /*console.log(e);
    console.log(e.changedTouches);
    console.log(e.changedTouches[0].clientX);*/
    const endTouch = e.changedTouches[0].clientX;
    setTouchEnd(endTouch);
    handleTouchEnd();
  }

	function handleTouchEnd() {
	  const nextBtn = document.querySelector('#myCarousel .carousel-control-next') as HTMLElement | null;
	  const prevBtn = document.querySelector('#myCarousel .carousel-control-prev') as HTMLElement | null;

	  if (touchStart - touchEnd > 150 && nextBtn) {
		console.log('left swipe');
		nextBtn.click(); // Next
	  }

	  if (touchStart - touchEnd < -150 && prevBtn) {
		console.log('right swipe');
		prevBtn.click(); // Prev
	  }
	}
  console.log(productPercents);
  //console.log(productValues);
  return (

      <div id="myCarousel" className="carousel slide container-border" data-bs-ride="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchMove} style={{'width' : '75%', 'maxWidth' : '850px', 'marginTop' : '2vh', 'padding' : '0'}}>
      

      {/* Slides */}
      <div className="carousel-inner" style={{'marginTop' : '2vh'}}>
        <div className="carousel-item active" id='format-individual-card'>
            <div className='carousel-item-header'>
                <h5 className='carousel-item-text'>Fats</h5>
            </div>

                <TrackBar progress={productPercents.unsaturatedFats} text={'UnsaturatedFats'}/>
                <TrackBar progress={productPercents.saturatedFats} text={'SaturatedFats'}/>
                <TrackBar progress={productPercents.cholesterol} text={'Cholesterol'}/>

        </div>
        
        <div className="carousel-item" id='format-individual-card'>
            <div className='carousel-item-header'>
                <h5 className='carousel-item-text'>Vitamins</h5>
            </div>

                  <TrackBar progress={productPercents.zinc} text={'Zinc'}/>
                  <TrackBar progress={productPercents.sodium} text={'Sodium'}/>
                  <TrackBar progress={productPercents.iron} text={'Iron'}/>

        </div>

        <div className="carousel-item" id='format-individual-card'>
            <div className='carousel-item-header'>
                <h5 className='carousel-item-text'>Carbs</h5>
            </div>

                <TrackBar progress={productPercents.potassium} text={'Potassium'}/>
                <TrackBar progress={productPercents.calcium} text={'Calicum'}/>
                <TrackBar progress={productPercents.magnesium} text={'Magnesium'}/>

        </div>
      </div> 

      {/* Indicators */}
      <div className="carousel-indicators" style={{'position' : 'relative', 'marginBottom' : '0.3rem' }}>
        <button id='dynamicIndicatorWidth' type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
        <button id='dynamicIndicatorWidth' type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
        <button id='dynamicIndicatorWidth' type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
      </div>


      {/* Controls */}
      <button className="carousel-control-prev visually-hidden" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next visually-hidden" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>    

    





    );
}; export default Carousel;

