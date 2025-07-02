import { useEffect, useState } from 'react';

const RADIUS = 109;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircularProgress = ({ progress = 0, duration = 300,
size = '212', strokeColor = '#44cf6c', bgStrokeColor = '#dedede',
strokeWidth = 12, textColor = '#44cf6c', fontSize = 52, text=""
}) => {
 


  const [displayedProgress, setDisplayedProgress] = useState(0);

  /*progress = 0,
  size = 214,
  strokeColor = "#6bdba7",
  bgStrokeColor = "#dedede",
  strokeWidth = 12,
  textColor = "#6bdba7",
  fontSize = 52,*/

  useEffect(() => 
  {
    let start = any;
    const animate = (timestamp : number) => 
    {
      if (!start) start = timestamp;
        const elapsed = (timestamp - start);
      const percentage = Math.min(progress, (elapsed / duration) * progress);
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


 const strokeDashoffset = Math.max(
  0,
  CIRCUMFERENCE - (displayedProgress / 100) * CIRCUMFERENCE
);
  
  const horizontalShift = (strokeDashoffset != 0 ? 10 : -5); 
  /*const strokeDashoffset =
    CIRCUMFERENCE - (displayedProgress / 100) * CIRCUMFERENCE;*/

  return (
    <svg
      width={size}
      height={size}
      viewBox="-26.75 -26.75 267.5 267.5"
      xmlns="http://www.w3.org/2000/svg"
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
        stroke={strokeColor}
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
        fill="#44cf6c"
        fontSize="52"
        fontWeight="bold"
        transform="rotate(90 73 124)"
             >
        {`${Math.round(displayedProgress)}%`}
      </text>
      <text className='progressText'
        x="0"
        y="125"
        fill={textColor}
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
// translate(0, -210)"
/*   x="10"
        y="108"
        fill="#44cf6c"
        fontSize="52"
        fontWeight="bold"
        transform="rotate(90 73 124)"*/
