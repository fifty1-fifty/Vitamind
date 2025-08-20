import React from 'react';
import { useState } from 'react';

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
    function handleTouchStart(e : React.TouchEvent)
    {
      const startTouchTime = e.targetTouches[0].clientX;
      gotoProduct();
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
      <div
        className="container-border"
        style={{ width: '100%', marginTop: '3vh'}}
      >
        <div className="scroll-log-container" style={{justifyContent : userDailyLog.length === 0 ? 'center' : 'flex-start'}}>
          {userDailyLog.length > 0 ? (
            userDailyLog.map((item) => (
              <div className="item-container" key={item.barcode}>
                <div className="thumbnail-container" style={{width : toggleHoverOverItemEffect ? '65%' : '60%'}}>
                  <img
                    id="image-thumbnail"
                    src={item.imageThumb}
                    alt={item.productName}
                    onClick={() => gotoProduct(item.barcode)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  />
                </div>
                <div className="text-container">
                  <span id="item-title">
                    {item.brandName !== "N/A" ? item.brandName : " "}
                  </span>
                  <span id="item-subtitle">{item.productName}</span>
                  <span id="item-calories">{item.calories} cal</span>
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
};

export default DailyLog;
