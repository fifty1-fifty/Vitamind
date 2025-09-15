import Halfring from '../../components/halfringtrack-comp/halfring';
import '../../pages/HomePage/home.css';


type productStatistics = 
{
		productPercentOne : string;
        productPercentTwo : string;
        productPercentThree : string;

        productValuesOne : string;
        productValuesTwo : string;
        productValuesThree : string;

        labelOne : string
        labelTwo : string;
        labelThree : string;
};


export default function RingRowTrack({
    productPercentOne,
    productPercentTwo,
    productPercentThree,
    productValuesOne,
    productValuesTwo,
    productValuesThree,
    labelOne,
    labelTwo,
    labelThree
} : productStatistics) {



    return (

        <div className='half-ring-container' style={{overflow : 'hidden', textOverflow : 'ellipsis', whiteSpace : 'normal'}}>
            <div className='individual-half-ring'>
                <span className='half-ring-product-text'>{labelOne}</span>
                <Halfring progressPercent={parseFloat(productPercentOne)} progressValue={productValuesOne}/>
            </div>
            <div className='individual-half-ring'>
                <span className='half-ring-product-text'>{labelTwo}</span>
                <Halfring progressPercent={parseFloat(productPercentTwo)} progressValue={productValuesTwo} />
            </div>
            <div className='individual-half-ring'>
                <span className='half-ring-product-text'>{labelThree}</span>
                <Halfring progressPercent={parseFloat(productPercentThree)} progressValue={productValuesThree} />
            </div>
        </div>
    )
};


