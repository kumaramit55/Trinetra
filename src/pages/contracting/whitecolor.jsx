import React from "react";
import {
  FaUserTie,
  FaBriefcase,
  FaUserCheck,
  FaRegClock,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

export default function WhiteCollarStaffing() {
  return (
    <div className="white-collar-page">
      {/* Hero Section */}
      <div
        className="hero-banner d-flex align-items-center text-white"
        style={{
          background: "url('/images/white-collar-hero.jpg') center/cover no-repeat",
          minHeight: "60vh",
          position: "relative",
        }}
      >
        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold display-4">White Collar Staffing Solutions</h1>
          <p className="fs-5 mt-3 mb-4">
            Helping organizations hire skilled professionals across finance, HR, 
            IT, engineering, healthcare, and management — ensuring the right 
            talent drives your company’s success.
          </p>
          <button className="btn btn-light btn-lg px-5 fw-semibold">
            Find Your Next Hire
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 30, 65, 0.65)",
          }}
        ></div>
      </div>

      {/* Key Benefits Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-5">
          Why Partner With Us?
        </h2>
        <div className="row g-4">
          {[
            {
              icon: <FaUserTie />,
              title: "Expert Professionals",
              text: "Access top talent in business, finance, IT, HR, legal, and operations management.",
            },
            {
              icon: <FaUserCheck />,
              title: "Rigorous Screening",
              text: "We assess skills, qualifications, and culture-fit for high retention and long-term impact.",
            },
            {
              icon: <FaRegClock />,
              title: "Faster Hiring",
              text: "Streamlined recruitment reduces time-to-hire and ensures seamless onboarding.",
            },
            {
              icon: <FaBriefcase />,
              title: "Flexible Solutions",
              text: "Temporary, contract-to-hire, or permanent positions designed around your needs.",
            },
          ].map((item, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <div className="text-primary mb-3" style={{ fontSize: "2.5rem" }}>
                  {item.icon}
                </div>
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About + Process (Alternating layout) */}
      <section className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="/images/whitecollar1.jpg"
              alt="Corporate professionals"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 ps-md-5 mt-4 mt-md-0">
            <h3 className="fw-bold">Recruiting the Right Leaders & Talent</h3>
            <p className="text-secondary fs-5">
              White collar roles demand not only skill but also leadership qualities,
              problem-solving ability, and cultural alignment. Our recruiters 
              specialize in sourcing candidates who align with your organization’s 
              goals and environment.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src="/images/whitecollar2.jpg"
              alt="Recruitment process"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 pe-md-5 mt-4 mt-md-0 order-md-1">
            <h3 className="fw-bold">Our Staffing Process</h3>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item p-3">
                <strong>Requirement Gathering:</strong> Understand your job role, 
                qualifications, and organizational culture.
              </li>
              <li className="list-group-item p-3">
                <strong>Targeted Sourcing:</strong> Use networks, platforms, and 
                headhunting to reach the right candidates.
              </li>
              <li className="list-group-item p-3">
                <strong>Evaluation & Interviewing:</strong> Assess technical skills, 
                experience, leadership quality, and communication.
              </li>
              <li className="list-group-item p-3">
                <strong>Offer & Onboarding:</strong> Smooth transition from hire 
                to integration, with follow-ups post-hiring.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Industries We Serve</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "Finance & Banking",
              "Healthcare",
              "Technology & IT",
              "Education",
              "Legal Services",
              "Corporate Services",
              "Consulting",
            ].map((industry, idx) => (
              <span
                key={idx}
                className="badge rounded-pill bg-primary fs-6 px-4 py-2 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-white text-center py-5 mt-5"
        style={{
          background: "linear-gradient(90deg, #002b80, #0047b3)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Hire the Right Talent with Confidence</h2>
          <p className="fs-5 mb-4">
            Let us help you build a high-performing team of professionals 
            who add real value to your organization.
          </p>
          <button className="btn btn-light btn-lg px-5 fw-semibold">
            Talk to Our Recruiters
          </button>
        </div>
      </section>
    </div>
  );
}
