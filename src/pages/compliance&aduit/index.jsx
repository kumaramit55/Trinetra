import React from "react";

export default function ConsultationAudit() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 fw-bold text-primary">Consultation & Audit Services</h1>

      <p className="fs-5 text-secondary mb-4">
        Our expert Consultation and Audit services help your organization navigate complex labor regulations, manage compliance risks, and optimize workforce processes. Whether you’re looking to review your current practices or proactively improve operations, our experienced compliance consultants and auditors deliver actionable insights for sustained business success.
      </p>

      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <img
            src="public\images\scott-graham-5fNmWej4tAA-unsplash.jpg"
            alt="Workplace consultation and audit discussion"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", minHeight: "300px", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Why Choose Our Consultation & Audit Services?</h3>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">
              <strong>Regulatory Compliance:</strong> Ensure adherence to labor laws, payroll standards, and workplace regulations.
            </li>
            <li className="list-group-item">
              <strong>Risk Assessment:</strong> Identify gaps, potential risks, and non-compliance areas in your HR and staffing systems.
            </li>
            <li className="list-group-item">
              <strong>Process Optimization:</strong> Refine your recruitment, onboarding, payroll, and workforce management processes for efficiency.
            </li>
            <li className="list-group-item">
              <strong>Tailored Audits:</strong> Get customized audits addressing sector-specific and company-specific requirements.
            </li>
            <li className="list-group-item">
              <strong>Expert Guidance:</strong> Benefit from actionable recommendations and step-by-step compliance roadmaps.
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-5">
        <h3 className="mb-3">Our Consultation & Audit Services Include:</h3>
        <ul className="fs-5">
          <li>Labor Law Compliance Reviews</li>
          <li>Payroll System Audits</li>
          <li>Contract Employee Documentation Checks</li>
          <li>HR Policy Evaluation</li>
          <li>Industrial Relations & Legal Consultation</li>
          <li>Employee Benefits & Statutory Filings</li>
          <li>Process Improvement Consulting</li>
        </ul>
      </section>

      <section className="mt-4">
        <h3 className="mb-3">How We Work</h3>
        <ol className="fs-5">
          <li><strong>Initial Assessment:</strong> Understand your current compliance and operational status.</li>
          <li><strong>Onsite/Remote Audit:</strong> Conduct rigorous reviews of processes, documents, and systems.</li>
          <li><strong>Gap Analysis:</strong> Identify areas for improvement or correction.</li>
          <li><strong>Actionable Report:</strong> Deliver clear findings and recommend corrective actions.</li>
          <li><strong>Follow-up Consultation:</strong> Support you through implementation and future compliance updates.</li>
        </ol>
      </section>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-5">
          Book a Consultation or Audit
        </button>
      </div>
    </div>
  );
}
