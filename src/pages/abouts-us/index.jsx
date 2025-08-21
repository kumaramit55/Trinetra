import React from "react";

import { FaUserTie, FaLaptopCode, FaGlobe, FaFileInvoiceDollar, FaCogs } from "react-icons/fa";
import InfoBox from "../../Components/elements/infobox";

function AboutUs() {
  return (
    <div className="aboutus-container bg-light">

      {/* Quote & intro section */}
      <section className="container py-5">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6">
            <blockquote className="aboutus-quote p-4 mb-3 fs-5">
              <span style={{ fontStyle: "italic", fontWeight: "500" }}>
                “It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, You’ll do things differently.”
              </span>
            </blockquote>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="aboutus-img img-fluid rounded shadow"
              style={{ maxWidth: "410px", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Company mission/history */}
      <section className="container py-4">
        <div className="row align-items-center gy-3">
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <img
              src="/images/about-us.jpg"
              alt=""
              className="aboutus-img-large img-fluid rounded shadow"
            />
          </div>
          <div className="col-12 col-lg-7">
            <h3 className="aboutus-heading fw-bold mb-3">
              Connecting Businesses with Exceptional Talent
            </h3>
            <p className="aboutus-text fs-6">
              For over 2 decades, Buzzworks has been instrumental in changing lives and transforming businesses by connecting the right people with the right job opportunities. With a focus on advancing human capital, we help global companies find the right people, enhance their productivity and thereby improve profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & journey */}
      <section className="container py-4">
        <div className="row justify-content-center align-items-center gy-3">
          <div className="col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0">
            <img
              src="/images/cerficaties.png"
              alt=""
              className="aboutus-cert-img img-fluid rounded"
              style={{ maxWidth: "280px" }}
            />
          </div>
          <div className="col-12 col-md-7">
            <p className="aboutus-cert-text mb-0 fs-6">
              Our journey began with a simple yet profound belief: People are the heart and soul of every organization. In an ever-evolving job market, finding the right talent can be a challenge but it is also the key to success. With this belief as our guiding star, we set out to create a company to bridge the gap between businesses and talent. With a humble beginning in 2001 from a small office in Chennai, today, we are an ISO 9001:2015 certified company, with offices across Chennai, Mumbai, Bengaluru, Hyderabad, Gurugram, Navi Mumbai, Kochi, Coimbatore and an international hub in Dubai. With a current turnover of 450cr+, we aim to reach 1000 cr+ turnover in the coming 3 years. All our businesses have defined processes and a responsive and performance-driven team to back up our clients & help them reach their business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="container py-4">
        <div className="row align-items-center gy-3">
          <div className="col-12 col-lg-5 d-flex justify-content-center mb-3 mb-lg-0">
            <img
              src="/images/cardbox1 (1).jpg"
              alt=""
              className="aboutus-offering-img img-fluid rounded shadow"
              style={{ maxWidth: "320px" }}
            />
          </div>
          <div className="col-10 col-lg-7">
            <div className=" custom-card  p-4 rounded shadow">
              <h3 className="aboutus-main-title fw-bold mb-3">Our Offering</h3>
              <div className="row gy-3 ">
                <div className="col-12 col-md-6">
                  <InfoBox IconComponent={FaUserTie} title="Contract Staffing (Blue collar, white collar)" />
                </div>
                <div className="col-12 col-md-6">
                  <InfoBox IconComponent={FaLaptopCode} title="IT Staffing" />
                </div>
                <div className="col-12 col-md-6">
                  <InfoBox IconComponent={FaGlobe} title="Global Placements" />
                </div>
                <div className="col-12 col-md-6">
                  <InfoBox IconComponent={FaFileInvoiceDollar} title="Payroll Operation" />
                </div>
                <div className="col-12">
                  <InfoBox IconComponent={FaCogs} title="Software Solutions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
