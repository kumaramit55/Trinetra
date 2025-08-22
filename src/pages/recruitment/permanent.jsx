import React from "react";

export default function PermanentRecruitment() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 fw-bold text-primary">Permanent Recruitment Solutions</h1>

      <p className="fs-5 text-secondary mb-4">
        Building a stable and skilled long-term workforce is essential for sustained business growth. Our Permanent Recruitment services connect you with qualified professionals who are the right fit for your company culture and objectives.
      </p>

      <div className="row g-4 align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src="/images/workforce.jpg"
            alt="Professional interview"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", minHeight: "300px", width: "100%" }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="mb-3">Why Choose Our Permanent Staffing Services?</h3>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">
              <strong>Quality Candidates:</strong> We thoroughly screen and select applicants to ensure alignment with your job requirements and culture.
            </li>
            <li className="list-group-item">
              <strong>End-to-End Support:</strong> From sourcing to onboarding, we manage the entire recruitment process efficiently.
            </li>
            <li className="list-group-item">
              <strong>Industry Expertise:</strong> Our recruiters specialize in various sectors, delivering targeted talent for your field.
            </li>
            <li className="list-group-item">
              <strong>Time and Cost Savings:</strong> Streamline hiring and reduce HR overhead with our expert recruitment process.
            </li>
            <li className="list-group-item">
              <strong>Long-Term Partnership:</strong> We build lasting relationships with clients to continuously support evolving workforce needs.
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-5">
        <h3 className="mb-3">Industries Served</h3>
        <p>
          Our permanent recruitment expertise spans IT, healthcare, finance, manufacturing, retail, and many more industries. We understand specific skill requirements and market trends for each sector to ensure you get the best talent.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="mb-3">Our Recruitment Process</h3>
        <ol className="fs-5">
          <li><strong>Requirement Analysis:</strong> Collaborate to understand detailed job descriptions, skills, and cultural fit details.</li>
          <li><strong>Candidate Search:</strong> Leverage our vast network and sourcing tools to identify suitable candidates.</li>
          <li><strong>Screening & Interviewing:</strong> Conduct comprehensive assessments, interviews, and reference checks for quality assurance.</li>
          <li><strong>Offer & Onboarding Management:</strong> Support offer negotiation and smooth integration into your company.</li>
          <li><strong>Follow-up & Feedback:</strong> Maintain communication to ensure satisfaction and retention.</li>
        </ol>
      </section>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-5">
          Reach Out for Permanent Hiring
        </button>
      </div>
    </div>
  );
}
