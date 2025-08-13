import React, { useState, useEffect } from "react";

const cards = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" }
];

function Tray3DSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tray3d">
      {cards.map((card, idx) => {
        let className = "tray-card";
        let style = {};
        // Center (active)
        if (idx === active) {
          className += " active";
          style = { transform: "scale(1.08) rotateY(0deg)", zIndex: 2 };
        } 
        // Previous
        else if (idx === (active - 1 + cards.length) % cards.length) {
          className += " prev";
          style = { transform: "scale(0.9) rotateY(-22deg)", zIndex: 1 };
        } 
        // Next
        else if (idx === (active + 1) % cards.length) {
          className += " next";
          style = { transform: "scale(0.9) rotateY(22deg)", zIndex: 1 };
        } 
        // Others
        else {
          className += " other";
          style = { transform: "scale(0.8)", opacity: 0.4, zIndex: 0 };
        }
        return (
          <div className={className} style={style} key={card.id}>
            <h3>{card.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Tray3DSlider;
