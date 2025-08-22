import React from "react";

export default function TemporaryRecruitment() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 fw-bold text-primary">Temporary Recruitment Solutions</h1>

      <p className="fs-5 text-secondary mb-4">
        In today’s fast-paced business environment, flexibility and speed are key to meeting changing workforce demands. 
        Our Temporary Recruitment services provide your company with access to qualified professionals on short notice, tailored to your project or seasonal needs.
      </p>

      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <img
            src="/images/workforce.jpg"
            alt="Temporary workforce at work"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", minHeight: "300px", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Why Choose Our Temporary Staffing Services?</h3>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">
              <strong>Agility:</strong> Quickly scale your workforce up or down based on demand without long recruitment cycles.
            </li>
            <li className="list-group-item">
              <strong>Cost Efficiency:</strong> Reduce payroll and administrative overhead by leveraging our vetted temporary staff.
            </li>
            <li className="list-group-item">
              <strong>Skilled Talent Pool:</strong> Access a wide network of pre-screened professionals ready to contribute immediately.
            </li>
            <li className="list-group-item">
              <strong>Compliance & Payroll Handling:</strong> We manage all legal and administrative aspects, so you focus on your core business.
            </li>
            <li className="list-group-item">
              <strong>Customized Solutions:</strong> From entry-level to specialized roles, we tailor staffing to fit your unique requirements.
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-5">
        <h3 className="mb-3">Industries We Serve</h3>
        <p>
          Our temporary recruitment services cater to a variety of industries including manufacturing, logistics, retail, information technology, healthcare, and administrative support. Whatever your sector, our experienced recruiters identify and onboard talented individuals quickly.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="mb-3">How Our Temporary Recruitment Works</h3>
        <ol className="fs-5">
          <li><strong>Needs Assessment:</strong> We collaborate to understand your temporary staffing requirements and timelines.</li>
          <li><strong>Candidate Sourcing:</strong> Our recruiters identify candidates from our extensive pool matching your skill and experience needs.</li>
          <li><strong>Screening and Selection:</strong> Rigorous background checks, skills assessments, and interviews to ensure quality hires.</li>
          <li><strong>Placement & Onboarding:</strong> We coordinate all necessary documentation and facilitate a smooth start.</li>
          <li><strong>Ongoing Support:</strong> Continuous management and feedback to ensure the performance meets your expectations.</li>
        </ol>
      </section>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-5">
          Contact Us to Hire Temporary Staff
        </button>
      </div>
    </div>
  );
}
