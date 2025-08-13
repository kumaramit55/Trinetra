import React from "react";
import InfoBox from "../../Components/elements/infobox";
import { FaUserTie, FaLaptopCode, FaGlobe, FaFileInvoiceDollar, FaCogs } from "react-icons/fa";


function AboutUs() {
  return (
    <div className="aboutus-container">
      <section className="aboutus-section bg-danger">
        <div className="aboutus-flex">
          <blockquote className="aboutus-quote">
            “It takes 20 years to build a reputation and five minutes to ruin
            it. If you think about that, You’ll do things differently.”
          </blockquote>
          <img
            src="src/assets/images/about-us.jpg"
            alt="About Us"
            className="aboutus-img"
          />
        </div>

        <div className="aboutus-flex mt-4">
          <img
            src="src/assets/images/about-us.jpg"
            alt=""
            className="aboutus-img-large"
          />
          <div>
            <h3 className="aboutus-heading">
              Connecting Businesses with Exceptional Talent
            </h3>
            <p className="aboutus-text">
              For over 2 decades, Buzzworks has been instrumental in changing
              lives and transforming businesses by connecting the right people
              with the right job opportunities. With a focus on advancing human
              capital, we help global companies find the right people, enhance
              their productivity and thereby improve profitability.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutus-flex aboutus-cert">
        <img
          src="src/assets/images/cerficaties.png"
          alt=""
          className="aboutus-cert-img"
        />
        <p className="aboutus-cert-text">
          Our journey began with a simple yet profound belief: People are the
          heart and soul of every organization. In an ever-evolving job market,
          finding the right talent can be a challenge but it is also the key to
          success. With this belief as our guiding star, we set out to create a
          company to bridge the gap between businesses and talent. With a humble
          beginning in 2001 from a small office in Chennai, today, we are an ISO
          9001:2015 certified company, with offices across Chennai, Mumbai,
          Bengaluru, Hyderabad, Gurugram, Navi Mumbai, Kochi, Coimbatore and an
          international hub in Dubai. With a current turnover of 450cr+, we aim
          to reach 1000 cr+ turnover in the coming 3 years. All our businesses
          have defined processes and a responsive and performance-driven team to
          back up our clients & help them reach their business goals.
        </p>
      </section>

      <section className="aboutus-flex my-4">
        <img
          src="src/assets/images/cardbox1 (1).jpg"
          alt=""
          className="aboutus-offering-img"
        />
        <div>
       
          <div className="aboutus-offerings custom-card">
               <h3 className="aboutus-main-title">Our Offering</h3>
            <InfoBox
              IconComponent={FaUserTie}
              title="Contract Staffing (Blue collar, white collar)"
            />
            <InfoBox IconComponent={FaLaptopCode} title="IT Staffing" />
            <InfoBox IconComponent={FaGlobe} title="Global Placements" />
            <InfoBox
              IconComponent={FaFileInvoiceDollar}
              title="Payroll Operation"
            />
            <InfoBox IconComponent={FaCogs} title="Software Solutions" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
