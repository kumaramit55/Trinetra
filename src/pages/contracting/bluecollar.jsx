import React from "react";

export default function BlueCollarStaffing() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 fw-bold text-primary">Blue Collar Staffing Solutions</h1>

      <p className="fs-5 text-secondary mb-4">
        Blue Collar Staffing refers to the recruitment and placement of workers skilled in manual labor across various industries such as manufacturing, construction, logistics, maintenance, and more. These roles often involve hands-on work that is essential to operations and production.
      </p>

      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <img
            src="/images/workforce.jpg"
            alt="Blue collar workforce at a site"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", minHeight: "300px", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Understanding Blue Collar Staffing</h3>
          <p>
            Blue collar jobs typically involve physical work and specialized skills related to operating machinery, performing maintenance, assembly line work, installation, or technical trades. These roles are critical to the infrastructure and function of many industries.
          </p>
          <p>
            Our comprehensive Blue Collar Staffing services connect companies with qualified workers for temporary, permanent, or contract positions, ensuring you maintain productivity and meet operational demands effectively.
          </p>
        </div>
      </div>

      <section className="mt-5">
        <h3 className="mb-3">Key Benefits of Our Blue Collar Staffing</h3>
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item">
            <strong>Wide Talent Network:</strong> Access a vast pool of skilled laborers including welders, electricians, machine operators, drivers, and technicians.
          </li>
          <li className="list-group-item">
            <strong>Flexible Workforce Solutions:</strong> Scale your workforce to align with project phases, seasonal spikes, or unexpected demands.
          </li>
          <li className="list-group-item">
            <strong>Compliance & Safety:</strong> We ensure all candidates meet safety standards and industry regulations, minimizing your risk and exposure.
          </li>
          <li className="list-group-item">
            <strong>Quick Deployment:</strong> Reduce downtime with fast, efficient recruitment and onboarding processes.
          </li>
          <li className="list-group-item">
            <strong>Cost-Effective Staffing:</strong> Optimize your labor costs with flexible contracts and payroll services handled by us.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h3 className="mb-3">Industries Supported</h3>
        <p>
          We serve a broad range of sectors including manufacturing, construction, warehousing and logistics, automotive, energy, and facilities management, delivering reliable blue collar talent tailored to your operational needs.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="mb-3">Our Blue Collar Staffing Process</h3>
        <ol className="fs-5">
          <li><strong>Requirement Analysis:</strong> Understand your specific job demands, certifications, and timelines.</li>
          <li><strong>Candidate Sourcing and Screening:</strong> Identify, screen, and verify candidates for skills, safety training, and experience.</li>
          <li><strong>Placement and Onboarding:</strong> Coordinate start dates and documentation to ensure seamless integration.</li>
          <li><strong>Ongoing Support:</strong> Monitor worker performance and provide replacement or support as needed.</li>
        </ol>
      </section>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-5">
          Contact Us for Blue Collar Staffing
        </button>
      </div>
    </div>
  );
}
