import { useState, useEffect } from 'react';
//import { SemiCircleProgress } from '@mantine/core';

const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;


function halfRing({ progressPercent = 0, progressValue = '', duration = 1000, strokeColor = '#44cf6c', bgStrokeColor = '#dedede',
strokeWidth = 3, textColor = '#44cf6c', fontSize = 20, text="", xAxis= 0, yAxis = 125 
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
	console.log(horizontalShift);

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
      width={'100%'}
      height={'auto'}
      viewBox="0 0 99 65"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(-180deg)', overflow: 'clip', zIndex: '-1', display : 'block'}}
	>
      <circle
        r={RADIUS}
        cx="50"
        cy="0"
        fill="transparent"
        onClick={handleSwitch}
        stroke={bgStrokeColor}
        strokeWidth={strokeWidth - 1}
      />
      <circle
        r={RADIUS}
        cx="50"
        cy="0"
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
<text
  className="progressText"
  x="50%"                  // horizontal center of viewBox
  y="70%"                  // vertical center of viewBox
  textAnchor="middle"      // center align horizontally
  dominantBaseline="middle" // center align vertically
  fill="#44cf6c"
  fontSize="20"
  fontWeight="bold"
  transform="rotate(180 50 30)"
>
  {toggleBetweenPercentValue
    ? `${Math.round(displayedProgress)}%`
    : (progressValue == "0g" || text == "Calories"
        ? progressValue
        : (parseFloat(progressValue).toFixed(1) +
           progressValue.substring(progressValue.indexOf(" ") + 1)))
  }
</text>

      
    </svg>
       
    );
}
export default halfRing;