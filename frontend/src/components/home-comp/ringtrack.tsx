import { useEffect, useState } from 'react';

const RADIUS = 109;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircularProgress = ({ 
progressPercent = '',
progressValue = '0g',
duration = 1000,
size = '212', 
bgStrokeColor = '#dedede',
strokeWidth = 12, 
textColor = '#44cf6c', 
fontSize = 20, 
text="", 
xAxis= 0, 
yAxis = 125 
}) => {
 
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [displayedHoverColor, setDisplayedHoverColor] = useState(textColor);
  const [toggleBetweenPercentValue, setToggleBetweenPercentValue] = useState(true);
  const [horizontalShift, setHorizontalShift] = useState(18);
  


  useEffect(() => 
  {
    handleHorizontalShift();
    let start = 0;
    const animate = (timestamp : number) => 
    {
      if (!start) start = timestamp;
        const elapsed = (timestamp - start);
      const percentage = Math.min(parseFloat(progressPercent), (elapsed / duration) * parseFloat(progressPercent));
      setDisplayedProgress(percentage);
      if (elapsed < duration) 
      {
        requestAnimationFrame(animate);
      }
      else 
      {
        setDisplayedProgress(parseFloat(progressPercent)); // Snap to final value
      }
    };
    requestAnimationFrame(animate);
    
  }, [progressPercent, duration, toggleBetweenPercentValue]);
  const strokeDashoffset = Math.max(0, CIRCUMFERENCE - (displayedProgress / 100) * CIRCUMFERENCE);




   function handleHorizontalShift()
   {
     if(toggleBetweenPercentValue) // Percent being shown
     {
       if(parseFloat(progressPercent) < 10)
         setHorizontalShift(18);
       else if (10 <= parseFloat(progressPercent) && parseFloat(progressPercent) < 100)
         setHorizontalShift(6);
       else if (parseFloat(progressPercent) >= 100)
         setHorizontalShift(-8);
         
       console.log('ilkikrbeansd');

     }
     else if(!toggleBetweenPercentValue) // Absolute value being shown
     {
       const tempString = parseFloat(progressValue).toFixed(1) + progressValue.substring(progressValue.indexOf(' '));
       console.log(text + ' ' + tempString + ' ' + tempString.length);


       if(tempString.length == 3)
         setHorizontalShift(35);
       else if (tempString.length == 4)
         setHorizontalShift(10);
       else if (tempString.length == 5)
         setHorizontalShift(0);
       else if (tempString.length == 6)
         setHorizontalShift(-16);
       else if (tempString.length == 7)
         setHorizontalShift(-33);
      console.log('ihatemylife');
     }


   }





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
   handleHorizontalShift();
   console.log('this is a test' + toggleBetweenPercentValue);
 }

 function handleMouseEnter()
 {
   textColor = '#93fab1';
   setDisplayedHoverColor(textColor);
 }

 function handleMouseLeave()
 {
   textColor = '#44cf6c';
   setDisplayedHoverColor(textColor);
 }





 
  
  //horizontalShift = (strokeDashoffset != 0 ? 8 : -4); 






  return (
    <svg
      width={size}
      height={size}
      viewBox="-26.75 -26.75 267.5 267.5"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleSwitch}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: 'rotate(-90deg)' }}
    >
      <circle
        r={RADIUS}
        cx="107"
        cy="107"
        fill="transparent"
        stroke={bgStrokeColor}
        strokeWidth={strokeWidth - 3}
      />
      <circle
        r={RADIUS}
        cx="107"
        cy="107"
        fill="transparent"
        stroke={displayedHoverColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={strokeDashoffset} 
        style={{
          transition: 'stroke-dashoffset 0.1s linear',
        }}
      />
      <text className='progressText' 
        x={horizontalShift} 
        y="102"
        fill={displayedHoverColor}
        fontSize="52"
        fontWeight="bold"
        transform="rotate(90 73 124)"
        style={{
          cursor: displayedHoverColor == '#93fab1' ? 'pointer' : 'default', 
        }}

             >
        {toggleBetweenPercentValue ? `${Math.round(displayedProgress)}%` : (progressValue == '0g' || text == 'Calories' ? progressValue : (parseFloat(progressValue).toFixed(1) + progressValue.substring(progressValue.indexOf(' ') + 1)))}
      </text>
      <text className='progressText'
        x={xAxis}
        y={yAxis}
        fill={displayedHoverColor}
        fontSize={fontSize}
        fontWeight="bold"
        transform="rotate(90 73 124)"
             > 
        {text} 
      </text>
    </svg>
  );
};

export default CircularProgress;

