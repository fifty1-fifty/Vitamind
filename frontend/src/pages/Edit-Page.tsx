import EditPage from '../components/edit-comp/edit-item';
import Background from '../components/background-comp/Background';
import '../components/edit-comp/edit-item.css';
import { useLocation } from "react-router-dom";


const EditProductPage = () =>
{
    
    
    
    
  const query = new URLSearchParams(useLocation().search);
  let currentProductID = query.get("productid");


  function gotoProduct()
  {
        window.location.href = `/product?productid=${encodeURIComponent(currentProductID != null ? currentProductID : 6969)}`;
  }



  return (
    <div className='container-fluid'>
        <div className='row justify-content-center' >



            <div className='col-6' id='main-area-container'>
                <EditPage />
                <div id='below-button-area'>
                    <button id='edit-page-buttons' onClick={gotoProduct}>Return<i className='material-icons' id='return-item-icon'>reply</ i></button>
                    <button id='edit-page-buttons' onClick={gotoProduct}>Add Item<i className='material-icons' id='add-item-icon'>library_add</ i></button>
                </div>
            </div>

   
                
        </div>
        <Background varColor='#040C1E' />
    </div>
  );
};

export default EditProductPage;
