import React from 'react';


const whoWeArePoints = [
  "We are industry experts dedicated to delivering tailored manpower and compliance solutions that empower businesses to thrive.",
  "Our team combines deep regulatory knowledge with a pragmatic approach to streamline workforce management and legal adherence.",
  "Committed to transparent communication and fostering long-term client partnerships built on trust and results.",
  "Leveraging technology and industry insights to offer innovative, seamless processes that reduce risks and enhance operational efficiency.",
  "Passionate about supporting diverse sectors by providing scalable staffing services aligned with evolving market demands.",
  "Driven by integrity, professionalism, and a relentless focus on compliance excellence for sustainable business growth.",
  "Our adaptive strategies ensure clients stay ahead of regulatory changes while maintaining optimal workforce productivity.",
  "Recognized for delivering end-to-end solutions that integrate manpower supply, legal compliance, and advisory services.",
  "Focused on empowering organizations with expertise that simplifies complexities of labor laws and workforce challenges.",
  
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
