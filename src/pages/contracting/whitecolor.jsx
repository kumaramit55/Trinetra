import React from "react";

export default function WhiteCollarStaffing() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 fw-bold text-primary">White Collar Staffing Solutions</h1>

      <p className="fs-5 text-secondary mb-4">
        Our White Collar Staffing services connect your business with skilled professionals in administrative, managerial, and technical roles. We specialize in matching qualified candidates who bring expertise, professionalism, and a commitment to your company’s success.
      </p>

      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <img
            src="/images/white-collar-staffing.jpg"
            alt="White collar professionals at work"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", minHeight: "300px", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Why Choose Our White Collar Staffing?</h3>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">
              <strong>Expert Talent Pool:</strong> Access candidates experienced in business, finance, IT, marketing, HR, and more.
            </li>
            <li className="list-group-item">
              <strong>Thorough Screening:</strong> We ensure alignment of skills, experience, and cultural fit for lasting hires.
            </li>
            <li className="list-group-item">
              <strong>Tailored Staffing Solutions:</strong> Flexible contract, temp-to-perm, and permanent placement options to match your needs.
            </li>
            <li className="list-group-item">
              <strong>Efficient Process:</strong> Save time and resources with our streamlined recruitment and onboarding services.
            </li>
            <li className="list-group-item">
              <strong>Industry Expertise:</strong> Recruiters specialized by sector ensure quality candidate matches.
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-5">
        <h3 className="mb-3">Industries We Serve</h3>
        <p>
          We provide white collar staffing solutions across sectors such as finance, healthcare, technology, education, legal services, and corporate services, helping you build a strong and capable workforce.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="mb-3">Our Staffing Process</h3>
        <ol className="fs-5">
          <li><strong>Requirement Gathering:</strong> Understanding your position needs, qualification requirements, and company culture.</li>
          <li><strong>Candidate Sourcing:</strong> Utilizing a broad network and sourcing channels to find qualified applicants.</li>
          <li><strong>Assessment & Interviewing:</strong> Detailed screening to evaluate skills, experience, and fit.</li>
          <li><strong>Placement & Follow-up:</strong> Coordinating offers and onboarding, with ongoing support to ensure success.</li>
        </ol>
      </section>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-5">
          Contact Us for White Collar Staffing
        </button>
      </div>
    </div>
  );
}
