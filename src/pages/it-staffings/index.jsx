import React, { lazy, Suspense } from "react";
import { itstaffingsData } from "../../data/data";
import { Card, Col, Row } from "react-bootstrap";
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
    {
      title: "Visa & Immigration Support",
      alt: "Visa Support",
      src: "images/visa support.webp",
    },
  ];

  return (
    <div className="container">
      <Row xs={1} sm={2} lg={4} className="g-4">
        {cardsData.map(({ title, alt, src }) => (
          <Col key={title}>
            <Suspense fallback={<div>Loading card...</div>}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={src}
                  alt={alt}
                  loading="lazy"
                  height="200px"
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
              </Card>
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
      <div className="homepage-container">
        {/* image section */}
        <img
          src="/images/IT-STAFF.webp"
          alt="IT Solutions"
          className="img-style"
          loading="lazy"
          width="1200"
          height="675"
        />

        <div className="content">
          <h1>
            Precision IT <span className="gradient-text">Talent</span> Solutions{" "}
            <span className="gradient-text">Empowering Sustainable </span>
            Business Excellence
          </h1>
          <p
            className="text-lg fw-medium lh-base"
            style={{ fontFamily: "inherit" }}
          >
            Delivering strategic IT staffing solutions meticulously aligned with
            your organizational goals, enabling seamless project execution and
            sustainable operational success.
          </p>
        </div>
      </div>

      <h1 className="section-title">Our Tailored Staffing Solutions</h1>
      <div className="container my-4">
        <div className="row g-4">
          {itstaffingsData.map(({ title, text }) => (
            <div className="col-md-4" key={title}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
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

      <div className="why-choose-section py-5 text-center">
        <h1 className="section-title mb-4">Why Choose Trinetra</h1>

        <WhyChooseSection />
      </div>
    </div>
  );
}

export default ItStaffings;
