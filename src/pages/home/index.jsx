import React, { lazy, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Lazy-load below-the-fold components
const Partnerns = lazy(() => import("./partners"));
const Tray3DSlider = lazy(() => import("./certification"));
const AnimatedCounter = lazy(() => import("./animateCounter"));
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

        {/* Content section */}
        <div className="content">
          <h1>
            Delivering the <span className="gradient-text">Talent</span> You
            Need, with the <span className="gradient-text">Expertise</span> You
            Trust, Exactly When You{" "}
            <span className="gradient-text">Need It</span>.
          </h1>
          <p className="p-tag">
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
       
          <AnimatedCounter target={2025} duration={160} content="Happy Users" />
          <AnimatedCounter
            target={150}
            duration={1000}
            content="Projects Done"
          />
          <AnimatedCounter
            target={150}
            duration={1000}
            content="Expert Consultant"
          />
          <AnimatedCounter
            target={880}
            duration={1000}
            content="Completed Cases"
          />
       
      </div>

      <h1 className="section-title">Our Services</h1>

      <div className="grid-container">
        <div className="card">
          <img
            src="images/cardbox (1).webp"
            srcSet="/images/cardbox (1)-480w.jpg 480w, /images/cardbox (1).jpg 800w"
            sizes="(max-width: 576px) 480px, 800px"
            className="card-img-top img-dimension"
            alt="IT Staffing Solution"
            loading="lazy"
            width={800}
            height={450}
          />
          <div className="card-body">
            <h5 className="card-title">IT STAFF SOLUTION</h5>
            <p className="card-text">
              Empowering your business with top-tier IT talent carefully matched
              to your specific project requirements. Our rigorous selection
              process ensures reliable, skilled professionals who drive
              innovation, security, and efficiency—so your technology can scale
              confidently.
            </p>
            <Suspense
              fallback={
                <button className="btn btn-primary" disabled>
                  Loading...
                </button>
              }
            >
              <CustomButton
                variant="primary"
                onClick={handleNavigate("it-staffing-solutions")}
              >
                Know More
              </CustomButton>
            </Suspense>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="/images/cardbox1 (1).webp"
            srcSet="/images/cardbox1 (1)-480w.webp 480w, /images/cardbox1 (1).webp 800w"
            sizes="(max-width: 576px) 480px, 800px"
            className="card-img-top img-dimension"
            alt="Payroll Management"
            loading="lazy"
            width={800}
            height={450}
          />
          <div className="card-body">
            <h5 className="card-title">Payroll Management</h5>
            <p className="card-text">
              Streamline your payroll operations with our comprehensive
              management solutions that guarantee accuracy, compliance, and
              timely employee payments. We handle complexities so you can focus
              on growing your business with confidence.
            </p>
            <Suspense
              fallback={
                <button className="btn btn-primary" disabled>
                  Loading...
                </button>
              }
            >
              <CustomButton
                variant="primary"
                onClick={handleNavigate("payroll-and-operations")}
              >
                Know More
              </CustomButton>
            </Suspense>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="/images/cardbox (2).webp"
            srcSet="/images/cardbox (2)-480w.webp 480w, /images/cardbox (2).webp 800w"
            sizes="(max-width: 576px) 480px, 800px"
            className="card-img-top img-dimension"
            alt="Recruitment"
            loading="lazy"
            width={800}
            height={450}
          />
          <div className="card-body">
            <h5 className="card-title">Recruitment</h5>
            <p className="card-text">
              Connecting you with exceptional talent through a thorough and
              tailored recruitment process. We focus on quality hires that align
              with your company culture, ensuring long-term success and growth.
            </p>
            <Suspense
              fallback={
                <button className="btn btn-primary" disabled>
                  Loading...
                </button>
              }
            >
              <CustomButton
                variant="primary"
                onClick={handleNavigate("recruitment")}
              >
                Know More
              </CustomButton>
            </Suspense>
          </div>
        </div>
      </div>

      <Partnerns />

      <h1 className="section-title">Our Certifications</h1>

      <Tray3DSlider />
    </>
  );
}

export default Home;
