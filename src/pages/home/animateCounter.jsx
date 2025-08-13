import React, { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target = 1000, duration = 1800,content="" }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.4 } // Trigger when 40% in view
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer && ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const step = () => {
      start += 1;
      setCount(start);
      if (start < target) {
        setTimeout(step, stepTime);
      }
    };
    step();
    // Only count once per page load/scroll-in
    // eslint-disable-next-line
  }, [visible]);

  return (
    <div ref={ref} className="counter-box">
      <span className="counter-number ">{count}</span>
      <p>{content}</p>
    </div>
  );
}

export default AnimatedCounter;
