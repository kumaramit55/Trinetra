import React from "react";
import { FaTools, FaUserShield, FaTruck, FaBuilding, FaUserCheck, FaBolt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../assets/css/contracting.css";

export default function BlueCollarStaffing() {
  return (
    <div className="blue-collar-page">
      {/* Hero Section */}
      <div
        className="hero-banner d-flex align-items-center text-white"
        style={{
          background: "url('/images/pexels-sergey-sergeev-2153675005-32845692.jpg') center/cover no-repeat",
          minHeight: "100vh",
          position: "relative",
          padding:"100px"
        
        }}
      >
        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold display-4">Reliable Blue Collar Staffing</h1>
          <p className="fs-5 mt-3 mb-4">
            Building your workforce shouldn’t be complicated. We deliver skilled, 
            dependable blue-collar professionals to keep your projects moving — 
            safely, efficiently, and on time.
          </p>
          <button className="btn btn-light btn-lg px-5 fw-semibold">
            Get Started Today
          </button>
        </div>
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 38, 77, 0.75)",
          }}
        ></div>
      </div>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-5">Why Businesses Trust Us</h2>
        <div className="row g-4">
          {[
            {
              icon: <FaTools />,
              title: "Skilled Talent Pool",
              text: "From welders and electricians to drivers and operators, we provide certified, skilled manpower.",
            },
            {
              icon: <FaUserShield />,
              title: "Compliance First",
              text: "All workers are verified, safety-trained, and compliant with labor & industry regulations.",
            },
            {
              icon: <FaBolt />,
              title: "Rapid Deployment",
              text: "Urgent project? We deploy qualified staff quickly to minimize downtime and delays.",
            },
            {
              icon: <FaTruck />,
              title: "Flexible Contracts",
              text: "Hire staff for a day, a season, or long-term — scalable solutions for every business need.",
            },
          ].map((item, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <div className="text-primary mb-3" style={{ fontSize: "2.5rem" }}>
                  {item.icon}
                </div>
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating About Section */}
      <section className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="/images/blue collar job.webp"
              alt="Workers at site"
              height="300px"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 ps-md-5 mt-4 mt-md-0">
            <h3 className="fw-bold">Connecting Businesses with Workforce</h3>
            <p className="text-secondary fs-5">
              We bridge the gap between businesses and hardworking professionals by 
              offering customized staffing solutions. Whether it’s industrial, construction, 
              warehousing, or automotive, we understand the challenges and deliver the right workforce.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src="/images/pexels-edmond-dantes-4344860.jpg"
              alt="Industrial staffing"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 pe-md-5 mt-4 mt-md-0 order-md-1">
            <h3 className="fw-bold">End-to-End Staffing Process</h3>
            <p className="text-secondary fs-5">
              From requirement analysis and sourcing to documentation, onboarding, 
              and ongoing support — we ensure a seamless hiring experience. You focus 
              on your business, we take care of the workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Industries We Serve</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "Manufacturing",
              "Construction",
              "Warehousing",
              "Automotive",
              "Energy",
              "Facilities Management",
              "Logistics",
            ].map((industry, idx) => (
              <span
                key={idx}
                className="badge rounded-pill bg-primary fs-6 px-4 py-2 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-white text-center py-5 mt-5"
        style={{
          background: "linear-gradient(90deg, #004080, #0066cc)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Looking for Reliable Staff?</h2>
          <p className="fs-5 mb-4">
            Get access to pre-verified, safety-trained workers who are ready to 
            contribute from day one.
          </p>
          <NavLink to="/talk-to-us">
          <button className="btn btn-light btn-lg px-5 fw-semibold">
            Contact Us Now
          </button>
            </NavLink>
        </div>
      </section>
    </div>
  );
}
