import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
//import Lookup from "../home-comp/lookup";
//import Background from '../background-comp/BackgroundMain.tsx';
//import Barcode from '../barcode-comp/barcode-scanner.tsx';
import {buildPath } from '../../../../utils.ts';
import './edit-item.css';



const EditItem = () =>
{
  // Store the current barcode locally from the URL
  const query = new URLSearchParams(useLocation().search);
  let currentProductID = query.get("productid");



  const [pulledPlaceholderProductData, setPulledPlaceholderProductData] = useState({
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









  /**const [finalProductData, setFinalProductData] = useState({
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
    }) */

  /*// this is bad, and ia hate it, but it works
  const [userServingCount, setUserServingCount] = useState(1);
  const [servingCountInput, setServingCountInput] = useState(1);
  const [servingCountChangeFlag, setServingCountChangeFlag] = useState(false);*/
  





 

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
          window.location.href = '/login';
          return;
        }
         
        const data = await response.json();
       

        setPulledPlaceholderProductData(prev => ({
          ...prev,
          ...data
        })); console.log('beans' + pulledPlaceholderProductData.servingSize); 
      }  
      catch (err) 
      {
        console.error(err);
        console.log("im gayt");
      }   
    };
    productPull();
  }, []);
  
// /<span>{pulledPlaceholderProductData.calories}</span>



    return (  
        <div className='container-fluid'>


                    <div className='row'>
                        <div id='product-title-area'>
                            <div id='individual-edit-container'>
                              <span>Product</span>
                              <input id='edit-product-title' placeholder={pulledPlaceholderProductData.productName}></input>
                            </div>

                            <div id='individual-edit-container'>
                              <span>Brand</span>
                              <input id='edit-product-subtitle' placeholder={pulledPlaceholderProductData.brandName}></input>
                            </div>

                            <div id='individual-edit-container'>
                              <span>Serving Size</span>
                              <input id='edit-product-subtitle' placeholder={pulledPlaceholderProductData.servingSize}></input>
                            </div>
                        </div>

                        <div className='photo-card' id='image-container-container'> 
                            <div className='image-container'>
                                <img src={pulledPlaceholderProductData.imageFront} id='product-image'></img>
                            </div>
                        </div>
                    </div>



                    <div id='nutrition-edit'>
                      <div id='individual-edit-container'>
                          <span>Calories</span>
                          <input id='user-edit' placeholder={(pulledPlaceholderProductData.calories)}></input>                          
                      </div>
                      
                      <div id='individual-edit-container'>
                          <span>Protein</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.protein.substring(0, pulledPlaceholderProductData.protein.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>
                      </div>

                      <div id='individual-edit-container'>
                          <span>Carbohydrates</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.carbohydrates.substring(0, pulledPlaceholderProductData.carbohydrates.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>  
                      </div>

                      <div id='individual-edit-container'>
                          <span>Cholesterol</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.cholesterol.substring(0, pulledPlaceholderProductData.cholesterol.indexOf(' '))}></input>    
                            <span>g</span>
                          </div> 
                      </div>

                      <div id='individual-edit-container'>
                          <span>Saturated Fats</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.saturatedFats.substring(0, pulledPlaceholderProductData.saturatedFats.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>   
                      </div>

                      <div id='individual-edit-container'>
                          <span>Total Fats</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.totalFats.substring(0, pulledPlaceholderProductData.totalFats.indexOf(' '))}></input>    
                            <span>g</span>
                          </div> 
                      </div>

                      <div id='individual-edit-container'>
                          <span>Sodium</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.sodium.substring(0, pulledPlaceholderProductData.sodium.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>   
                      </div>

                      <div id='individual-edit-container'>
                          <span>Sugar</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.sugar.substring(0, pulledPlaceholderProductData.sugar.indexOf(' '))}></input>    
                            <span>g</span>
                          </div> 
                      </div>

                      <div id='individual-edit-container'>
                          <span>Fiber</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.fiber.substring(0, pulledPlaceholderProductData.fiber.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>
                      </div>

                      <div id='individual-edit-container'>
                          <span>Potassium</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.potassium.substring(0, pulledPlaceholderProductData.potassium.indexOf(' '))}></input>    
                            <span>g</span>
                          </div> 
                      </div>


                      <div id='individual-edit-container'>
                          <span>Calcium</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.calcium.substring(0, pulledPlaceholderProductData.calcium.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>  
                      </div>


                      <div id='individual-edit-container'>
                          <span>Magnesium</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.magnesium.substring(0, pulledPlaceholderProductData.magnesium.indexOf(' '))}></input>    
                            <span>g</span>
                          </div> 
                      </div>

                      <div id='individual-edit-container'>
                          <span>Iron</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.iron.substring(0, pulledPlaceholderProductData.iron.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>   
                      </div>


                      <div id='individual-edit-container'>
                          <span>Vitamin A</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.vitaminA.substring(0, pulledPlaceholderProductData.vitaminA.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>  
                      </div>


                      <div id='individual-edit-container'>
                          <span>Vitamin D</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.vitaminD.substring(0, pulledPlaceholderProductData.vitaminD.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>
                      </div>


                      <div id='individual-edit-container'>
                          <span>Iodine</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.iodine.substring(0, pulledPlaceholderProductData.iodine.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>  
                      </div>

                      <div id='individual-edit-container'>
                          <span>Folate</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.folate.substring(0, pulledPlaceholderProductData.folate.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>   
                      </div>


                      <div id='individual-edit-container'>
                          <span>Zinc</span>
                          <div id='input-plus-unit-container'>
                            <input id='user-edit' placeholder={pulledPlaceholderProductData.zinc.substring(0, pulledPlaceholderProductData.zinc.indexOf(' '))}></input>    
                            <span>g</span>
                          </div>  
                      </div>
                  </div>




     
        </div>
          );
}

export default EditItem;




