import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import {buildPath } from '../../../../utils';
import '../ProductPage/stat-layout.css';

const ProductStats = () =>
{
  // Store the current barcode locally from the URL
  const query = new URLSearchParams(useLocation().search);
  let currentProductID = query.get("productid");

  
  // Inital product data loaded in upon page load
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

  // Final product data for use whenever a custom serving size is selcted
  const [finalProductData, setFinalProductData] = useState({
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
    })

  // this is bad, and ia hate it, but it works
  const [userServingCount, setUserServingCount] = useState(1); // I think this is for the input. the actual value used in doing the calculations
  const [servingCountInput, setServingCountInput] = useState(1); // I think that one is affected by arrows LOL im lazy and dont wanna check
  const [servingCountChangeFlag, setServingCountChangeFlag] = useState(false); // Flag for switching between which serving is shown (user input or arrows)
  const [toggleAddButtonColor, setToggleAddButtonColor ] = useState(false); // Flag for toggling the color when a product has been addded 
  const [toggleEditButtonColor, setToggleEditButtonColor] = useState(false); // Flag for toggling the color when a product is being edited

  // Style for when add button has not been pushed
  const addButtonToggleStyle = 
  {
    backgroundColor: 'white',
    color: '#44cf6c'

  }

  // Style for when add button has been pushed
  const toggledButtonPushed = 
  {
    backgroundColor: '#44cf6c',
    color : 'white'
  }

  // Style to be assigned to product title to dynamically assign font size
  const dynamicBrandFontSize =
  {
    fontSize : calculateDynamicFontSize(initialProductData.brandName) 
  }

  const dynamicProductFontSize =
  {
    fontSize : calculateDynamicFontSize(initialProductData.productName)
  }

  function calculateDynamicFontSize(brandName: string) 
  {
    const minSize = 20; // px, minimum font size
    const maxSize = 40; // px, maximum font size
    const shrinkRate = 1; // px per character

    // Calculate size, but never go below minSize
    const size = Math.max(maxSize - brandName.length * shrinkRate, minSize);
    return `${size}px`;
  }

  // UseEffect pulls the product ID information using barcode number upon page load  
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
  

  // Function for properly handling if user increases / decreases serving size
  function handleSetUserServingCount(operate : string)
  {
    let newCount = userServingCount;
    setServingCountInput(1);
    console.log(servingCountInput);

    setServingCountChangeFlag(true);

    let userSetOperate = parseInt(operate)

    if(operate == 'increase' && newCount < 99)
    {
      newCount = newCount + 1;  
      setUserServingCount(prev => prev + 1);
    }
    else if(operate == 'decrease' && newCount > 1)
    {
      newCount = newCount - 1;
      setUserServingCount(prev => prev - 1);
    }
    else if(userSetOperate > 0 && userSetOperate < 100)
    {
      setUserServingCount(userSetOperate);
      newCount = userSetOperate;
    }

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
    setFinalProductData(prev => ({...prev, barcode : initialProductData.barcode}));
    setFinalProductData(prev => ({...prev, imageThumb : initialProductData.imageThumb}));
    setFinalProductData(prev => ({...prev, brandName : initialProductData.brandName}));
    setFinalProductData(prev => ({...prev, productName : initialProductData.productName}));
    setFinalProductData(prev => ({...prev, imageFront : initialProductData.imageFront}));
  }


  // Function for pushing product statistics to user profile daily log
  async function handleAddProduct()
  {
    setToggleAddButtonColor(true);
    const date = new Date();
    let currentDate = (date.getMonth() + 1 ).toString() + ' - ' + date.getDate().toString() + ' - ' + date.getFullYear().toString(); 

    var obj = {serverPushedProductStats : servingCountChangeFlag ? finalProductData : initialProductData, serverCurrentDate : currentDate, serverSideServingCount : userServingCount};
    var js = JSON.stringify(obj);
    console.log(js);
    try
    {
      const response = await fetch(buildPath('/api/pushNewItem'),
        {method: 'POST', body: js, headers: {'Content-Type' : 'application/json'}, credentials: 'include'});
      console.log(response);
    }
    catch(error : any)
    {
      alert(error.toString());
      return;
    }
  }

  // Handle editing products, update the cached product information 
  async function handleEditProduct()
  {
    setToggleEditButtonColor(!toggleEditButtonColor);
    console.log(toggleEditButtonColor);
    if(toggleEditButtonColor)
    {
      //console.log('this should only be printed upon confirming edits');
      //console.log(initialProductData);
      let obj = {serverEditProductStats : initialProductData};
      var js = JSON.stringify(obj);
      try 
      {
        const response = await fetch(buildPath('/api/pushEditCachedItem'),
        {method: 'POST', body: js, headers: {'Content-Type' : 'application/json'}, credentials: 'include'});
        console.log('I have done a gay' + response);     
      } 
      catch (error : any) 
      {
        alert(error.toString());
        return;        
      }
    }
  }

  

  
    return (  
        <div className='container-fluid' id='main-container-formatting'>
            <div className='row'>
                <div id='product-title-area'>
                    <h6 id='product-title' style={dynamicBrandFontSize}>{initialProductData.productName == 'N/A' ? ' ' : initialProductData.productName}</h6>
                    <h6 id='product-subtitle' style={dynamicProductFontSize}>{initialProductData.brandName == 'N/A' ? ' ' : initialProductData.brandName}</h6>
                    <div id='item-button-area'>
                        <button id='edit-item-button' onClick={() => handleEditProduct()} style={toggleEditButtonColor ? addButtonToggleStyle : toggledButtonPushed}>{toggleEditButtonColor ? 'Confirm Edit' : 'Edit item'}<i className='material-icons' id='edit-item-icon'>edit_note</ i></button>
                        <button id='add-item-button' disabled={toggleAddButtonColor} style={toggleAddButtonColor ? addButtonToggleStyle : toggledButtonPushed} onClick={() => handleAddProduct()}>Add Item<i className='material-icons' id='add-item-icon'>{toggleAddButtonColor ? 'check' : 'library_add'}</ i></button>
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
                      <span id='serving-counter' style={{whiteSpace : 'pre'}}>{!toggleEditButtonColor ? 'Serving(s)' : '____________'}
                          {!toggleEditButtonColor && <input id='servings-input' type='number' placeholder={userServingCount.toString()} onBlur={e => handleSetUserServingCount(e.target.value)} onChange={e => setServingCountInput(parseInt(e.target.value))}></input>}
                          <span>{initialProductData.servingSize}</span>
                      </span>
                      <button id='increase-serving-chooser-button'><i className='material-icons' id='serving-chooser-icon' onClick={() => handleSetUserServingCount('increase')}>arrow_drop_up</i></button>
                  </div>
                  
                  <div id='nutrition-info'>
                      <div id='individual-stat-container'>
                          <span>Calories</span>
                          {!toggleEditButtonColor && <span>{(parseInt(initialProductData.calories) * userServingCount).toFixed(1)}</span>}
                          {toggleEditButtonColor && <input onChange={(e) => setInitialProductData(prev => ({...prev, calories : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>
                      
                      <div id='individual-stat-container'>
                          <span>Protein</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.protein : initialProductData.protein}</span>}
                          {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, protein : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Carbohydrates</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.carbohydrates : initialProductData.carbohydrates}</span>}
                          {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, carbohydrates : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Cholesterol</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.cholesterol : initialProductData.cholesterol}</span>}
                          {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, cholesterol : e.target.value}))}  className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Saturated Fats</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.saturatedFats : initialProductData.saturatedFats}</span>}
                          {toggleEditButtonColor && <input onChange={(e) => setInitialProductData(prev => ({...prev, saturatedFats : e.target.value}))}  className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Total Fats</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.totalFats : initialProductData.totalFats}</span>}
                          {toggleEditButtonColor && <input onChange={(e) => setInitialProductData(prev => ({...prev, totalFats : e.target.value}))}  className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Sodium</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.sodium : initialProductData.sodium}</span>}
                          {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, sodium : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Sugar</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.sugar : initialProductData.sugar}</span>}
                          {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, sugar : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Fiber</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.fiber : initialProductData.fiber}</span>}
                          {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, fiber : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                          <span>Potassium</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.potassium : initialProductData.potassium}</span>}
                          {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, potassium : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>


                      <div id='individual-stat-container'>
                          <span>Calcium</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.calcium : initialProductData.calcium}</span>}
                          {toggleEditButtonColor && <input onChange={(e) => setInitialProductData(prev => ({...prev, calcium: e.target.value}))}  className='input-styling' placeholder="-"></input>}
                      </div>


                      <div id='individual-stat-container'>
                          <span>Magnesium</span>
                          {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.magnesium : initialProductData.magnesium}</span>}
                          {toggleEditButtonColor &&<input onChange={(e) => setInitialProductData(prev => ({...prev, magnesium : e.target.value}))}  className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                        <span>Iron</span>
                        {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.iron : initialProductData.iron}</span>}
                        {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, iron : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                        <span>Vitamin A</span>
                        {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.vitaminA : initialProductData.vitaminA}</span>}
                        {toggleEditButtonColor && <input   onChange={(e) => setInitialProductData(prev => ({...prev, vitaminA : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                        <span>Vitamin D</span>
                        {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.vitaminD : initialProductData.vitaminD}</span>}
                        {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, vitaminD : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                        <span>Iodine</span>
                        {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.iodine : initialProductData.iodine}</span>}
                        {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, iodine : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                        <span>Folate</span>
                        {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.folate : initialProductData.folate}</span>}
                        {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, folate : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>

                      <div id='individual-stat-container'>
                        <span>Zinc</span>
                        {!toggleEditButtonColor && <span>{servingCountChangeFlag ? finalProductData.zinc : initialProductData.zinc}</span>}
                        {toggleEditButtonColor && <input  onChange={(e) => setInitialProductData(prev => ({...prev, zinc : e.target.value}))} className='input-styling' placeholder="-"></input>}
                      </div>
                  </div>
              </div>
          </div>













        </div>
          );
}

export default ProductStats;





