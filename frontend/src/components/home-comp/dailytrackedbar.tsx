import {useState, useEffect} from 'react';

/*type Props =
{
  switchToScanner: () => void;
}*/



const BarProgress = ({ text='', condRoundLineColor='#44cf6c', progress=0, duration=500 }) => {

    const [displayedProgress, setDisplayedProgress] = useState(0);
    
    useEffect(() =>
    {
      let start = 0; 
      const animate = (timestamp : number) => 
      {
        if (!start) start = timestamp;
          const elapsed = (timestamp - start);
        const percentage = Math.floor(Math.min(progress, (elapsed / duration) * progress));
        setDisplayedProgress(percentage);
        if (elapsed < duration) 
        {
          requestAnimationFrame(animate);
        }
        else 
        {
          setDisplayedProgress(progress); // Snap to final value
        }
      };
      requestAnimationFrame(animate);
    }, [progress, duration]);

    const strokeDashOffset = Math.floor(((displayedProgress - 0) * (1158 - -950) / (100 - 0) + -950));


 

  return (
    <svg 
        width='1050'
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
       >
       {displayedProgress}% 
      </text>


    </svg>














  );
};

export default BarProgress;
