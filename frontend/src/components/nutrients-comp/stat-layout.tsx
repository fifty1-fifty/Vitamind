import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
//import Lookup from "../home-comp/lookup";
//import Background from '../background-comp/BackgroundMain.tsx';
//import Barcode from '../barcode-comp/barcode-scanner.tsx';
import {buildPath } from '../../../../utils.ts';
import './stat-layout.css';



const ProductStats = () =>
{
  // Store the current barcode locally from the URL
  const query = new URLSearchParams(useLocation().search);
  let currentProductID = query.get("productid");

  

  const [initialProductData, setInitialProductData] = useState({
      barcode: '',
      imageFront: 'a',
      imageThumb: 'a',
      imageNutrition: 'a',
      brandName: '',
      productName: '',
      servingSize: '',
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

  const [finalProductData, setFinalProductData] = useState({
      servingSize: '',
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
    })






  // this is bad, and ia hate it, but it works
  const [userServingCount, setUserServingCount] = useState(1);
  const [servingCountInput, setServingCountInput] = useState(1);
  const [servingCountChangeFlag, setServingCountChangeFlag] = useState(false);
  





 




  useEffect(() => 
  {
    
    const productPull = async () => 
    {
      var obj = {barcode:currentProductID};
      var js = JSON.stringify(obj);

      try 
      {
        const response = await fetch(buildPath('/api/foodsearchbarcode'),
        {method:'POST', credentials: 'include', body:js,headers:{'Content-Type': 'application/json'}});
       
        if(response.status == 401 || response.status == 403)
        {
          //console.log(data.status);
          window.location.href = '/login';
          return;
        }
         
        const data = await response.json();
       

        setInitialProductData(prev => ({
          ...prev,
          ...data
        })); console.log('beans' + initialProductData.servingSize); 
      }  
      catch (err) 
      {
        console.error(err);
        console.log("im gayt");
      }   
    };
    productPull();
  }, []);
  




  



  function handleSetUserServingCount(operate : string)
  {
    let newCount = userServingCount;
    setServingCountInput('');
    /* console.log(initialProductData.totalFats);
    console.log(finalProductData.totalFats); */
    //console.log(operate);

    console.log(newCount);
    //let count = userServingCount;
    setServingCountChangeFlag(true);
    //console.log('im a  gat faggot fig')
    //console.log('test test test' + initialProductData.protein);

	let userSetOperate = parseInt(operate)

    if(operate == 'increase' && newCount < 99)
      newCount = newCount + 1;  
    else if(operate == 'decrease' && newCount > 1)
      newCount = newCount - 1;
    else if(userSetOperate > 0 && userSetOperate < 100)
      newCount = userSetOperate;
    

    setUserServingCount(newCount);
    console.log(userServingCount);


    let proteinSplit = initialProductData.protein.split(' ');
    setFinalProductData(prev =>   ({...prev, protein : (parseFloat(proteinSplit[0]) * newCount).toFixed(1) + ' ' + proteinSplit[1]}));
    
    let carbsSplit = initialProductData.carbohydrates.split(' ');
    setFinalProductData(prev =>   ({...prev, carbohydrates : (parseFloat(carbsSplit[0]) * newCount).toFixed(1) + ' ' + carbsSplit[1]}));

    let cholesterolSplit = initialProductData.cholesterol.split(' ');
    setFinalProductData(prev =>   ({...prev, cholesterol : (parseFloat(cholesterolSplit[0]) * newCount).toFixed(1) + ' ' + cholesterolSplit[1]}));

    let saturatedFatsSplit = initialProductData.saturatedFats.split(' ');
    setFinalProductData(prev =>   ({...prev, saturatedFats : (parseFloat(saturatedFatsSplit[0]) * newCount).toFixed(1) + ' ' + saturatedFatsSplit[1]}));

    let totalFatsSplit = initialProductData.totalFats.split(' ');
    setFinalProductData(prev =>   ({...prev, totalFats : (parseFloat(totalFatsSplit[0]) * newCount).toFixed(1) + ' ' + totalFatsSplit[1]}));

    let sodiumSplit = initialProductData.sodium.split(' ');
    setFinalProductData(prev =>   ({...prev, sodium : (parseFloat(sodiumSplit[0]) * newCount).toFixed(1) + ' ' + sodiumSplit[1]}));

    let sugarSplit = initialProductData.sugar.split(' ');
    setFinalProductData(prev =>   ({...prev, sugar : (parseFloat(sugarSplit[0]) * newCount).toFixed(1) + ' ' + sugarSplit[1]}));

    let fiberSplit = initialProductData.fiber.split(' ');
    setFinalProductData(prev =>   ({...prev, fiber : (parseFloat(fiberSplit[0]) * newCount).toFixed(1) + ' ' + fiberSplit[1]}));

    let potassiumSplit = initialProductData.potassium.split(' ');
    setFinalProductData(prev =>   ({...prev, potassium : (parseFloat(potassiumSplit[0]) * newCount).toFixed(1) + ' ' + potassiumSplit[1]}));

    let calciumSplit = initialProductData.calcium.split(' ');
    setFinalProductData(prev =>   ({...prev, calcium : (parseFloat(calciumSplit[0]) * newCount).toFixed(1) + ' ' + calciumSplit[1]}));

    let magnesiumSplit = initialProductData.magnesium.split(' ');
    setFinalProductData(prev =>   ({...prev, magnesium : (parseFloat(magnesiumSplit[0]) * newCount).toFixed(1) + ' ' + magnesiumSplit[1]}));

    let ironSplit = initialProductData.iron.split(' ');
    setFinalProductData(prev =>   ({...prev, iron : (parseFloat(ironSplit[0]) * newCount).toFixed(1) + ' ' + ironSplit[1]}));

    let vitaminASplit = initialProductData.vitaminA.split(' ');
    setFinalProductData(prev =>   ({...prev, vitaminA : (parseFloat(vitaminASplit[0]) * newCount).toFixed(1) + ' ' + vitaminASplit[1]}));

    let vitaminDSplit = initialProductData.vitaminD.split(' ');
    setFinalProductData(prev =>   ({...prev, vitaminD : (parseFloat(vitaminDSplit[0]) * newCount).toFixed(1) + ' ' + vitaminDSplit[1]}));

    let iodineSplit = initialProductData.iodine.split(' ');
    setFinalProductData(prev =>   ({...prev, iodine : (parseFloat(iodineSplit[0]) * newCount).toFixed(1) + ' ' + iodineSplit[1]}));

    let folateSplit = initialProductData.folate.split(' ');
    setFinalProductData(prev =>   ({...prev, folate : (parseFloat(folateSplit[0]) * newCount).toFixed(1) + ' ' + folateSplit[1]}));

    let zincSplit = initialProductData.zinc.split(' ');
    setFinalProductData(prev =>   ({...prev, zinc : (parseFloat(zincSplit[0]) * newCount).toFixed(1) + ' ' + zincSplit[1]}));

    setFinalProductData(prev => ({...prev, servingSize : initialProductData.servingSize}));
    setFinalProductData(prev => ({...prev, calories: (parseFloat(initialProductData.calories) * newCount).toFixed(1) + ''}));

    //console.log('why does this not work fucker helo');
    //console.log('hahaha' + finalProductData.protein)
    //console.log(userServingCount);
    //console.log(protein);
    //console.log(initialProductData);
  }



  async function pushItemStats()
  {
    //console.log(' i like a trhe cum');
    //event.preventDefault();
    const date = new Date();
    let currentDate = (date.getMonth() + 1 ).toString() + ' - ' + date.getDate().toString() + ' - ' + date.getFullYear().toString(); 
    //console.log(date.getFullYear());
    //console.log(date.getMonth());



    var obj = {serverPushedProductStats : servingCountChangeFlag ? finalProductData : initialProductData, serverCurrentDate : currentDate, serverSideServingCount : userServingCount};
    var js = JSON.stringify(obj);
    console.log(js);
    try
    {
      const response = await fetch(buildPath('/api/pushNewItem'),
        {method: 'POST', body: js, headers: {'Content-Type' : 'application/json'}, credentials: 'include'});
      //var res = JSON.parse(await response.text());
    }
    catch(error : any)
    {
      alert(error.toString());
      return;
    }
    
    //var res = JSON.parse(await response.text());
    //console.log(res);

    //const response = 


  }




  /*function userInputServerCount(e: any) : void
  {
    handleSetUserServingCount(e.target.value);
  }*/


 
    
    /*console.log('initial grab');
    console.log(initialProductData);
    
    console.log('final grab');
    console.log(finalProductData);*/
    

    
    return (  
        <div className='container-fluid' id='main-container-formatting'>
            <div className='row'>
                <div id='product-title-area'>
                    <h6 id='product-title'>{initialProductData.productName}</h6>
                    <h6 id='product-subtitle'>{initialProductData.brandName}</h6>
                    <div id='item-button-area'>
                        <button id='edit-item-button'>Edit Item<i className='material-icons' id='edit-item-icon'>edit_note</ i></button>
                        <button id='add-item-button' onClick={() => pushItemStats()}>Add Item<i className='material-icons' id='add-item-icon'>library_add</ i></button>
                    </div>
                </div>

                <div className='photo-card' id='image-container-container'> 
                    <div className='image-container'>
                        <img src={initialProductData.imageFront} id='product-image'></img>
                    </div>
                </div>
            </div>





           <div className='row'>
              <div id='nutrition-info-container'>
                      
                  <div id='serving-chooser-area'>
                      <button id='decrease-serving-chooser-button'><i className='material-icons' id='serving-chooser-icon' onClick={() => handleSetUserServingCount('decrease')}>arrow_drop_down</i></button>
                      <span id='serving-counter'>Serving(s): 
                          <input id='servings-input' type='number' value={servingCountInput} placeholder={userServingCount} onBlur={e => handleSetUserServingCount(e.target.value)} onChange={e => setServingCountInput(e.target.value)}></input>
                          <span>{initialProductData.servingSize}</span>
                      </span>
                      <button id='increase-serving-chooser-button'><i className='material-icons' id='serving-chooser-icon' onClick={() => handleSetUserServingCount('increase')}>arrow_drop_up</i></button>
                  </div>
                  
                  <div id='nutrition-info'>
                      <div id='individual-stat-container'>
                          <span>Calories</span>
                          <span>{(initialProductData.calories * userServingCount).toFixed(1)}</span>
                      </div>
                      
                      <div id='individual-stat-container'>
                          <span>Protein</span>
                          <span>{servingCountChangeFlag ? finalProductData.protein : initialProductData.protein}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Carbohydrates</span>
                          <span>{servingCountChangeFlag ? finalProductData.carbohydrates : initialProductData.carbohydrates}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Cholesterol</span>
                          <span>{servingCountChangeFlag ? finalProductData.cholesterol : initialProductData.cholesterol}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Saturated Fats</span>
                          <span>{servingCountChangeFlag ? finalProductData.saturatedFats : initialProductData.saturatedFats}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Total Fats</span>
                          <span>{servingCountChangeFlag ? finalProductData.totalFats : initialProductData.totalFats}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Sodium</span>
                          <span>{servingCountChangeFlag ? finalProductData.sodium : initialProductData.sodium}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Sugar</span>
                          <span>{servingCountChangeFlag ? finalProductData.sugar : initialProductData.sugar}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Fiber</span>
                          <span>{servingCountChangeFlag ? finalProductData.fiber : initialProductData.fiber}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Potassium</span>
                          <span>{servingCountChangeFlag ? finalProductData.potassium : initialProductData.potassium}</span>
                      </div>


                      <div id='individual-stat-container'>
                          <span>Calcium</span>
                          <span>{servingCountChangeFlag ? finalProductData.calcium : initialProductData.calcium}</span>
                      </div>


                      <div id='individual-stat-container'>
                          <span>Magnesium</span>
                          <span>{servingCountChangeFlag ? finalProductData.magnesium : initialProductData.magnesium}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Iron</span>
                          <span>{servingCountChangeFlag ? finalProductData.iron : initialProductData.iron}</span>
                      </div>


                      <div id='individual-stat-container'>
                          <span>Vitamin A</span>
                          <span>{servingCountChangeFlag ? finalProductData.vitaminA : initialProductData.vitaminA}</span>
                      </div>


                      <div id='individual-stat-container'>
                          <span>Vitamin D</span>
                          <span>{servingCountChangeFlag ? finalProductData.vitaminD : initialProductData.vitaminD}</span>
                      </div>


                      <div id='individual-stat-container'>
                          <span>Iodine</span>
                          <span>{servingCountChangeFlag ? finalProductData.iodine : initialProductData.iodine}</span>
                      </div>

                      <div id='individual-stat-container'>
                          <span>Folate</span>
                          <span>{servingCountChangeFlag ? finalProductData.folate : initialProductData.folate}</span>
                      </div>


                      <div id='individual-stat-container'>
                          <span>Zinc</span>
                          <span>{servingCountChangeFlag ? finalProductData.zinc : initialProductData.zinc}</span>
                      </div>







                  </div>
              </div>
           </div>













        </div>
          );
}

export default ProductStats;









  /*<span>{barcode}</span>
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
          <span>{zinc}</span>*/
          


