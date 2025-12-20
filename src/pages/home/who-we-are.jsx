import React from 'react';


const whoWeArePoints = [
  "Industry experts delivering tailored manpower and compliance solutions that empower businesses to thrive with trusted expertise.",
  "Deep regulatory knowledge combined with innovative technology to streamline workforce management and reduce compliance risks.",
  "End-to-end solutions integrating staffing services, legal compliance, and advisory expertise across diverse sectors.",
  "Commitment to transparency, professionalism, and long-term partnerships that drive sustainable business growth.",
  "Adaptive strategies ensuring clients stay ahead of market demands while maintaining optimal workforce productivity.",
];


function Whoweare() {
  return (
 <div className="who-we-are mt-4">
  <h2 className="section-title custom-h2 ">Who we are</h2>
  <div className="who-we-are__content">
    
    <img 
      src="/images/who we are.webp" 
      alt="Who we are"  
      loading="lazy" 
      className="who-we-are__image"
      
    />
    <div className="who-we-are__text">
      <ul className="who-we-are__list">
        {whoWeArePoints.map((point, index) => (
          <li key={index} className="who-we-are__list-item">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );
}

export default Whoweare;
