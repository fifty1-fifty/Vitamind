require('express');
require('mongodb');
const axios = require('axios');



function emailCheck(testLoginInput)
{
  const containsDigit = /@/.test(testLoginInput);
  console.log(containsDigit);
  return containsDigit;
}


function dataScrubber(incomingData, barcode)
{
  console.log(incomingData['image_front_small_url']);
  //console.log(incomingData);
  let productNutrients = {
    'barcode' : barcode,
    'imageFront' : (incomingData['image_front_url'] ? incomingData['image_front_url'] : incomingData['image_url']) ? (incomingData['image_front_url'] ? incomingData['image_front_url'] : incomingData['image_url']) : 'N/A',
    'imageThumb' : (incomingData['image_front_thumb_url'] ? incomingData['image_front_thumb_url'] : 'N/A'),
    'imageNutrition' : (incomingData['image_nutrition_url'] ? incomingData['image_nutrition_url'] : 'N/A'),
    'brandName' : incomingData.brands ? incomingData.brands.split(',')[0] : 'N/A',
    'productName' : incomingData.product_name_en ? incomingData.product_name_en : 'N/A',
    'servingSize' : (incomingData.serving_quantity + ' ' + incomingData.serving_quantity_unit) ? (incomingData.serving_quantity + ' ' + incomingData.serving_quantity_unit) : incomingData.serving_size,
 

  'calories': (incomingData.nutriments['energy-kcal'] ? incomingData.nutriments['energy-kcal'] : 0) + '',
  'protein': (incomingData.nutriments.proteins ? incomingData.nutriments.proteins : 0) + ' ' + (incomingData.nutriments.proteins_unit ? incomingData.nutriments.proteins_unit : ''),
  'carbohydrates': (incomingData.nutriments.carbohydrates ? incomingData.nutriments.carbohydrates : 0) + ' ' + (incomingData.nutriments.carbohydrates_unit ? incomingData.nutriments.carbohydrates_unit : ''),
  'cholesterol': (incomingData.nutriments.cholesterol ? incomingData.nutriments.cholesterol : 0) + ' ' + (incomingData.nutriments.cholesterol_unit ? incomingData.nutriments.cholesterol_unit : ''),
  'saturatedFats': (incomingData.nutriments['saturated-fat_value'] ? incomingData.nutriments['saturated-fat_value'] : 0) + ' ' + (incomingData.nutriments['saturated-fat_unit'] ? incomingData.nutriments['saturated-fat_unit'] : ''),
  'totalFats': (incomingData.nutriments.fat ? incomingData.nutriments.fat : 0) + ' ' + (incomingData.nutriments.fat_unit ? incomingData.nutriments.fat_unit : 'mg'),
  'sodium': (incomingData.nutriments.sodium ? incomingData.nutriments.sodium : 0) + ' ' + (incomingData.nutriments.sodium_unit ? incomingData.nutriments.sodium_unit : 'mg'),
  'sugar': (incomingData.nutriments.sugars ? incomingData.nutriments.sugars : 0) + ' ' + (incomingData.nutriments.sugars_unit ? incomingData.nutriments.sugars_unit : 'mg'),
  'fiber': (incomingData.nutriments.fiber ? incomingData.nutriments.fiber : 0) + ' ' + (incomingData.nutriments.fiber_unit ? incomingData.nutriments.fiber_unit : 'mg'),
  'potassium': (incomingData.nutriments.potassium ? incomingData.nutriments.potassium : 0) + ' ' + (incomingData.nutriments.potassium_unit ? incomingData.nutriments.potassium_unit : 'mg'),
  'calcium': (incomingData.nutriments.calcium ? incomingData.nutriments.calcium : 0) + ' ' + (incomingData.nutriments.calcium_unit ? incomingData.nutriments.calcium_unit : 'mg'),
  'magnesium': (incomingData.nutriments.magnesium ? incomingData.nutriments.magnesium : 0) + ' ' + (incomingData.nutriments.magnesium_unit ? incomingData.nutriments.magnesium_unit : 'mg'),
  'iron': (incomingData.nutriments.iron ? incomingData.nutriments.iron : 0) + ' ' + (incomingData.nutriments.iron_unit ? incomingData.nutriments.iron_unit : 'mg'),
  'vitaminA': (incomingData.nutriments['vitamin-a'] ? incomingData.nutriments['vitamin-a'] : 0) + ' ' + (incomingData.nutriments['vitamin-a_unit'] ? incomingData.nutriments['vitamin-a_unit'] : 'mg'),
  'vitaminD': (incomingData.nutriments['vitamin-d'] ? incomingData.nutriments['vitamin-d'] : 0) + ' ' + (incomingData.nutriments['vitamin-d_unit'] ? incomingData.nutriments['vitamin-d_unit'] : 'mg'),
  'iodine': (incomingData.nutriments.iodine ? incomingData.nutriments.iodine : 0) + ' ' + (incomingData.nutriments.iodine_unit ? incomingData.nutriments.iodine_unit : 'mg'),
  'folate': (incomingData.nutriments.folate ? incomingData.nutriments.folate : 0) + ' ' + (incomingData.nutriments.folate_unit ? incomingData.nutriments.folate_unit : 'mg'),
  'zinc': (incomingData.nutriments.zinc ? incomingData.nutriments.zinc : 0) + ' ' + (incomingData.nutriments.zinc_unit ? incomingData.nutriments.zinc_unit : 'mg')  }

  //console.log(incomingData.brands);
  
 // console.log(incomingData.nutriments);
 // console.log(productNutrients);


  /*//console.log(incomingData.nutriments);
  let cleanDataBool = false;
  let baseCalories = incomingData.nutriments['energy-kcal'];
  let perHundredCalories = incomingData.nutriments['energy-kcal_100g'];
  let baseCarbs = incomingData.nutriments['carbohydrates'];
  let perHundredCarbs = incomingData.nutriments['carbohydrates_100g'];
  let baseFat = incomingData.nutriments['fat'];
  let perHundredFat = incomingData.nutriments['fat_100g'];

  let standardServingSize = incomingData.serving_quantity;
  let standardServingUnit = incomingData.serving_quantity_unit;
  let unitConversion = (standardServingSize / 100);
  //console.log(unitConversion);
  
  if(baseCalories != 0 && baseCalories == perHundredCalories)
    cleanDataBool = true;
  if(baseCarbs != 0 && baseCarbs == perHundredCarbs)
    cleanDataBool = true;
  if(baseFat != 0 && baseFat == perHundredFat)
    cleanDataBool = true;


  if(cleanDataBool)
  {
    for(let key in incomingData.nutriments)
   {
      if(!key.includes('100') 
        && !key.includes('unit') 
        && !key.includes('serving')
        && !key.includes('computed')
        && !key.includes('score'))
      {
        //console.log(key + ":" + incomingData.nutriments[key]);
        incomingData.nutriments[key] = (incomingData.nutriments[key] * unitConversion);
      }

      if(incomingData.nutriments[key] === 'undefined' && !key.includes('unit'))
        incomingData.nutriments[key] == 0;
      else if(incomingData.nutriments[key] === 'undefined' && key.includes('unit'))
        omingData.nutriments[key] = 'mg';

     
  
    } */
    /*for(let key in incomingData.nutriments)
    {
      let temp = incomingData.nutriments[key].toString();
        if(!isNaN(incomingData.nutriments[key]) 
        && ((1 > parseFloat(incomingData.nutriments[key])))
        && !key.includes('100') 
        && !key.includes('unit') 
        && !key.includes('serving')
        && !key.includes('computed')
        && !key.includes('score')
        && !key.includes('label')
        && !temp.includes('m'))
      {
        var strippedString = key.concat('_unit');
        incomingData.nutriments[key] *= 1000;

        /*if(key in incomingData.nutriments)
          console.log(incomingData.nutriments[key]);

        if(incomingData.nutriments[key].toString().length = 1)
        {
          incomingData.nutriments[strippedString] = 'm'.concat(incomingData.nutriments[strippedString]);
          console.log("test test test" + incomingData.nutriments[strippedString]);
        }*/
  return productNutrients;
}













// ============================================================================================================================================================================


exports.setApp = function (app, client) 
{
    //const db = client.db('NutritionTrack');
    //const dailyDB = client.db('DailyTracked');
	const userDB = client.db('Account-Management');
	const productDB = client.db('Product-Tracking');
  




    async function cacheProduct(incomingData)
    {
      //console.log(incomingData);
      //console.log("TEST IS A TEST TO SEE IF M<Y BALLS");

      /*let brand_name = incomingData.brands;
      let product_name = incomingData.product_name_en;
      let calories = incomingData.nutriments['energy-kcal'];
      let carbohydrates = incomingData.nutriments.carbohydrates + " " + incomingData.nutriments.carbohydrates_unit;
      let cholesterol = incomingData.nutriments.cholesterol + " " + incomingData.nutriments.cholesterol_unit;
      let fiber = incomingData.nutriments.fiber + " " + incomingData.nutriments.fiber_unit;*/

      let isCached = await productDB.collection('CachedProducts').countDocuments({Barcode : incomingData.barcode, Brand : incomingData.brandName, Product : incomingData.productName});
      if(isCached <= 0)
        await productDB.collection('CachedProducts').insertOne({
          barcode : incomingData.barcode,
          imageFront : incomingData.imageFront,
          imageThumb : incomingData.imageThumb,
          imageNutrition : incomingData.imageNutrition,
          brandName : incomingData.brandName, 
          productName : incomingData.productName,
          calories : incomingData.calories,
          protein : incomingData.protein,
          carbohydrates : incomingData.carbohydrates,
          cholesterol : incomingData.cholesterol,
          saturatedFats : incomingData.saturatedFats,
          totalFats : incomingData.totalFats,
          sodium : incomingData.sodium,
          sugar : incomingData.sugar,
          fiber : incomingData.fiber,
          potassium : incomingData.potassium,
          calcium : incomingData.calcium,
          magnesium : incomingData.magnesium,
          iron : incomingData.iron,
          vitaminA : incomingData.vitaminA,
          vitaminD : incomingData.vitaminD,
          iodine : incomingData.iodine,
          folate : incomingData.folate,
          zinc : incomingData.zinc
        });    
    }





    app.post('/api/login', async (req, res, next) => {
        var error = '';
        const { serverLoginInput, serverPasswordInput } = req.body;
        var results = 0;

        if(emailCheck(serverLoginInput) == 1)
        {
          results = await
            userDB.collection('UserInformation').find({Email: serverLoginInput, Password: serverPasswordInput}).toArray();
        }
        else
        {
          results = await
            userDB.collection('UserInformation').find({Login: serverLoginInput, Password: serverPasswordInput}).toArray();

        }
        var id = -1;
        var fn = 'NULL';
        var ln = 'NULL';
        if (results.length > 0) 
        {
            id = results[0]._id;
            fn = results[0].FirstName;
            ln = results[0].LastName;
        }
        var ret = { id: id, firstName: fn, lastName: ln, error: '' };
        res.status(200).json(ret);
    });





    app.post('/api/register', async (req, res, next) => {
        var error = '';
        const { serverEmailInput, serverRegisterInput, serverPasswordInput } = req.body;
        const id = (await userDB.collection("UserInformation").countDocuments())
          
        const results = await
            userDB.collection('UserInformation').insertOne({Email: serverEmailInput, Login: serverRegisterInput, Password: serverPasswordInput });
        
        var fn = '';
        var ln = '';
        if (results.length > 0)
        {
            id = results[0].UserId;
            fn = results[0].FirstName;
            ln = results[0].LastName;
        }
        var ret = { id: id, firstName: fn, lastName: ln, error: '' };
        res.status(200).json(ret);
    });




    app.post('/api/foodsearchbarcode', async (req, res, next) => {
        const { barcode } = req.body;
        var barcodeResponse = "";
        var cleanedProductResponse = "";
        var isCached = false;
        try
        {
            //https://robotoff.openfoodfacts.org/api/v1
            //barcodeResponse = await axios.get('https://robotoff.openfoodfacts.org/api/v2/product/'+ barcode
            if(await productDB.collection('CachedProducts').countDocuments({barcode : barcode}) > 0)
            {
              cleanedProductResponse = await productDB.collection('CachedProducts').findOne({barcode : barcode});
              isCached = true;
              console.log('i am gay');
            }
            else
            {
              barcodeResponse = await axios.get('https://world.openfoodfacts.net/api/v2/product/'+ barcode);
            }
              
            if(!isCached)
            {
              cleanedProductResponse = dataScrubber(barcodeResponse.data.product, barcode);
              cacheProduct(cleanedProductResponse);
            }
        } 
        catch (error)
        {
            console.error('error: ', error.response?.data || error.message);
            res.status(500).json({error: 'Failed to retrieve data'});
        }
        res.status(200).json(cleanedProductResponse);
    });



    /*url = ("https://trackapi.nutritionix.com/v2/search/item/?upc=" + barcode)
    headers = {
        'x-app-id': '243fb1c2',
        'x-app-key': '6b2946f8e0bc9ed031e68f649d259c09  '
    } YOU WILL NEED THIS*/
}

