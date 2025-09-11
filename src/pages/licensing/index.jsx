export default function Licensing() {
  return (
    <div className="container my-5 px-3">
      {/* Header with Intro */}
      <section className="row align-items-center gy-5">
        {/* Left column (text) */}
        <div className="col-12 col-lg-6">
          <h1 className="hero-heading mb-3">
            Licensing & Accreditation
          </h1>
          <p className="hero-text">
            Trinetra operates as a fully licensed and accredited manpower solutions provider committed to the highest standards of legal compliance, ethical business practices, and operational transparency. Our licenses and certifications affirm our dedication to serving clients with integrity and professionalism.
          </p>

          {/* Credentials List */}
          <ul className="list-unstyled fs-6 fs-md-5 lh-lg mb-4">
            <li>
              <strong className="text-dark">Business Registration:</strong>{" "}
              <span className="text-muted ms-2">
                Govt. of India | Reg No.{" "}
                <span className="text-primary">123456789</span>
              </span>
            </li>
            <li>
              <strong className="text-dark">Agency License:</strong>{" "}
              <span className="text-muted ms-2">
                Manpower License <span className="text-primary">MSL-2025-9876</span>
              </span>
            </li>
            <li>
              <strong className="text-dark">ISO Certification:</strong>{" "}
              <span className="text-muted ms-2">ISO 9001:2015 (QMS)</span>
            </li>
            <li>
              <strong className="text-dark">GSTIN:</strong>{" "}
              <span className="text-muted ms-2">29ABCDE1234F1Z5</span>
            </li>
            <li>
              <strong className="text-dark">Labor Board Approval:</strong>{" "}
              <span className="text-muted ms-2">Labor Board LB-778899</span>
            </li>
          </ul>

          <a
            href="/docs/license-certificate.pdf"
            className="btn btn-outline-primary btn-lg"
            download
          >
            Download License Certificate
          </a>
        </div>

        {/* Right column (image) */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="images/adam-winger-0NFDoeXGJso-unsplash.webp"
            alt="Licensing Certificate"
            className="img-fluid rounded shadow"
            loading="lazy"
          />
        </div>
      </section>

      {/* Transparency & Trust Section */}
      <section className="bg-white shadow rounded-4 p-4 p-md-5 my-5">
        <h2 className="section-title custom-h2">
          Our Commitment to Transparency & Ethics
        </h2>
        <p className="fs-6 fs-md-5 mb-3 text-center text-md-start mx-auto" style={{ maxWidth: "720px" }}>
          We understand that trust is foundational to any successful partnership. That's why we maintain comprehensive transparency about our credentials, processes, and compliance. Our clients benefit from:
        </p>

        <ul className="fs-6 fs-md-5 list-group list-group-flush mb-4 mx-auto" style={{ maxWidth: "720px" }}>
          <li className="list-group-item">
            <strong>Regular Independent Audits:</strong> Third-party audits verify our adherence to labor laws and operational standards.
          </li>
          <li className="list-group-item">
            <strong>Robust Data Privacy Measures:</strong> We implement strict protocols to protect client and candidate information.
          </li>
          <li className="list-group-item">
            <strong>Equal Opportunity & Fair Labor:</strong> We strictly follow anti-discrimination policies and promote equitable hiring.
          </li>
          <li className="list-group-item">
            <strong>Clear Complaint Resolution:</strong> Simple and transparent procedures to address any grievances swiftly.
          </li>
        </ul>

        <p className="fs-6 fs-md-5 text-center text-md-start mx-auto" style={{ maxWidth: "720px" }}>
          Our ongoing investment in compliance and ethical standards ensures that your business is supported by a reliable, principled, and legally sound staffing partner — building lasting peace of mind and long-term value.
        </p>
      </section>
    </div>
  );
}
