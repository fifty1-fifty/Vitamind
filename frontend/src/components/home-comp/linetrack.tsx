import {useState, useEffect} from 'react';

const BarProgress = ({ 
text='',
condRoundLineColor='#44cf6c',
progressPercent = '',
progressValue = '',
duration=500
}) => {

    const [displayedProgress, setDisplayedProgress] = useState(0);
    //const [displayedHoverColor, setDisplayedHoverColor] = useState('boobsd');
    const [toggleBetweenPercentValue, setToggleBetweenPercentValue] = useState(true);

    
    useEffect(() =>
    {
      let start = 0; 
      const animate = (timestamp : number) => 
      {
        if (!start) start = timestamp;
          const elapsed = (timestamp - start);
        const percentage = Math.floor(Math.min(parseFloat(progressPercent), (elapsed / duration) * parseFloat(progressPercent)));
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
    }, [progressPercent, duration]);

    const strokeDashOffset = Math.floor(((displayedProgress - 0) * (1158 - -950) / (100 - 0) + -950));



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
     }

     function handleMouseEnter()
     {
       //textColor = '#93fab1';
       //setDisplayedHoverColor(textColor);
     }

     function handleMouseLeave()
     {
       //textColor = '#44cf6c';
       //setDisplayedHoverColor(textColor);
     }



 

  return (
    <svg 
        width='975'
        height='110'
        viewBox="-26.75 -26.75 267.5 267.5"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line // Background Container Line
          x1='-950'
          y1= '105'
          x2='1158'
          y2='105'
          stroke='#dedede'
          strokeWidth='28'
          strokeLinecap="round"
        />
        <line // Main Progress Fill Line
          x1='-950' 
          y1= '105'
          x2={strokeDashOffset <= 1158 ? strokeDashOffset : 1158}
          y2='105'
          stroke='#44cf6c'
          strokeWidth='30'
          strokeLinecap="butt"
        />
        <line // Conditional Rounded Line Single Side
          x1='-950'
          y1= '105'
          x2='-949'
          y2='105'
          stroke={condRoundLineColor}
          strokeWidth='28'
          strokeLinecap="round"
        />
        <text className='statText'
          x="-930"
          y="85"
          fill="#f1ffe7"
          fontSize="45"
          fontWeight="bold"
         >
         {text}
      </text>
      <text className='progressText'
        x="1090"
        y="85"
        fill="#f1ffe7"
        fontSize="45"
        fontWeight="bold"
        onClick={handleSwitch}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        /*style={{
          : displayedHoverColor == '#93fab1' ? 'pointer' : 'default', 
        }}*/

        
       >
       {toggleBetweenPercentValue ? `${Math.round(parseFloat(progressPercent))}%` : progressValue}
      </text>


    </svg>














  );
};

export default BarProgress;
