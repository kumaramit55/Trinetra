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
  "Dedicated to creating value by aligning human capital solutions with our clients’ unique business goals and vision."
];


function Whoweare() {
  return (
    <div className='mt-4'>
      <h1 className="customHeading">Who we are</h1>
      <div className="dFlex">
        <img 
          src="/images/who we are.webp" 
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
