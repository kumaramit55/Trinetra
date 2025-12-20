import React, { lazy, Suspense } from "react";
import { itstaffingsData } from "../../data/data";
import { Card, Col, Row } from "react-bootstrap";

import '../../assets/css/it-staffing.css';


const InfoSections = lazy(() => import("./infosetion"));

function WhyChooseSection() {
  const cardsData = [
    {
      title: "Proven Expertise",
      alt: "Proven Expertise",
      src: "images/cardbox (2).webp",
    },
    {
      title: "Customer Support",
      alt: "Customer Support",
      src: "images/customer support.webp",
    },
    {
      title: "Payroll & Compliance Support",
      alt: "Payroll Support",
      src: "images/payroll support.webp",
    },
    
  ];

  return (
    <div className="container">
      <Row xs={1} sm={2} lg={3} className="g-4">
        {cardsData.map(({ title, alt, src }) => (
          <Col key={title}>
            <Suspense fallback={<div>Loading card...</div>}>
              <div className=" px-1 card h-100 responsive-card">
                <Card.Img
                  variant="top"
                  src={src}
                  alt={alt}
                  loading="lazy"
                  width="150px"
                  height="300px"
                />
                <div className="card-body">
                  <div className="card-heading">{title}</div>
                </div>
              </div>
            </Suspense>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function ItStaffings() {
  return (
    <div>
      <div className="it-staffing-hero">
  <div className="it-staffing-hero__image">
    <img
      src="/images/IT-STAFF.webp"
      alt="IT Solutions"
      className="img-style"
      loading="lazy"
      width="1200"
      height="675"
    />
  </div>
  <div className="it-staffing-hero__content">
    <h1 className="it-staffing-hero__title">
      Precision IT <span className="highlight">Talent Solutions</span>{" "}
      <span className="gradient-text">Empowering Sustainable </span>
      Business Excellence
    </h1>
    <p className="it-staffing-hero__description">
      Delivering strategic IT staffing solutions meticulously aligned with
      your organizational goals, enabling seamless project execution and
      sustainable operational success.
    </p>
  </div>
</div>

      <div className="staffing-section-title">
  <h2>Our Tailored Staffing Solutions</h2>
</div>
      <div className="container my-4">
     <div className="row px-1 g-4">
  {itstaffingsData.map(({ title, text }) => (
    <div className="col-12 col-sm-6 col-lg-4 " key={title}>
      <div className="card h-100 responsive-card">
        <div className="card-body">
          <h5 className="card-heading">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      <Suspense fallback={<div>Loading info sections...</div>}>
        <InfoSections />
      </Suspense>

      <div className="why-choose-section py-2 text-center mb-4">
        <h2 className="section-title custom-h2 mb-4 ">Why Choose Trinetra</h2>

        <WhyChooseSection />
      </div>
    </div>
  );
}

export default ItStaffings;
