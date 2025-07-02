import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
//import Lookup from "../home-comp/lookup";
//import Background from '../background-comp/BackgroundMain.tsx';
//import Barcode from '../barcode-comp/barcode-scanner.tsx';
import {buildPath } from '../../../../utils.ts';



const ProductStats = () =>
{
  const query = new URLSearchParams(useLocation().search);
  let currentProductID = query.get("productid");

  /*
  const [foodName, setFoodName] = useState('');
        const [fiber, setFiber] = useState('');
  //const [fullIngridientList, setFullIngridientList] = useState('');
        const [servingSize, setServingSize] = useState('');
 
    */

  const [barcode, setBarcode] = useState('');
  const [imageFront, setImageFront] = useState('');
  const [imageThumb, setImageThumb] = useState('');
  const [imageNutrition, setImageNutrition] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productName, setProductName] = useState('');
  const [servingSize, setServingSize] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [saturatedFats, setSaturatedFats] = useState('');
  const [totalFat, setTotalFat] = useState('');
  const [sodium, setSodium] = useState('');
  const [sugar, setSugar] = useState('');
  const [fiber, setFiber] = useState('');
  const [potassium, setPotassium] = useState('');
  const [calcium, setCalcium] = useState('');
  const [magnesium, setMagnesium] = useState('');
  const [iron, setIron] = useState('');
  const [vitaminA, setVitaminA]  = useState('');
  const [vitaminD, setVitaminD] = useState('');
  const [iodine, setIodine]  = useState('');
  const [folate, setFolate] = useState('');
  const [zinc, setZinc] = useState('');


  useEffect(() => 
  {
    const productPull = async () => 
    {
      var obj = {barcode:currentProductID};
      var js = JSON.stringify(obj);

      try 
      {
        const response = await fetch(buildPath('/api/foodsearchbarcode'),
        {method:'POST',body:js,headers:{'Content-Type': 'application/json'}})
        const data = await response.json();
      
        setBarcode(data.barcode);
        setImageFront(data.imageFront);
        setImageThumb(data.imageThumb);
        setImageNutrition(data.imageNutrition);
        setBrandName(data.brandName);
        setProductName(data.productName);
        setServingSize(data.servingSize);
        setCalories(data.calories);
        setProtein(data.protein);
        setCarbohydrates(data.carbohydrates);
        setCholesterol(data.cholesterol);
        setSaturatedFats(data.saturatedFats);
        setTotalFat(data.totalFats);
        setSodium(data.sodium);
        setSugar(data.sugar);
        setFiber(data.fiber);
        setPotassium(data.potassium);
        setCalcium(data.calcium);
        setMagnesium(data.magnesium);
        setIron(data.iron);
        setVitaminA(data.vitaminA);
        setVitaminD(data.vitaminD);
        setIodine(data.iodine);
        setFolate(data.folate);
        setZinc(data.zinc);
 


      }   
      catch (err) 
      {
        console.error(err);
      }
    };

    productPull();
  }, []);
  

  /*console.log(brandName);
  console.log(foodName);
  con9sole.log("Calories: " + calories);
  cons9ole.log("Carbs: " + carbohydrates);
  console.log("Cholesterol: " + cholesterol);
  console.log("Fiber: " + fiber);
  console.log("Potassium: " + Potassium);
  console.log("Protein: " + Protein   );
  console.log("SatFats: " + saturatedFats);
  console.log("Serving size: " + servingSize);
  console.log("Sodium: " + sodium);
  console.log("Sugar: " + sugar);
  console.log("TotalFat: " + totalFat);*/




    return (  
        <div className="center">
          <span>{barcode}</span>
          <img src={imageFront}></img>
          <img src={imageThumb}></img>
          <img src={imageNutrition}></img>
          <span>{brandName}</span>
          <span>{productName}</span>
          <span>{servingSize}</span>
          <span>{calories}</span>
          <span>{protein}</span>
          <span>{carbohydrates}</span>
          <span>{cholesterol}</span>
          <span>{saturatedFats}</span>
          <span>{totalFat}</span>
          <span>{sodium}</span>
          <span>{sugar}</span>
          <span>{fiber}</span>
          <span>{potassium}</span>
          <span>{calcium}</span>
          <span>{magnesium}</span>
          <span>{iron}</span>
          <span>{vitaminA}</span>
          <span>{vitaminD}</span>
          <span>{iodine}</span>
          <span>{folate}</span>
          <span>{zinc}</span>
          
        </div>
    );
}

export default ProductStats;

