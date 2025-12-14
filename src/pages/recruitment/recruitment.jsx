import React from "react";
import {
  FaBolt,
  FaDollarSign,
  FaUsers,
  FaClipboardCheck,
  FaCogs,
  FaBullseye,
  FaSearch,
  FaIndustry,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function RecruitmentSolutions() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section
  className="text-white position-relative"
  style={{
    background: "linear-gradient(135deg, #00264d 0%, #003d80 100%)",
    padding: "130px 0 110px",
  }}
>
  {/* subtle background layer */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08), transparent 40%)",
      pointerEvents: "none",
    }}
  />

  <div className="container position-relative">
    <div className="row justify-content-center">
      <div className="col-lg-9 text-center">

        {/* Eyebrow */}
        <span className="text-uppercase small fw-semibold text-light opacity-75">
          End-to-End Recruitment Services
        </span>

        {/* Main Heading */}
        <h1 className="display-4 fw-bold mt-3 mb-4">
          Recruitment Solutions
          <span className="d-block text-info">
            Built for Speed, Quality & Growth
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="fs-5 text-light mx-auto mb-5" style={{ maxWidth: 760 }}>
          Flexible recruitment models designed to support both short-term
          workforce requirements and long-term organizational growth, with
          structured processes and reliable execution.
        </p>

        {/* CTA */}
        <NavLink to="/talk-to-us">
          <button className="btn btn-light btn-lg px-5 fw-semibold">
            Talk to Us
          </button>
        </NavLink>

      </div>
    </div>
  </div>
</section>


      {/* ================= TEMPORARY RECRUITMENT ================= */}
      <section className="container my-5">

        <h2 className="fw-bold mb-3">
          Temporary Recruitment Solutions
        </h2>
        <p className="fs-5 text-secondary mb-4">
          Speed, flexibility, and quality are essential to meet your short-term
          staffing needs. Our Temporary Recruitment services connect you with
          skilled professionals, available immediately to support project
          deadlines, seasonal spikes, or unexpected requirements.
        </p>

        {/* BENEFITS */}
        <div className="row g-4 text-center mb-5">
          {[
            {
              icon: <FaBolt size={40} className="text-primary" />,
              title: "Rapid Deployment",
              desc: "Get qualified temporary staff ready to work at short notice.",
            },
            {
              icon: <FaDollarSign size={40} className="text-primary" />,
              title: "Cost-Effective",
              desc: "Reduce overheads by scaling workforce according to demand.",
            },
            {
              icon: <FaUsers size={40} className="text-primary" />,
              title: "Diverse Talent Pool",
              desc: "Access specialists from entry-level to highly technical roles.",
            },
            {
              icon: <FaClipboardCheck size={40} className="text-primary" />,
              title: "Compliance & Payroll",
              desc: "We manage legal, administrative, and payroll tasks seamlessly.",
            },
            {
              icon: <FaCogs size={40} className="text-primary" />,
              title: "Tailored Solutions",
              desc: "Flexible staffing designed to fit your operational needs.",
            },
          ].map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                {item.icon}
                <h5 className="mt-3">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE + CONTENT */}
        <div className="row align-items-center g-4 mb-5">
          <div className="col-md-6">
            <img
              src="images\job-interview-candidate-selection-employment.jpg"
              alt="Temporary workforce"
              className="img-fluid rounded shadow"
              style={{ minHeight: 300, objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">How Our Temporary Recruitment Works</h3>
            <ol className="fs-5">
              <li><strong>Requirement Analysis:</strong> Define staffing needs and timelines.</li>
              <li><strong>Targeted Candidate Search:</strong> Identify right-fit candidates quickly.</li>
              <li><strong>Screening & Evaluation:</strong> Background and skill assessments.</li>
              <li><strong>Seamless Onboarding:</strong> Documentation and orientation.</li>
              <li><strong>Ongoing Support:</strong> Continuous management and feedback.</li>
            </ol>
          </div>
        </div>

      
        

      </section>

      {/* ================= PERMANENT RECRUITMENT ================= */}
      <section className="container my-5">

        <h2 className="fw-bold mb-3">
          Permanent Recruitment Solutions
        </h2>
        <p className="fs-5 text-secondary mb-4">
          Our Permanent Recruitment services connect you with top-tier talent
          aligned with your company’s vision, culture, and long-term goals.
        </p>

        {/* BENEFITS */}
        <div className="row g-4 text-center mb-5">
          {[
            {
              icon: <FaBullseye size={40} className="text-primary" />,
              title: "Expert Candidate Matching",
              desc: "Ensuring perfect alignment with skills and culture.",
            },
            {
              icon: <FaSearch size={40} className="text-primary" />,
              title: "Streamlined Hiring",
              desc: "Efficient processes to reduce time and cost.",
            },
            {
              icon: <FaIndustry size={40} className="text-primary" />,
              title: "Industry Specialization",
              desc: "Recruiters specialized in your sector.",
            },
            {
              icon: <FaUser size={40} className="text-primary" />,
              title: "Ongoing Support",
              desc: "Long-term partnership beyond placement.",
            },
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="p-4 border rounded shadow-sm h-100">
                {item.icon}
                <h5 className="mt-3">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE + CONTENT */}
        <div className="row align-items-center g-4 mb-5">
          <div className="col-md-6 order-md-2">
            <img
              src="/images/permanent job.webp"
              alt="Permanent recruitment"
              className="img-fluid rounded shadow"
              style={{ minHeight: 300, objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h3 className="mb-3">Our Recruitment Process</h3>
            <ol className="fs-5">
              <li><strong>Requirement Analysis:</strong> Define job specifications.</li>
              <li><strong>Candidate Sourcing:</strong> Extensive talent search.</li>
              <li><strong>Screening & Interviews:</strong> Thorough assessments.</li>
              <li><strong>Offer & Onboarding:</strong> Smooth transition.</li>
              <li><strong>Follow-up & Retention:</strong> Post-placement engagement.</li>
            </ol>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <section className="mb-5">
          <h3 className="text-center mb-4">What Our Clients Say</h3>
          <div className="row g-4">
            {[
              {
                name: "Sarah J.",
                role: "HR Manager",
                feedback:
                  "The talent we got through their recruitment process has been outstanding. Efficient and professional.",
              },
              {
                name: "Michael B.",
                role: "Operations Head",
                feedback:
                  "They understood our needs perfectly and delivered candidates who fit our culture seamlessly.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="p-4 bg-light rounded shadow-sm h-100">
                  <p className="fst-italic">"{item.feedback}"</p>
                  <h6 className="mb-0">{item.name}</h6>
                  <small className="text-muted">{item.role}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
<section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">
            Need the Right Workforce?
          </h2>
          <p className="fs-5 mb-4">
            One partner. One execution model. Complete staffing support.
          </p>
          <NavLink to="/talk-to-us">
            <button className="btn btn-light btn-lg px-5 fw-semibold">
              Talk to Us
            </button>
          </NavLink>
        </div>
      </section>

      </section>

    </div>
  );
}
