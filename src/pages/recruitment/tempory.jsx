import React from "react";
import { FaBolt, FaDollarSign, FaUsers, FaClipboardCheck, FaCogs } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function TemporaryRecruitment() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <section className="text-center py-5 bg-light rounded">
        <h1 className="display-4 fw-bold mb-3 text-primary">Temporary Recruitment Solutions</h1>
        <p className="lead mb-4 text-secondary">
          Speed, flexibility, and quality are essential to meet your short-term staffing needs. Our Temporary Recruitment services connect you with skilled professionals, available immediately to support your project deadlines, seasonal spikes, or unexpected requirements.
        </p>
       <NavLink to="/talk-to-us">
        <button type="button" className="btn btn-primary btn-lg px-5">
          Contact Us Today
        </button>
        </NavLink>
      </section>

      {/* Why Choose Us with Icons */}
      <section className="mt-5">
        <h2 className="fw-bold mb-4 text-center">Why Choose Our Temporary Staffing Services?</h2>
        <div className="row g-4 text-center">
          {[
            {
              icon: <FaBolt size={48} className="text-primary" />,
              title: "Rapid Deployment",
              desc: "Get qualified temporary staff ready to work at short notice."
            },
            {
              icon: <FaDollarSign size={48} className="text-primary" />,
              title: "Cost-Effective",
              desc: "Reduce overheads by scaling workforce according to demand."
            },
            {
              icon: <FaUsers size={48} className="text-primary" />,
              title: "Diverse Talent Pool",
              desc: "Access specialists from entry-level to highly technical roles."
            },
            {
              icon: <FaClipboardCheck size={48} className="text-primary" />,
              title: "Compliance & Payroll",
              desc: "We manage legal, administrative, and payroll tasks seamlessly."
            },
            {
              icon: <FaCogs size={48} className="text-primary" />,
              title: "Tailored Solutions",
              desc: "Flexible staffing designed to fit your unique operational needs."
            }
          ].map(({ icon, title, desc }, idx) => (
            <div key={idx} className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                {icon}
                <h5 className="mt-3">{title}</h5>
                <p className="text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content & Image Section */}
      <section className="mt-5 row align-items-center g-4">
        <div className="col-md-6">
          <img
            src="/images/temporary employee.webp"
            alt="Temporary workforce at work"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", minHeight: 300, width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Industries We Serve</h3>
          <p className="fs-5 text-secondary">
            Our temporary staffing solutions support industries such as manufacturing, logistics, retail, IT, healthcare, and administrative services. Our recruiters specialize in quickly sourcing and onboarding talent tailored to your industry demands.
          </p>

          <h3 className="mb-3 mt-4">How Our Temporary Recruitment Works</h3>
          <ol className="fs-5">
            <li><strong>Requirement Analysis:</strong> Collaborative planning to define staffing needs and timelines.</li>
            <li><strong>Targeted Candidate Search:</strong> Leveraging a broad network to identify right-fit candidates rapidly.</li>
            <li><strong>Rigorous Screening & Evaluation:</strong> Comprehensive background and skill assessments.</li>
            <li><strong>Seamless Onboarding:</strong> Managing documentation and orientation for a quick start.</li>
            <li><strong>Ongoing Support & Feedback:</strong> Continuous management to ensure performance and satisfaction.</li>
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center mt-5 mb-5">
        <NavLink to="/talk-to-us">
        <button type="button" className="btn btn-primary btn-lg px-5">
          Contact Us to Hire Temporary Staff
        </button>
        </NavLink>
      </div>
    </div>
  );
}
