import React from 'react';


const whoWeArePoints = [
  "Trusted manpower and compliance experts focused on measurable business outcomes.",
  "Regulatory guidance that simplifies labor law requirements and license management.",
  "Integrated staffing and liaisoning services for smoother operations across sectors.",
  "Reliable support for renewals, approvals, and long-term compliance continuity.",
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
