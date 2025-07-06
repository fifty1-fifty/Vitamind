/*import React, { useRef, useEffect, useState } from 'react';
import DailyTrackBar from '../home-comp/dailytrackedbar/'

const TrackBarGrouping = () =>
{
 const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.9 } // Trigger when 10% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} style={{ minHeight: '300px', border: '1px solid gray' }}>
      {isVisible ? (
        <div>
            <DailyTrackBar />
            <DailyTrackBar />
            <DailyTrackBar />
            <DailyTrackBar />
            <DailyTrackBar />


        </div>
      ) : (
        <p>Scroll down to load content...</p>
      )}
    </div>
  );
};


export default TrackBarGrouping;
*/
