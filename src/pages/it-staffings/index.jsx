import React from "react";
import InfoSections from "./infosetion";
import ImageCard from "../home/imageCard";

function ITSTAFFINGS() {
  return (
    <div>
      <div>
        <div className="homepage-container">
          {/* image section */}

          <img
            src="\images\IT SOLUTIONS.jpg"
            alt=""
            className="img-style"
          />

          {/* content section */}
          <div className="content">
            <h1 className="">
              Unlock Your Team's with{" "}
              <span className="gradient-text">Potential</span> <br />
              IT Staffing Solutions
            </h1>
            <p
              style={{
                fontWeight: 500,
                lineHeight: 2.0,
                fontSize: "large",
                fontFamily: "inherit",
              }}
            >
              In the fast-paced world of technology, finding the right talent
              can be a daunting task, and we are here to make it easier for you.
              At Buzzworks IT staffing solutions, we understand the challenges
              you face in building a high-performing IT team. Let us be your
              strategic staffing solutions partner in overcoming the pain points
              of IT staffing so you can focus on what you do best – driving
              innovation and growth.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="custom-heading">Our Tailored Staffing Solutions</h1>
        <div className="container my-4">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Permanent Recruitment</h5>
                  <p className="card-text">
                    We understand the urgency of filling permanent IT positions.
                    Our streamlined staffing solutions are designed to minimise
                    time-to-hire without compromising on the quality of
                    candidates. This efficiency translates to cost savings for
                    your organisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Rate Card Model</h5>
                  <p className="card-text">
                    Embrace flexibility with our Rate Card model. Pay for the
                    actual hours worked on your project, allowing you to scale
                    your team up or down based on project requirements. This
                    model is ideal for dynamic projects where requirements
                    evolve over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Payroll Outsourcing</h5>
                  <p className="card-text">
                    With years of experience in the IT staffing industry, we
                    have an in-depth understanding of the nuances and
                    complexities involved in managing payroll for IT
                    professionals. Our expertise ensures accuracy, compliance,
                    and efficiency in every aspect of payroll outsourcing.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Temp Staffing & Recruitment</h5>
                  <p className="card-text">
                    Our temporary staffing and recruitment solutions are
                    designed to provide cost-effective alternatives to hiring
                    full-time employees for short-term needs. You can scale your
                    team up or down based on project demands, optimizing your
                    budget without compromising on quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Hire, Train, Deploy Model (HTD)
                  </h5>
                  <p className="card-text">
                    Struggling to find professionals with the exact skills you
                    need? Leverage our Hire, Train, Deploy model. We identify
                    talented individuals, provide them with specialized training
                    tailored to your project, and seamlessly integrate them into
                    your team.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Global Staffing</h5>
                  <p className="card-text">
                    We work closely with your team to understand your global IT
                    staffing requirements, project goals, and cultural
                    considerations. Leveraging our worldwide network, we
                    actively source candidates with the specific skills and
                    expertise needed for your global IT placements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script></script>
      </div>
      <InfoSections />
     <div className="why-choose-section py-5 text-center">
  <h1 className="custom-heading mb-4">Why Choose Trinetra</h1>
  
  <div className="container">
    <div className="row g-4">
      
      <div className="col-12 col-sm-6 col-lg-3">
        <ImageCard 
          title="Proven Expertise" 
          alt="proven Expertise" 
          src="/images/cardbox (2).jpg" 
        />
      </div>
      
      <div className="col-12 col-sm-6 col-lg-3">
        <ImageCard 
          title="Customer Support" 
          alt="customer support" 
          src="/images/cardbox (2).jpg" 
        />
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <ImageCard 
          title="Payroll & Compliance Support" 
          alt="payroll support" 
          src="/images/cardbox (2).jpg" 
        />
      </div>
      
      <div className="col-12 col-sm-6 col-lg-3">
        <ImageCard 
          title="Visa & Immigration Support" 
          alt="visa support" 
          src="/images/cardbox (2).jpg" 
        />
      </div>
      
    </div>
  </div>
</div>

    </div>
  );
}

export default ITSTAFFINGS;
