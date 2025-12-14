import React from "react";
import {
  FaTools,
  FaUserShield,
  FaBolt,
  FaUserTie,
  FaUserCheck,
  FaRegClock,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function StaffingSolutions() {
  return (
    <div className="staffing-page">

      {/* ================= MAIN HERO ================= */}
      <section
  className="text-white position-relative"
  style={{
    background: "linear-gradient(135deg, #00264d 0%, #003d80 100%)",
    padding: "120px 0 100px",
  }}
>
  {/* subtle overlay pattern */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 40%)",
      pointerEvents: "none",
    }}
  />

  <div className="container position-relative">
    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <div className="col-lg-7 mb-4 mb-lg-0">
        <span className="text-uppercase small fw-semibold text-light opacity-75">
          End-to-End Staffing Solutions
        </span>

        <h1 className="display-4 fw-bold mt-2 mb-4">
          Workforce Solutions <br />
          <span className="text-info">That Scale With You</span>
        </h1>

        <p className="fs-5 text-light mb-4" style={{ maxWidth: 640 }}>
          From site-ready blue-collar manpower to high-impact white-collar
          professionals, we deliver structured, compliant, and reliable
          staffing solutions under one execution model.
        </p>

        <div className="d-flex gap-3 flex-wrap">
          <NavLink to="/talk-to-us">
            <button className="btn btn-light btn-lg px-4 fw-semibold">
              Talk to Us
            </button>
          </NavLink>

          <a href="#blue-collar">
            <button className="btn btn-outline-light btn-lg px-4">
              Explore Services
            </button>
          </a>
        </div>
      </div>

      {/* RIGHT VISUAL BLOCK (NO IMAGE, ENTERPRISE STYLE) */}
      <div className="col-lg-5">
        <div className="bg-white bg-opacity-10 rounded p-4 border border-light border-opacity-25">
          <ul className="list-unstyled mb-0">
            <li className="mb-3">
              <strong>Blue Collar:</strong> Skilled & compliant workforce
            </li>
            <li className="mb-3">
              <strong>Grey Collar:</strong> Technical & supervisory roles
            </li>
            <li>
              <strong>White Collar:</strong> Professional & leadership hiring
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= BLUE COLLAR ================= */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Blue Collar Staffing</h2>
            <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: 720 }}>
              Reliable, safety-trained, and deployment-ready workforce for
              operational and industrial environments.
            </p>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/images/pexels-sergey-sergeev-2153675005-32845692.jpg"
                className="img-fluid rounded shadow"
                alt="Blue collar workforce"
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p className="fs-5 text-secondary">
                Building your workforce shouldn’t be complicated. We deliver skilled,
                dependable blue-collar professionals to keep your projects moving —
                safely, efficiently, and on time.
              </p>
              <p>
                <p className="fs-5 text-secondary">
                Building your workforce shouldn’t be complicated. We deliver skilled,
                dependable blue-collar professionals to keep your projects moving —
                safely, efficiently, and on time.
              </p>
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <FaTools />,
                title: "Skilled Talent Pool",
                text:
                  "From welders and electricians to drivers and operators, we provide certified, skilled manpower.",
              },
              {
                icon: <FaUserShield />,
                title: "Compliance First",
                text:
                  "All workers are verified, safety-trained, and compliant with labor & industry regulations.",
              },
              {
                icon: <FaBolt />,
                title: "Rapid Deployment",
                text:
                  "Urgent project? We deploy qualified staff quickly to minimize downtime and delays.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="h-100 p-4 border rounded bg-white shadow-sm">
                  <div className="text-primary fs-2 mb-3">{item.icon}</div>
                  <h6 className="fw-semibold">{item.title}</h6>
                  <p className="text-secondary small mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHITE COLLAR ================= */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">White Collar Staffing</h2>
            <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: 720 }}>
              Strategic hiring solutions for leadership, professionals, and
              business-critical roles.
            </p>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img
                src="images/white-colloar-worker.jpg"
                className="img-fluid rounded shadow"
                alt="White collar staffing"
              />
            </div>
            <div className="col-lg-6 pe-lg-5 order-lg-1">
              <p className="fs-5 text-secondary">
                Helping organizations hire skilled professionals across finance,
                HR, IT, engineering, healthcare, and management — ensuring the
                right talent drives your company’s success.
              </p>
              <p className="fs-5 text-secondary">
               White collar roles demand not only skill but also leadership qualities, problem-solving ability, and cultural alignment. Our recruiters specialize in sourcing candidates who align with your organization’s goals and environment.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <FaUserTie />,
                title: "Expert Professionals",
                text:
                  "Access top talent in business, finance, IT, HR, legal, and operations management.",
              },
              {
                icon: <FaUserCheck />,
                title: "Rigorous Screening",
                text:
                  "We assess skills, qualifications, and culture-fit for high retention.",
              },
              {
                icon: <FaRegClock />,
                title: "Faster Hiring",
                text:
                  "Streamlined recruitment reduces time-to-hire and ensures seamless onboarding.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="h-100 p-4 border rounded shadow-sm">
                  <div className="text-primary fs-2 mb-3">{item.icon}</div>
                  <h6 className="fw-semibold">{item.title}</h6>
                  <p className="text-secondary small mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GREY COLLAR ================= */}
<section className="py-5 bg-light border-top">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="fw-bold">Grey Collar Staffing</h2>
      <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: 720 }}>
        Bridging skilled operations and professional expertise through
        technically trained and supervisory workforce.
      </p>
    </div>

    <div className="row align-items-center mb-5">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <img
          src="images/grey-colloar-workers.jpg"
          className="img-fluid rounded shadow"
          alt="Grey collar workforce"
        />
      </div>
      <div className="col-lg-6 ps-lg-5">
        <p className="fs-5 text-secondary">
          Grey collar roles demand hands-on technical skills combined with
          decision-making, coordination, and operational accountability.
          We provide trained technicians, supervisors, and support staff
          who ensure smooth execution between management and ground teams.
        </p>
        <p className="fs-5 text-secondary ">
  These roles are critical for maintaining quality standards, coordinating teams,
  and ensuring that operational goals are met without delays or communication gaps.
</p>

      </div>
    </div>

    <div className="row g-4">
      {[
        {
          icon: <FaTools />,
          title: "Technically Skilled Workforce",
          text:
            "Certified technicians, machine operators, and field engineers trained for modern operational environments.",
        },
        {
          icon: <FaUserCheck />,
          title: "Supervisory & Support Roles",
          text:
            "Experienced supervisors and coordinators who ensure productivity, safety, and quality compliance.",
        },
        {
          icon: <FaRegClock />,
          title: "Operational Continuity",
          text:
            "Reliable workforce that minimizes downtime and maintains seamless coordination between teams.",
        },
      ].map((item, i) => (
        <div key={i} className="col-md-6 col-lg-4">
          <div className="h-100 p-4 border rounded bg-white shadow-sm">
            <div className="text-primary fs-2 mb-3">{item.icon}</div>
            <h6 className="fw-semibold">{item.title}</h6>
            <p className="text-secondary small mb-0">{item.text}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">
            Need the Right Workforce?
          </h2>
          <p className="fs-5 mb-4">
            One partner. One execution model. Complete staffing support.
          </p>
          <NavLink to="/talk-to-us">
            <button className="btn btn-light btn-lg px-5 fw-semibold">
              Talk to Us
            </button>
          </NavLink>
        </div>
      </section>

    </div>
  );
}
