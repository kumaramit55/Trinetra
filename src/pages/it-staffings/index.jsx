import React, { lazy, Suspense } from "react";

const InfoSections = lazy(() => import("./infosetion"));
const ImageCard = lazy(() => import("../home/imageCard"));

function ItStaffings() {
  return (
    <div>
      <div className="homepage-container">
        {/* image section */}
        <img
          src="images\IT SOLUTIONS (1).webp"
          alt="IT Solutions"
          className="img-style"
          loading="lazy"
          width={1200}
          height={675}
        />

        {/* content section */}
        <div className="content">
          <h1>
            Unlock Your Team's with <span className="gradient-text">Potential</span>
            <br />
            IT Staffing Solutions
          </h1>
          <p className="text-lg fw-medium lh-base" style={{ fontFamily: "inherit" }}>
            In the fast-paced world of technology, finding the right talent can be a daunting task,
            and we are here to make it easier for you. At Buzzworks IT staffing solutions, we understand 
            the challenges you face in building a high-performing IT team. Let us be your strategic staffing
            solutions partner in overcoming the pain points of IT staffing so you can focus on what you do best – driving innovation and growth.
          </p>
        </div>
      </div>

      <h1 className="custom-heading">Our Tailored Staffing Solutions</h1>
      <div className="container my-4">
        <div className="row g-4">

          {[
            {
              title: "Permanent Recruitment",
              text: "We understand the urgency of filling permanent IT positions. Our streamlined staffing solutions are designed to minimise time-to-hire without compromising on the quality of candidates. This efficiency translates to cost savings for your organisation."
            },
            {
              title: "Rate Card Model",
              text: "Embrace flexibility with our Rate Card model. Pay for the actual hours worked on your project, allowing you to scale your team up or down based on project requirements. This model is ideal for dynamic projects where requirements evolve over time."
            },
            {
              title: "Payroll Outsourcing",
              text: "With years of experience in the IT staffing industry, we have an in-depth understanding of the nuances and complexities involved in managing payroll for IT professionals. Our expertise ensures accuracy, compliance, and efficiency in every aspect of payroll outsourcing."
            },
            {
              title: "Temp Staffing & Recruitment",
              text: "Our temporary staffing and recruitment solutions are designed to provide cost-effective alternatives to hiring full-time employees for short-term needs. You can scale your team up or down based on project demands, optimizing your budget without compromising on quality."
            },
            {
              title: "Hire, Train, Deploy Model (HTD)",
              text: "Struggling to find professionals with the exact skills you need? Leverage our Hire, Train, Deploy model. We identify talented individuals, provide them with specialized training tailored to your project, and seamlessly integrate them into your team."
            },
            {
              title: "Global Staffing",
              text: "We work closely with your team to understand your global IT staffing requirements, project goals, and cultural considerations. Leveraging our worldwide network, we actively source candidates with the specific skills and expertise needed for your global IT placements."
            }
          ].map(({ title, text }) => (
            <div className="col-md-4" key={title}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{text}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Suspense fallback={<div>Loading info sections...</div>}>
        <InfoSections />
      </Suspense>

      <div className="why-choose-section py-5 text-center">
        <h1 className="custom-heading mb-4">Why Choose Trinetra</h1>

        <div className="container">
          <div className="row g-4">
            {[
              { title: "Proven Expertise", alt: "Proven Expertise", src: "/images/cardbox (2).jpg" },
              { title: "Customer Support", alt: "Customer Support", src: "/images/cardbox (2).jpg" },
              { title: "Payroll & Compliance Support", alt: "Payroll Support", src: "/images/cardbox (2).jpg" },
              { title: "Visa & Immigration Support", alt: "Visa Support", src: "/images/cardbox (2).jpg" }
            ].map(({ title, alt, src }) => (
              <div className="col-12 col-sm-6 col-lg-3" key={title}>
                <Suspense fallback={<div>Loading card...</div>}>
                  <ImageCard title={title} alt={alt} src={src} />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItStaffings;
