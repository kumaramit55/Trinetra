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
        <div className="card">
          <CardImage
            src="images/IT STAFF SOLUTION.webp"
            alt="IT Staffing Solution"
            rounded
            shadow
            aspectRatio="16/9"
          />
          <div className="card-body">
            <h5 className="card-heading">IT STAFF SOLUTION</h5>
            <p className="card-text">
              Empowering your business with top-tier IT talent carefully matched
              to your specific project requirements. Our rigorous selection
              process ensures reliable, skilled professionals who drive
              innovation, security, and efficiency—so your technology can scale
              confidently.
            </p>

            <CustomButton
              variant="primary"
              onClick={handleNavigate("it-staffing-solutions")}
            >
              Know More
            </CustomButton>
          </div>
        </div>

        <div className="card">
          <CardImage
            src="images/PAYROLL-MAGEMENT.webp"
            alt="Payroll Management"
            rounded
            shadow
            aspectRatio="16/9"
          />
          <div className="card-body">
            <h5 className="card-heading">Payroll Management</h5>
            <p className="card-text">
              Streamline your payroll operations with our comprehensive
              management solutions that guarantee accuracy, compliance, and
              timely employee payments. We handle complexities so you can focus
              on growing your business with confidence.
            </p>

            <CustomButton
              variant="primary"
              onClick={handleNavigate("payroll-and-operations")}
            >
              Know More
            </CustomButton>
          </div>
        </div>

        <div className="card">
          <CardImage
            src="images/RECRUITEMENT.webp"
            alt="Recruitment"
            rounded
            shadow
            aspectRatio="16/9"
          />
          <div className="card-body">
            <h5 className="card-heading">Recruitment</h5>
            <p className="card-text">
              Connecting you with exceptional talent through a thorough and
              tailored recruitment process. We focus on quality hires that align
              with your company culture, ensuring long-term success and growth.
            </p>

            <CustomButton
              variant="primary"
              onClick={handleNavigate("recruitment")}
            >
              Know More
            </CustomButton>
          </div>
        </div>
      </div>

      <Partnerns />
    </>
  );
}

export default Home;
