import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/consultation-audit.css";

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
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We discuss your requirements and outline the audit scope.",
    },
    {
      step: "02",
      title: "Data Collection",
      desc: "Gather HR, payroll, and compliance documentation.",
    },
    {
      step: "03",
      title: "Audit & Analysis",
      desc: "Detailed review of policies, records, and processes.",
    },
    {
      step: "04",
      title: "Action Plan",
      desc: "Provide a report with findings, risks, and recommendations.",
    },
    {
      step: "05",
      title: "Follow-Up",
      desc: "Support in implementing improvements and ongoing compliance.",
    },
  ];

  return (
    <div>
      {/* ================= HERO ================= */}
      <section
        className="text-white"
        style={{
          background: "linear-gradient(135deg, #00264d, #003d80)",
          padding: "110px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center px-md-5 ">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Consultation & Audit Services
              </h1>
              <p className="fs-5 text-light mb-4">
                Navigate complex labor regulations, manage compliance risks, and
                optimize workforce processes with expert consultation and audit
                services designed for long-term stability.
              </p>
              <NavLink to="/talk-to-us">
                <button className="btn btn-light btn-lg px-5 fw-semibold">
                  Book Consultation
                </button>
              </NavLink>
            </div>

            <div className="col-lg-5 ">
              <img
                src="images/kelly-sikkema-xoU52jUVUXA-unsplash.jpg"
                alt="Consultation and Audit"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="container my-5 px-md-5">
        <h2 className="fw-bold mb-4 text-center">What Sets Us Apart</h2>
        <div className="row g-4">
          {benefits.map(({ icon, title, description }, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="h-100 p-4 border rounded bg-white shadow-sm text-center">
                <div className="text-primary fs-2 mb-3 d-flex justify-content-center">
                  {icon}
                </div>
                <h6 className="fw-semibold">{title}</h6>
                <p className="text-secondary small mb-0">{description }</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="container my-5 px-md-5">
        <h2 className="fw-bold mb-4 text-center">Our Services Include</h2>
        <div className="row g-4">
          {services.map((s, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="h-100 p-4 border rounded shadow-sm">
                <h6 className="fw-semibold">{s.title}</h6>
                <p className="text-secondary mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="container my-5 px-md-5">
        <h2 className="fw-bold mb-4 text-center">How We Work</h2>
        <div className="row g-4">
          {steps.map((s, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="h-100 p-4 border rounded shadow-sm">
                <span className="fw-bold text-primary px-2">{s.step}</span>
                <h6 className="fw-semibold mt-2">{s.title}</h6>
                <p className="text-secondary mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-primary text-white text-center py-5 mt-5">
        <div className="container">
          <h2 className="fw-bold mb-3 text-center">Ready to Get Started?</h2>
          <p className="fs-5 mb-4">
            Contact us today to book your consultation and take the first step
            towards hassle-free compliance and optimized HR processes.
          </p>
          <NavLink to="/talk-to-us">
            <button className="btn btn-light btn-lg px-5 fw-semibold">
              Contact Us
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
