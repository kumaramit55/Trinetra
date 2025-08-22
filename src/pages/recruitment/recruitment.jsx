import React from "react";

export default function Recruitment() {
  return (
    <>
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem", lineHeight: "1.2" }}>
              Expert Recruitment Solutions<br />
              Aligned to Your Workplace Needs
            </h1>
            <p className="fs-5 text-secondary">
              Empower your business growth with access to top talent, transparent hiring processes, and tailored recruitment services designed just for you.
            </p>
          </div>
          <div className="col-lg-5">
            <img
              src="\images\sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg"
              alt="Online Interview"
              className="img-fluid rounded shadow-sm"
              style={{ minHeight: "260px", objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>

        {/* Message Box */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10 col-xl-8">
            <div className="position-relative">
              <div
                style={{
                  backgroundColor: "#ff6b2c",
                  height: "48px",
                  borderRadius: "1rem 1rem 0 0",
                }}
              />
              <div
                className="shadow-lg p-4 bg-white rounded-bottom"
                style={{
                  marginTop: "-32px",
                  position: "relative",
                }}
              >
                <p className="mb-0 fs-5" style={{ lineHeight: "1.7", color: "#444" }}>
                  In an evolving business landscape, the ability to efficiently attract and retain skilled professionals is key to staying ahead. Our team specializes in sourcing diverse talent for offices, technical operations, and skilled trades. We are committed to understanding your company's requirements and delivering recruitment solutions that help you excel in today's market. Partner with us to solve your hiring needs and build a future-ready workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards Section */}
      <section className=" py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Temporary Workforce",
                imgSrc: "/images/workforce.jpg",
                altText: "Temporary Workforce",
                description: "Flexible hiring solutions for short-term needs. Access a pool of qualified contract staff and let us handle payroll and admin, so you can focus on growing your business.",
              },
              {
                title: "Permanent Employees",
                imgSrc: "/images/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg",
                altText: "Permanent Employees",
                description: "From sourcing to onboarding, we help you build a steady, skilled workforce. Save time and resources with our proven recruitment processes for long-term hires.",
              },
              {
                title: "Apprentice Programs",
                imgSrc: "images/jason-goodman-Ti7LQ0r-zy4-unsplash.jpg",
                altText: "Apprentice Programs",
                description: "Launch and manage customized apprenticeship programs for your enterprise. Bridge the skills gap and create talent pipelines to power your future growth.",
              },
            ].map(({ title, imgSrc, altText, description }, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 shadow-lg border-0 rounded">
                  <img
                    src={imgSrc}
                    alt={altText}
                    className="card-img-top rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title  fw-bold text-black">{title}</h5>
                    <p className="card-text text-light flex-grow-1 text-black">{description}</p>
                    <a href="#" className="btn btn-outline-light mt-3 align-self-start">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RPO Partner Section */}
      <div className="container py-5" style={{ background: "#eaf6fa" }}>
        <div className="row align-items-center gy-4">
          <div className="col-md-5">
            <div className="card shadow-lg border-0 rounded-4 h-100">
              <img
                src="images\sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg"
                alt="Handshake with documents"
                className="card-img-top rounded-4"
                style={{ objectFit: "cover", height: "320px" }}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card shadow-lg border-0 rounded-4 px-4 py-5 h-100">
              <h4 className="fw-bold text-primary mb-3">
                Buzzworks – The Perfect RPO Partner for Your Business
              </h4>
              <p className="fs-5 mb-0" style={{ lineHeight: "1.8", color: "#2c3e50" }}>
                We take pride in positioning ourselves as the ideal Recruitment Process Outsourcing (RPO) partner for businesses of all sizes and industries. Our unparalleled commitment to understanding the unique needs and objectives of our clients sets us apart.<br /><br />
                With a team of seasoned professionals armed with extensive industry knowledge, we seamlessly integrate into your organization to streamline and optimize your entire recruitment process. We offer a comprehensive suite of services, from talent acquisition and candidate screening to onboarding and workforce planning and management.<br /><br />
                What makes us the perfect RPO partner is our agility and adaptability, ensuring that we tailor our solutions to match the evolving demands of your business. We are committed to building lasting, strategic relationships that drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
