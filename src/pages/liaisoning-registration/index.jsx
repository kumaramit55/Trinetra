import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBalanceScale,
  FaClipboardList,
  FaBuilding,
  FaFileContract,
  FaHandshake,
  FaLandmark,
  FaShieldAlt,
  FaSitemap,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import "../../assets/css/liaisoning-registration.css";

const services = [
  {
    title: "CLRA License",
    description:
      "Registration and renewal under the Contract Labour (Regulation & Abolition) Act for principal employers and contractors.",
    icon: <FaFileContract />,
  },
  {
    title: "Factory License",
    description:
      "Complete assistance in obtaining, renewing, and amending Factory Licenses in accordance with applicable state regulations.",
    icon: <FaBuilding />,
  },
  {
    title: "Shops & Establishment Registration",
    description:
      "Registration, renewal, amendment, and compliance support under respective State Shops & Establishment Acts.",
    icon: <FaClipboardList />,
  },
  {
    title: "Contract Labour Registration",
    description:
      "Registration support for organizations engaging contract labour while ensuring statutory compliance.",
    icon: <FaHandshake />,
  },
  {
    title: "Professional Tax Registration",
    description:
      "Registration, enrollment, amendment, and periodic compliance assistance related to Professional Tax.",
    icon: <FaLandmark />,
  },
  {
    title: "Labour Welfare Fund",
    description:
      "Registration and compliance support under applicable Labour Welfare Fund regulations.",
    icon: <FaBalanceScale />,
  },
  {
    title: "ISMW Registration",
    description:
      "Registration and statutory assistance under the Inter-State Migrant Workmen Act.",
    icon: <FaSitemap />,
  },
  {
    title: "BOCW Registration",
    description:
      "Registration and compliance assistance under the Building and Other Construction Workers Act.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Trade License",
    description:
      "Assistance in obtaining, renewing, and maintaining Trade Licenses from local governing authorities.",
    icon: <FaTools />,
  },
  {
    title: "FSSAI Registration",
    description:
      "Assistance with Food Safety and Standards Authority of India (FSSAI) registration, licensing, and renewals for food business operators.",
    icon: <FaBuilding />,
  },
];

const supportItems = [
  "Renewal of Licenses & Registrations",
  "Amendments & Modifications",
  "Duplicate Certificates",
  "Surrender & Closure",
  "Government Approvals",
  "Department Follow-ups",
  "Documentation Support",
  "Compliance Guidance",
];

const processSteps = [
  {
    title: "Requirement Assessment",
    description:
      "We understand your business operations and identify applicable registrations, licenses, and statutory requirements.",
  },
  {
    title: "Documentation",
    description:
      "Preparation, verification, and organization of all required documents for submission.",
  },
  {
    title: "Application Filing",
    description:
      "Submission of applications with the appropriate Central or State Government authorities.",
  },
  {
    title: "Liaisoning & Follow-ups",
    description:
      "Continuous coordination with government departments to ensure smooth processing and timely approvals.",
  },
  {
    title: "Registration & Certification",
    description:
      "Obtaining registrations, licenses, certificates, and statutory approvals.",
  },
  {
    title: "Renewal & Ongoing Support",
    description:
      "Continuous support for renewals, amendments, compliance updates, and future regulatory requirements.",
  },
];

const reasons = [
  {
    title: "Experienced Compliance Professionals",
    description:
      "Strong understanding of labour laws, statutory registrations, and regulatory procedures.",
  },
  {
    title: "End-to-End Assistance",
    description:
      "From documentation to final approval, we manage the complete registration process.",
  },
  {
    title: "Government Liaisoning Expertise",
    description:
      "Efficient coordination with Central and State Government departments for timely processing.",
  },
  {
    title: "Reduced Compliance Risk",
    description:
      "Accurate documentation and timely filings help minimize compliance issues.",
  },
  {
    title: "Pan-India Support",
    description:
      "Serving businesses across India with consistent and reliable compliance assistance.",
  },
  {
    title: "Long-Term Compliance Partner",
    description:
      "Beyond registrations, we continue supporting clients with renewals, amendments, and ongoing compliance needs.",
  },
];

const faqs = [
  {
    question: "What registrations do you assist with?",
    answer:
      "We assist with various labour law registrations including CLRA, Factory License, Shops & Establishment, Professional Tax, Labour Welfare Fund, ISMW, BOCW, Trade License, and other statutory registrations.",
  },
  {
    question: "Do you provide renewal services?",
    answer:
      "Yes. We assist with renewals, amendments, transfers, duplicate certificates, surrender, and related compliance activities.",
  },
  {
    question: "Do you prepare documentation?",
    answer:
      "Yes. We provide complete documentation support along with application filing and government liaisoning.",
  },
  {
    question: "Do you work with Central and State Government departments?",
    answer:
      "Yes. Depending on the applicable law, we coordinate with the relevant Central and State Government authorities.",
  },
  {
    question: "Do you serve businesses across India?",
    answer:
      "Yes. We provide Liaisoning & Registration services for organizations operating across India.",
  },
];

function LiaisoningRegistration() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    document.title = "Liaisoning & Registration Services | Trinetra Biz";
    const existingDescription = document.querySelector('meta[name="description"]');
    if (existingDescription) {
      existingDescription.setAttribute(
        "content",
        "Trinetra Biz offers end-to-end liaisoning and registration services for businesses across India, including statutory filings, renewals, approvals, and compliance support."
      );
    } else {
      const descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      descriptionTag.content =
        "Trinetra Biz offers end-to-end liaisoning and registration services for businesses across India, including statutory filings, renewals, approvals, and compliance support.";
      document.head.appendChild(descriptionTag);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", "Liaisoning & Registration Services | Trinetra Biz");

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute(
      "content",
      "Simplifying statutory registrations, renewals, approvals, and government liaisoning for businesses across India."
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", "https://trinetra.com/services/liaisoning-registration");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://trinetra.com/services/liaisoning-registration");
  }, []);

  return (
    <div className="liaisoning-registration-page">
      <section className="hero-section py-5 py-lg-6">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7" data-aos="fade-right">
              <p className="eyebrow">Liaisoning & Registration Services</p>
              <h1 className="hero-title">Liaisoning &amp; Registration</h1>
              <p className="hero-subtitle">
                Streamlining statutory registrations, renewals, and government approvals across India.
              </p>
              <p className="hero-description">
                We coordinate with Central and State authorities to obtain registrations, renew licenses, and ensure statutory compliance efficiently.
              </p>
              <div className="hero-cta-wrap">
                <NavLink
                  to="/talk-to-us"
                  className="btn btn-primary btn-lg px-4 hero-cta"
                  aria-label="Get Consultation"
                >
                  Get Consultation
                </NavLink>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <img
                src="/images/visa support.webp"
                alt="Government liaisoning and registration support"
                className="hero-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="overview">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up">
              <h2 className="section-heading">
                Trusted Partner for Labour Law Registrations &amp; Government Liaisoning
              </h2>
              <p className="section-copy">
                Businesses operating in India are required to comply with various labour laws and obtain registrations, licenses, and approvals from different government departments. Managing these processes requires accurate documentation, timely submissions, and regular follow-ups.
              </p>
              <p className="section-copy">
                Trinetra Biz offers end-to-end Liaisoning &amp; Registration services to help organizations obtain new registrations, renew existing licenses, process amendments, manage compliance-related approvals, and coordinate effectively with government authorities.
              </p>
              <p className="section-copy">
                With extensive experience in labour law compliance and a deep understanding of regulatory procedures, we help businesses complete statutory formalities efficiently while minimizing delays and compliance risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-heading">Comprehensive Registration &amp; Liaisoning Services</h2>
            <p className="section-copy mx-auto" style={{ maxWidth: "760px" }}>
              We support organizations with a broad range of statutory registrations, approvals, and ongoing compliance services.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.title} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 60}>
                <article className="service-card h-100">
                  <div className="service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </div>
            ))}
          </div>

          <div className="support-grid mt-5" data-aos="fade-up">
            <h3>Additional Support</h3>
            <div className="row g-3 mt-3">
              {supportItems.map((item) => (
                <div key={item} className="col-sm-6 col-lg-3">
                  <div className="support-pill">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="process">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-heading">Our Process</h2>
          </div>

          <div className="timeline-wrapper" data-aos="fade-up">
            {processSteps.map((step, index) => (
              <div key={step.title} className="timeline-item">
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" id="why-choose">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-heading">Why Businesses Trust Us</h2>
          </div>

          <div className="row g-4">
            {reasons.map((item, index) => (
              <div key={item.title} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 50}>
                <article className="feature-card h-100">
                  <div className="feature-icon" aria-hidden="true">
                    <FaUserTie />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="faq">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="accordion" id="liaisoningFaqAccordion">
            {faqs.map(({ question, answer }, index) => (
              <div className="accordion-item" key={question}>
                <h3 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${index !== openFaqIndex ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => setOpenFaqIndex(index === openFaqIndex ? null : index)}
                    aria-expanded={index === openFaqIndex}
                    aria-controls={`collapse${index}`}
                  >
                    {question}
                  </button>
                </h3>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === openFaqIndex ? "show" : ""}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#liaisoningFaqAccordion"
                >
                  <div className="accordion-body">{answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="cta-banner" data-aos="fade-up">
            <div>
              <h2>Need Assistance with Statutory Registrations?</h2>
              <p>
                Whether you're starting a new business, expanding operations, or renewing statutory registrations, our compliance experts are here to help.
              </p>
            </div>
            <NavLink to="/talk-to-us" className="btn btn-light btn-lg px-4">
              Get Consultation
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiaisoningRegistration;
