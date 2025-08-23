import React from "react";

export default function Licensing() {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="row align-items-center mb-5 g-4">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-primary mb-3">
            Licensing & Accreditation
          </h1>
          <p className="fs-5 text-secondary mb-2">
            We operate as a fully licensed and accredited manpower solutions provider. 
            Our credentials demonstrate our commitment to regulatory compliance and best practices in staffing and business operations.
          </p>
          <ul className="list-unstyled fs-5 mt-3">
            <li className="mb-2">
              <span className="fw-bold text-dark">Business Registration:</span> 
              <span className="ms-2 text-muted">Govt. of India | Reg No. <span className="text-primary">123456789</span></span>
            </li>
            <li className="mb-2">
              <span className="fw-bold text-dark">Agency License:</span> 
              <span className="ms-2 text-muted">Manpower License <span className="text-primary">MSL-2025-9876</span></span>
            </li>
            <li className="mb-2">
              <span className="fw-bold text-dark">ISO Certification:</span> 
              <span className="ms-2 text-muted">ISO 9001:2015 (QMS)</span>
            </li>
            <li className="mb-2">
              <span className="fw-bold text-dark">GSTIN:</span> 
              <span className="ms-2 text-muted">29ABCDE1234F1Z5</span>
            </li>
            <li className="mb-2">
              <span className="fw-bold text-dark">Labor Board Approval:</span> 
              <span className="ms-2 text-muted">Labor Board LB-778899</span>
            </li>
          </ul>
          <div className="mt-4">
            <a 
              href="/docs/license-certificate.pdf" 
              className="btn btn-outline-primary btn-lg"
              download
            >
              Download License Certificate
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-end mt-4 mt-lg-0">
          <div className="card border-0 shadow-lg rounded-4 w-100">
            <img
              src="public\images\adam-winger-0NFDoeXGJso-unsplash.jpg"
              alt="Licensing Certificate"
              className="img-fluid rounded-4"
              style={{ maxHeight: "320px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Compliance Disclosure */}
      <div className="bg-light border rounded-4 p-4 mt-5">
        <h4 className="fw-semibold text-primary mb-3">
          Regulatory Disclosure & Code of Ethics
        </h4>
        <p className="mb-2 text-dark">
          As a manpower and compliance provider, our services strictly conform to all applicable local, state, and federal labor laws. We continuously update our legal documentation and credentials to guarantee full transparency and client peace of mind. Copies of our key certificates are always available on request.
        </p>
        <ul className="text-secondary">
          <li>Regular third-party audits</li>
          <li>Data privacy and protection protocols</li>
          <li>Strict adherence to anti-discrimination and fair labor practices</li>
          <li>Clear complaints and escalation procedures</li>
        </ul>
      </div>
    </div>
  );
}
