//import {useState} from 'react';




const BarProgress = /*({ progress = 0, duration = 300,
strokeColor = 'white', bgStrokeColor = 'gray',
text=''})*/ () => {

 // const [displayedProgress, setDisplayedProgress] = useState(0);





  return (
    <svg
        width='1000'
        height='120'
        viewBox="-26.75 -26.75 267.5 267.5"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
          x1='-950'
          y1= '105'
          x2='1158'
          y2='105'
          stroke='white'
          strokeWidth='30'
          strokeLinecap="round"
        />
        <text className='progressText'
          x="-500"
          y="85"
          fill="white"
          fontSize="52"
          fontWeight="bold"
         >
        'big nuts'
      </text>
      <text className='progressText'
        x="-50"
        y="85"
        fill="white"
        fontSize="15"
        fontWeight="bold"
       >
        hello beans
      </text>


    </svg>














  );
};

export default BarProgress;
