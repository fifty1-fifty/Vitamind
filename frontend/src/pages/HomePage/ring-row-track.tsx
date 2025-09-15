import Ring from '../../components/ringtrack-comp/ring';
import './home.css';

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

type RingRowTrackProps = {
  productPercents: NutritionValues;
  productValues: NutritionValues;
};



export default function RingRowTrack({ productPercents, productValues }: RingRowTrackProps) {
    return (
        <div className='ring-track-row'>
        <div className='col'>
          <div className='main-ring-track'>
            <Ring size='100%' text="Calories" progressPercent={productPercents.calories} progressValue={productValues.calories} duration={1000} />
          </div>
        </div>

        <div className='col'>
          <div className='secondary-ring-track'>
            <div className='two-top-rings'>
              <Ring size='50%' text="Proteins" progressPercent={productPercents.protein} progressValue={productValues.protein} duration={1000} />
              <Ring size='50%' text="Carbohydrates" progressPercent={productPercents.carbohydrates} progressValue={productValues.carbohydrates} duration={1000} />
            </div>
            <div className='bottom-ring'>
            <Ring size='50%' text="Fats" progressPercent={productPercents.totalFats} progressValue={productValues.totalFats} duration={1000} />
            </div>
          </div>
        </div>
        
      </div>
    )
};


























