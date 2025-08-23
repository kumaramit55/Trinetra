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

  // Memorized navigation handlers to avoid re-creating functions on every render
  const handleNavigate = useCallback((path) => () => navigate(path), [navigate]);

  return (
    <>
      <div className="homepage-container">
        {/* Image section with lazy loading */}
      <img
  src="/images/IT SOLUTIONS (1).webp"
  alt="IT Solutions"
  className="img-style"
  loading="lazy"
  width="1200"
  height="675"
  srcSet="/images/IT SOLUTIONS (1)-480w.webp 480w, /images/IT SOLUTIONS (1)-800w.webp 800w, /images/IT SOLUTIONS (1).webp 1200w"
  sizes="(max-width: 576px) 480px, (max-width: 992px) 800px, 1200px"
/>


        {/* Content section */}
        <div className="content">
          <h1>
            The Right <span className="gradient-text">People</span> 
            with the Right <span className="gradient-text">Skill</span>
            at the Right <span className="gradient-text">Time</span>
          </h1>
          <p className="p-tag">
            Recruitment, Payroll, Staffing & Tech Solutions to take your
            business to the next level
          </p>
          <div className="d-flex gap-2">
            <Suspense fallback={<button className="btn btn-primary" disabled>Loading...</button>}>
              <CustomButton onClick={handleNavigate('talk-to-us')}>Talk to us</CustomButton>
              <CustomButton onClick={handleNavigate('apply-here')}>Apply Here</CustomButton>
            </Suspense>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Whoweare />
      </Suspense>

      <div className="counter-container">
        <Suspense fallback={<div></div>}>
          <AnimatedCounter target={2025} duration={160} content="Happy Users" />
          <AnimatedCounter target={150} duration={1000} content="Projects Done" />
          <AnimatedCounter target={150} duration={1000} content="Expert Consultant" />
          <AnimatedCounter target={880} duration={1000} content="Completed Cases" />
        </Suspense>
      </div>

      <h1 className="custom-heading">Our Services</h1>

      <div className="grid-container">
        {/* Card 1 */}
        <div className="card" data-aos="fade-left">
          <img
            src="/images/cardbox (1).jpg"
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
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <Suspense fallback={<button className="btn btn-primary" disabled>Loading...</button>}>
              <CustomButton variant="primary" onClick={handleNavigate('it-staffing-solutions')}>
                Know More
              </CustomButton>
            </Suspense>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" data-aos="fade-in">
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
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <Suspense fallback={<button className="btn btn-primary" disabled>Loading...</button>}>
              <CustomButton variant="primary" onClick={handleNavigate('payroll-and-operations')}>
                Know More
              </CustomButton>
            </Suspense>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" data-aos="fade-right">
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
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <Suspense fallback={<button className="btn btn-primary" disabled>Loading...</button>}>
              <CustomButton variant="primary" onClick={handleNavigate('recruitment')}>
                Know More
              </CustomButton>
            </Suspense>
          </div>
        </div>

        {/* Additional cards remain unchanged but update src and add lazy loading similarly */}
        {/* ... */}
      </div>

      <Suspense fallback={<div>Loading Partners...</div>}>
        <Partnerns />
      </Suspense>

      <h1 className="text-center my-4">Our Certifications</h1>

      <Suspense fallback={<div>Loading Certifications...</div>}>
        <Tray3DSlider />
      </Suspense>
    </>
  );
}

export default Home;
