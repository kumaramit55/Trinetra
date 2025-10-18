import React, { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target = 1000, duration = 1000, content = "", showPlus = false }) {
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
        { threshold: 0.4 }
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
    const stepTime = Math.max(10, Math.floor(duration / target));

    const step = () => {
      start += 1;
      setCount(start);
      if (start < target) {
        setTimeout(step, stepTime);
      }
    };
    step();
  }, [visible, duration, target]);

  return (
    <div ref={ref} className="counter-box text-center">
      <span className="counter-number">
        {count}
        {showPlus && count >= target ? '+' : ''}
      </span>
      <p>{content}</p>
    </div>
  );
}

export default AnimatedCounter;
