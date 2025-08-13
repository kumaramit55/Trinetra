import React from 'react';


const whoWeArePoints = [
  "We are a passionate team of innovative developers and designers.",
  "Committed to delivering high-quality and scalable web solutions.",
  "Focused on enhancing user experience with cutting-edge technology.",
  "Driven by creativity, collaboration, and customer satisfaction.",
  "Experienced in building responsive and accessible digital products.",
  "Dedicated to continuous learning and adopting modern best practices.",
  "Striving to make businesses grow with impactful online presence.",
  "Advocates of clean, maintainable, and efficient code.",
  "Providing personalized services tailored to each client’s needs.",
  "Inspired by challenges and motivated to solve complex problems."
];

function Whoweare() {
  return (
    <div>
      <h1 className="customHeading">Who we are</h1>
      <div className="dFlex">
        <img 
          src="src/assets/images/who we are (2).jpg" 
          alt="who we are"  
          loading="lazy" 
        />
        <div className="textContainer">
          <ul className="list">
            {whoWeArePoints.map((point, index) => (
              <li key={index} className="listItem">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
