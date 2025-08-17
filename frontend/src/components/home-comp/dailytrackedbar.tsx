import {useState, useEffect} from 'react';

/*type Props =
{
  switchToScanner: () => void;
}*/



const BarProgress = ({ text='', condRoundLineColor='#44cf6c', progress=0, duration=500 }) => {

    const [displayedProgress, setDisplayedProgress] = useState(0);
    
    useEffect(() =>
    {
	  console.log(condRoundLineColor); //for typescrdipt bullshit
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

    //const strokeDashOffset = Math.floor(((displayedProgress - 0) * (100 - 0) / (90 - 10) + 10));
    const strokeDashOffset = ((displayedProgress - 0) / (100 - 0)) * (95 -5) + 5; 

 

  return (
    <svg 
        width='100%'
        height='100%'
        viewBox="0 46 100 5"
        xmlns="http://www.w3.org/2000/svg"
        style={{'margin' : '0% auto'}}
    >

    <line // Background Container Line
          x1='5'
          y1= '50'
          x2='95'
          y2='50'
          stroke='#dedede'
          strokeWidth='1.5'
          strokeLinecap="round"
        />
    <line // Main Progress Fill Line 
          x1='5'
          y1= '50'
          x2={strokeDashOffset}
          y2='50'
          stroke='#44cf6c'
          strokeWidth='1.5'
          strokeLinecap="round"
        />
    <text className='statText'
          x="7"
          y="48.5"
          fill="#f1ffe7"
          fontSize="15%"
          fontWeight="bold"
         >
         {text}
    </text>
    <text className='progressText'
        x="85"
        y="48.5"
        fill="#f1ffe7"
        fontSize="15%"
        fontWeight="bold"
       >
       {displayedProgress}% 
    </text> 


           </svg>














  );
};

export default BarProgress;





/*
             <line // Conditional Rounded Line Single Side
          x1='-950'
          y1= '105'
          x2='-949'
          y2='105'
          stroke={condRoundLineColor}
          strokeWidth='28'
          strokeLinecap="round"
        />
*/



