import React from "react";
import { NavLink } from "react-router-dom";

export default function ConsultationAudit() {
  const benefits = [
    {
      icon: "🛡️",
      title: "Regulatory Compliance",
      description:
        "Avoid costly penalties by ensuring your HR and payroll processes meet all current labor laws and regulations.",
    },
    {
      icon: "⚠️",
      title: "Risk Assessment",
      description:
        "Identify and address compliance gaps and operational risks to safeguard your workforce management.",
    },
    {
      icon: "⚙️",
      title: "Process Optimization",
      description:
        "Streamline recruitment, onboarding, and payroll workflows for enhanced organizational efficiency.",
    },
    {
      icon: "📊",
      title: "Tailored Audits",
      description:
        "Receive customized audits designed specifically for your industry and company size.",
    },
    {
      icon: "💡",
      title: "Expert Guidance",
      description:
        "Leverage actionable insights from experienced auditors to continuously improve your operations.",
    },
  ];

  const services = [
    {
      title: "HR Policy Review",
      desc: "Comprehensive assessment of your HR policies to ensure compliance and effectiveness.",
    },
    {
      title: "Payroll Compliance",
      desc: "Detailed payroll audits to ensure accurate tax calculations and labor law adherence.",
    },
    {
      title: "Employee Records",
      desc: "Verification of contracts, onboarding, and documentation for regulatory alignment.",
    },
    {
      title: "Risk & Gap Analysis",
      desc: "Identify gaps in compliance and provide actionable solutions.",
    },
  ];

  const steps = [
    { step: "01", title: "Initial Consultation", desc: "We discuss your requirements and outline the audit scope." },
    { step: "02", title: "Data Collection", desc: "Gather HR, payroll, and compliance documentation." },
    { step: "03", title: "Audit & Analysis", desc: "Detailed review of policies, records, and processes." },
    { step: "04", title: "Action Plan", desc: "Provide a report with findings, risks, and recommendations." },
    { step: "05", title: "Follow-Up", desc: "Support in implementing improvements and ongoing compliance." },
  ];

  return (
    <div className="container my-5 px-3 px-md-5">
      {/* Hero Section */}
      <section className="hero-section mb-5 rounded-4 shadow-lg overflow-hidden position-relative">
        <img
          src="/images/scott-graham-5fNmWej4tAA-unsplash.jpg"
          alt="Consultation and Audit"
          className="w-100 h-100 object-fit-cover hero-img"
        />
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white px-4 px-md-5">
          <h1 className="display-4 fw-bold mb-4">
            Consultation & Audit{" "}
            <span className="text-primary">Services</span>
          </h1>
          <p className="lead mb-4 fw-normal">
            Navigate complex labor regulations, manage compliance risks, and
            optimize workforce processes with our expert consultation and audit
            tailored for sustained success.
          </p>
          <NavLink to="/talk-to-us">
          <button className="btn btn-primary btn-lg px-5 rounded-pill shadow">
            Book Now
          </button>
          </NavLink>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-5">
        <h2 className="text-center fw-bold mb-5 display-6">
          What Sets Us Apart
        </h2>
        <div className="row g-4">
          {benefits.map(({ icon, title, description }, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card benefit-card h-100 border-0 rounded-4 shadow-sm text-center p-4">
                <div className="benefit-icon mb-3">{icon}</div>
                <h5 className="fw-bold mb-3">{title}</h5>
                <p className="text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-5">
        <h2 className="text-center fw-bold mb-5 display-6">
          Our Services Include
        </h2>
        <div className="row g-4">
          {services.map((s, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card h-100 service-card text-center p-4 shadow-sm border-0 rounded-4">
                <h5 className="fw-bold mb-3 text-primary">{s.title}</h5>
                <p className="text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mb-5">
        <h2 className="text-center fw-bold mb-5 display-6">How We Work</h2>
        <div className="timeline">
          {steps.map((s, idx) => (
            <div key={idx} className="timeline-step">
              <div className="timeline-number">{s.step}</div>
              <div className="timeline-content">
                <h5 className="fw-bold">{s.title}</h5>
                <p className="text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-primary text-white rounded-4 shadow-lg">
        <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
        <p className="mb-4">
          Contact us today to book your consultation and take the first step
          towards hassle-free compliance and optimized HR processes.
        </p>
        <NavLink to="/talk-to-us">
        <button className="btn btn-light btn-lg px-5 rounded-pill shadow">
          Contact Us
        </button>
        </NavLink>
      </section>
    </div>
  );
}
