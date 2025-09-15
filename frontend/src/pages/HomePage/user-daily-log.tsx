import React from 'react';
import './home.css';

type UserDailyLoggedProductStats = {
  barcode: string;
  imageThumb: string;
  brandName: string;
  productName: string;
  calories: string;
  userID: string;
  date: string;
};

type DailyLogProps = {
  userDailyLog: UserDailyLoggedProductStats[];
};

const DailyLog: React.FC<DailyLogProps> = ({ userDailyLog }) => {

    

    function gotoProduct(barcode : string)
    {
      window.location.href = `/product?productid=${encodeURIComponent(barcode)}`; 
    }



    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);
    function handleTouchStart(e : React.TouchEvent, barcode : string)
    {
      const startTouchTime = e.targetTouches[0].clientX;
      gotoProduct(barcode);
      setTouchStart(startTouchTime);
      console.log(startTouchTime);
      console.log(touchStart);
    }

    function handleTouchEnd(e : React.TouchEvent)
    {
      const endTouchTime = e.changedTouches[0].clientX;
      setTouchEnd(endTouchTime);
      console.log(endTouchTime);
      console.log(touchEnd);
    }


return (
  <div className="container-border" style={{ width: '85%', margin: '0.5vh auto 1vh' }}>

    <div className="scroll-log-container">

      {userDailyLog.length > 0 && (
        <div className="user-log-text-area">
          <span className='user-log-text'>Daily Log</span>
        </div>
      )}

      {userDailyLog.length > 0 ? (
        userDailyLog.map((item) => (
          <div className="item-container" key={item.barcode}>
            <div className="thumbnail-container">
              <img
                id="image-thumbnail"
                src={item.imageThumb}
                alt={item.productName}
                onClick={() => gotoProduct(item.barcode)}
                onTouchStart={(e) => handleTouchStart(e, item.barcode)}
                onTouchEnd={handleTouchEnd}
              />
              <span id="item-calories">{item.calories} cal</span>
            </div>
            <div className="full-text-container">
              <span id="item-title">
                {item.brandName !== "N/A" ? item.brandName : " "}
              </span>
              <span id="item-subtitle">{item.productName}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="placeholder-container text-center p-3">
          <p className="placeholder-text">Your daily log is empty</p>
        </div>
      )}
    </div>
  </div>
);
}

export default DailyLog;
