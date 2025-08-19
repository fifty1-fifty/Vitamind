import React from 'react';

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
    return (
      <div
        className="container-border"
        style={{ width: '100%', marginTop: '3vh'}}
      >
        <div className="scroll-log-container" style={{justifyContent : userDailyLog.length === 0 ? 'center' : 'flex-start'}}>
          {userDailyLog.length > 0 ? (
            userDailyLog.map((item) => (
              <div className="item-container" key={item.barcode}>
                <div className="thumbnail-container">
                  <img
                    id="image-thumbnail"
                    src={item.imageThumb}
                    alt={item.productName}
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
