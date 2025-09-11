import React from "react";
import { FaBullseye, FaSearch, FaIndustry, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function PermanentRecruitment() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <section className="text-center py-5 bg-light rounded">
        <h1 className="display-4 fw-bold mb-3">
          Build Your Dream Team for{" "}
          <span className="text-primary">Long-Term Success</span>
        </h1>
        <p className="lead mb-4 text-secondary">
          Our Permanent Recruitment services connect you with top-tier talent
          perfectly aligned with your company’s vision and culture.
        </p>
      <NavLink to="/talk-to-us">
        <button type="button" className="btn btn-primary btn-lg px-5">
          Contact Us Today
        </button>
        </NavLink>
      </section>

      {/* Benefits Section */}
      <section className="mt-5">
        <h2 className="fw-bold mb-4 text-center">Why Partner with Us?</h2>
        <div className="row g-4 text-center">
          {[
            {
              icon: <FaBullseye size={48} className="text-primary" />,
              title: "Expert Candidate Matching",
              desc: "We ensure perfect matches for your job needs and culture.",
            },
            {
              icon: <FaSearch size={48} className="text-primary" />,
              title: "Streamlined Hiring",
              desc: "Save time and reduce costs with our efficient processes.",
            },
            {
              icon: <FaIndustry size={48} className="text-primary" />,
              title: "Industry Specialization",
              desc: "Recruiters specialized in your sector's unique needs.",
            },
            {
              icon: <FaUser size={48} className="text-primary" />,
              title: "Ongoing Support",
              desc: "Long-term success with our dedicated client care.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div key={idx} className="col-md-3">
              <div className="p-4 border rounded shadow-sm h-100">
                {icon}
                <h5 className="mt-3">{title}</h5>
                <p className="text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content & Image */}
      <section className="mt-5 row align-items-center g-4">
        <div className="col-md-6 order-md-2">
          <img
            src="/images/permanent job.webp"
            alt="Professional interview"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", minHeight: 300, width: "100%" }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="mb-3">Why Choose Our Permanent Staffing Services?</h3>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">
              <strong>Top-Quality Candidates:</strong> Comprehensive screening
              ensures right skills and cultural fit.
            </li>
            <li className="list-group-item">
              <strong>End-to-End Support:</strong> From sourcing to onboarding,
              we manage the hiring effortlessly.
            </li>
            <li className="list-group-item">
              <strong>Industry Expertise:</strong> Specialized recruiters provide
              talent perfectly tailored for your sector.
            </li>
            <li className="list-group-item">
              <strong>Cost & Time Savings:</strong> Efficient processes reduce
              hiring overhead and speed up placement.
            </li>
            <li className="list-group-item">
              <strong>Long-Term Partnership:</strong> Continuous engagement for
              evolving workforce needs.
            </li>
          </ul>
        </div>
      </section>

      {/* Industries Served */}
      <section className="mt-5">
        <h3>Industries We Serve</h3>
        <p className="fs-5 text-secondary">
          Experienced across IT, healthcare, finance, manufacturing, retail,
          and more, we bring industry knowledge and market insights to identify
          the best talent for your domain.
        </p>
      </section>

      {/* Recruitment Process */}
      <section className="mt-4">
        <h3>Our Recruitment Process</h3>
        <ol className="fs-5">
          <li>
            <strong>Requirement Analysis:</strong> Define detailed job specs and
            cultural fit.
          </li>
          <li>
            <strong>Candidate Sourcing:</strong> Utilize extensive networks and
            sourcing tools.
          </li>
          <li>
            <strong>Screening & Interviewing:</strong> Thorough assessments and
            reference checks.
          </li>
          <li>
            <strong>Offer & Onboarding:</strong> Smooth integration and offer
            negotiation.
          </li>
          <li>
            <strong>Follow-up & Retention:</strong> Post-placement engagement for
            satisfaction.
          </li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="mt-5">
        <h3 className="mb-4 text-center">What Our Clients Say</h3>
        <div className="row g-4">
          {[
            {
              name: "Sarah J.",
              role: "HR Manager",
              feedback:
                "The talent we got through their recruitment process has been outstanding. Efficient, professional, and insightful.",
            },
            {
              name: "Michael B.",
              role: "Operations Head",
              feedback:
                "They understood our needs perfectly and delivered candidates who fit our culture seamlessly.",
            },
          ].map(({ name, role, feedback }, idx) => (
            <div key={idx} className="col-md-6">
              <div className="p-4 bg-light rounded shadow-sm">
                <p className="fst-italic">"{feedback}"</p>
                <h5 className="mt-3 mb-1">{name}</h5>
                <small className="text-muted">{role}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Call To Action */}
      <div className="text-center mt-5 pb-5">
        <NavLink to="/talk-to-us">
        <button className="btn btn-primary btn-lg px-5">
Hire Now
        </button>
        </NavLink>
      </div>
    </div>
  );
}
