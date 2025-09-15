import { useState, useEffect } from 'react';
//import { SemiCircleProgress } from '@mantine/core';

const RADIUS = 190;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;


function halfRing({ progressPercent = 0, progressValue = '', duration = 1000, strokeColor = '#44cf6c', bgStrokeColor = '#dedede',
strokeWidth = 18, textColor = '#44cf6c', fontSize = 20, text="", xAxis= 0, yAxis = 125 
}) 
{
    const [displayedProgress, setDisplayedProgress] = useState(0);
    const [toggleBetweenPercentValue, setToggleBetweenPercentValue] = useState(true);

    console.log(textColor);
    console.log(fontSize);
    console.log(xAxis);
    console.log(yAxis);

    useEffect(() => 
    {
        let start = 0;
        const animate = (timestamp : number) => 
        {
        if (!start) start = timestamp;
            const elapsed = (timestamp - start);
        const percentage = Math.min(progressPercent, (elapsed / duration) * progressPercent);
        setDisplayedProgress(percentage);
        if (elapsed < duration) 
        {
            requestAnimationFrame(animate);
        }
        else 
        {
            setDisplayedProgress(progressPercent); // Snap to final value
        }
        };
        requestAnimationFrame(animate);
    }, [progressPercent, duration]);  

    const strokeDashoffset = Math.max(0, CIRCUMFERENCE - ((displayedProgress / 2) / 100) * CIRCUMFERENCE);
    const horizontalShift = (strokeDashoffset != 0 ? 8 : -4); 

  function handleSwitch()
  {
    if(toggleBetweenPercentValue == true)
    {
      setToggleBetweenPercentValue(false);
    }
    else
    {
      setToggleBetweenPercentValue(true);
    }
    ///handleHorizontalShift();
    console.log('this is a test' + toggleBetweenPercentValue);
  }


    return (

        <svg
      width={'110%'}
      height={'55%'}
      viewBox="-26.75 105.75 267.5 267.5"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(-180deg)', overflow: 'clip', zIndex: '-1'}}
    >
      <circle
        r={RADIUS}
        cx="107"
        cy="107"
        fill="transparent"
        onClick={handleSwitch}
        stroke={bgStrokeColor}
        strokeWidth={strokeWidth - 3}
      />
      <circle
        r={RADIUS}
        cx="107"
        cy="107"
        fill="transparent"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={strokeDashoffset} 
        style={{
          transition: 'stroke-dashoffset 0.1s linear',
        }}
      />
      <text className='progressText' 
        x={horizontalShift} 
        y="102"
        fill="#44cf6c"
        fontSize="84"
        fontWeight="bold"
        transform="rotate(180 94 124)"
             >
        {toggleBetweenPercentValue ? `${Math.round(displayedProgress)}%` : (progressValue == '0g' || text == 'Calories' ? progressValue : (parseFloat(progressValue).toFixed(1) + progressValue.substring(progressValue.indexOf(' ') + 1)))}
      </text>
      
    </svg>
       
    );
}
export default halfRing;