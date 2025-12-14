import React, { lazy, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedCounter from "../../Components/elements/animatedCouter/animatedCounter";
import CardImage from "../../Components/elements/card-Image";

const Partnerns = lazy(() => import("./partners"));
const Whoweare = lazy(() => import("./who-we-are"));
const CustomButton = lazy(() => import("../../Components/elements/button"));

function Home() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (path) => () => navigate(path),
    [navigate]
  );

  return (
    <>
      <div className="homepage-container">
        <img
          src="images/IT STAFFING HERO SECTION.webp"
          alt="IT Solutions"
          className="img-style"
          loading="lazy"
          width="1200"
          height="675"
          srcSet="/images/IT STAFFING HERO SECTION-480w.webp 480w, /images/IT STAFFING HERO SECTION-800w.webp 800w, /images/IT STAFFING HERO SECTION.webp 1200w"
          sizes="(max-width: 576px) 480px, (max-width: 992px) 800px, 1200px"
        />

        <div className="content">
          <h1 className="hero-heading">
            Delivering the <span className="gradient-text">Talent</span> You
            Need, with the <span className="gradient-text">Expertise</span> You
            Trust, Exactly When You{" "}
            <span className="gradient-text">Need It</span>.
          </h1>
          <p className="hero-text">
            Empowering businesses with skilled professionals and seamless
            compliance solutions. Our team ensures you get the right
            expertise—on time, every time—to drive growth and meet all
            regulatory requirements.
          </p>
          <div className="d-flex gap-2">
            <CustomButton
              className="btn-primary"
              onClick={handleNavigate("talk-to-us")}
            >
              Talk to us
            </CustomButton>
          </div>
        </div>
      </div>

      <Whoweare />

      <div className="counter-container mt-1">
        <AnimatedCounter
          target={10}
          duration={1000}
          content="Customers"
          showPlus
        />
        <AnimatedCounter target={5} duration={1000} content="Projects Done" />
        <AnimatedCounter
          target={5}
          duration={1000}
          content="Expert Consultants"
          showPlus
        />
      </div>

      <h2 className="section-title custom-h2">Our Services</h2>

      <div className="grid-container">
          {/* IT Staffing */}
          <div className="card">
            <CardImage
              src="images/IT STAFF SOLUTION.webp"
              alt="IT Staffing Solutions"
              rounded
              shadow
              aspectRatio="16/9"
            />
            <div className="card-body">
              <h5 className="card-heading">IT Staffing Solutions</h5>
              <p className="card-text">
                Structured access to skilled IT professionals aligned with
                project requirements, security standards, and delivery
                timelines.
              </p>

              <CustomButton
                variant="primary"
                onClick={handleNavigate("it-staffing-solutions")}
              >
                Explore IT Staffing
              </CustomButton>
            </div>
          </div>

          {/* Payroll */}
          <div className="card">
            <CardImage
              src="images/PAYROLL-MAGEMENT.webp"
              alt="Payroll & Operations"
              rounded
              shadow
              aspectRatio="16/9"
            />
            <div className="card-body">
              <h5 className="card-heading">Payroll & Operations</h5>
              <p className="card-text">
                End-to-end payroll administration with statutory compliance,
                reporting accuracy, and operational control.
              </p>

              <CustomButton
                variant="primary"
                onClick={handleNavigate("payroll-and-operations")}
              >
                View Payroll Services
              </CustomButton>
            </div>
          </div>

          {/* Recruitment */}
          <div className="card">
            <CardImage
              src="images/RECRUITEMENT.webp"
              alt="Recruitment Services"
              rounded
              shadow
              aspectRatio="16/9"
            />
            <div className="card-body">
              <h5 className="card-heading">Recruitment Services</h5>
              <p className="card-text">
                Role-based recruitment focused on skill suitability,
                organizational fit, and long-term workforce stability.
              </p>

              <CustomButton
                variant="primary"
                onClick={handleNavigate("recruitment")}
              >
                Explore Recruitment
              </CustomButton>
            </div>
          </div>
        </div>

      
    </>
  );
}

export default Home;
