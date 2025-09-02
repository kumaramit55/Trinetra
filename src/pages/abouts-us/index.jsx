
import { FaBullseye, FaSearch, FaDollarSign, FaGlobe, FaIndustry, FaUser, FaLaptopCode } from "react-icons/fa";
import InfoCard from "../../Components/elements/infocard";
import BullseyeIcon from '../../assets/icons/bullseye.svg?react';
import DollarIcon from '../../assets/icons/dollar.svg?react';
import SearchIcon from "../../assets/icons/search.svg?react";
import GlobbeIcon from "../../assets/icons/globbe.svg?react";
import LaptopCode from '../../assets/icons/laptopcode.svg?react'
import UserIcon from '../../assets/icons/user.svg?react'
import BankingIcon from '../../assets/icons/banking.svg?react'





 function InfoSections() {
  const sections = [
    {
      title: "Solutions we provide",
      items: [
        { IconComponent:BullseyeIcon, title: "Staffing",color:"black" },
        { IconComponent: SearchIcon, title: "Recruitment" },
        { IconComponent: DollarIcon, title: "Payroll & Operations" }
      ],
      subTitle: "Geographies we serve",
      flags: [
        { IconComponent: GlobbeIcon, title: "India", color:"black" },
        { IconComponent: GlobbeIcon, title: "GCC" },
        { IconComponent: GlobbeIcon, title: "Europe" }
      ]
    },
    {
      title: "Industries we serve",
      items: [
        { IconComponent: BankingIcon, title: "Banking & Finance" },
        { IconComponent: BankingIcon, title: "Construction & Real Estate" },
        { IconComponent: BankingIcon, title: "Consumer Products & Goods" },
        { IconComponent: BankingIcon, title: "Healthcare & Pharmaceutical" },
        { IconComponent: BankingIcon, title: "Industrial & Manufacturing" },
        { IconComponent: BankingIcon, title: "Logistics & Transportation" },
        { IconComponent: BankingIcon, title: "Media & Entertainment" }
      ]
    },
    {
      title: "Roles we hire",
      items: [
        { IconComponent: LaptopCode, title: "Software Developer" },
        { IconComponent: LaptopCode, title: "Cloud Engineer" },
        { IconComponent: UserIcon, title: "Business Analyst" },
        { IconComponent: LaptopCode, title: "Web Developer" },
        { IconComponent: LaptopCode, title: "JavaScript Developer" },
        { IconComponent: UserIcon, title: "Back End Support" }
      ],
     
    }
  ];
  
  console.log(sections)
  return (
    <div className="container my-5">
      <div className="row g-4">
        {sections.map((sec, i) => (
          <div key={i} className="col-md-4">
            <InfoCard {...sec} />
          </div>
        ))}
      </div>
     
    </div>
  );
}


export default function AboutPage() {
  return (
    <div className="aboutus-page bg-light py-5">
      {/* Quote Section */}
      <section className="container mb-5">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-md-6 order-md-2 d-flex justify-content-center">
            <img
              src="images/vitaly-gariev-3EUgUg4e3nE-unsplash.webp"
              alt="About Us"
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%"}}
            />
          </div>
          <div className="col-12 col-md-6 order-md-1 d-flex align-items-center">
            <blockquote className="border-start border-5 border-primary ps-4 fst-italic fs-4 text-secondary">
              “It takes 20 years to build a reputation and five minutes to ruin
              it. If you think about that, you’ll do things differently.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Company Story & Journey */}
      <section className="container mb-5">
        <div className="row gy-3 align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <img
              src="images/campaign-creators-gMsnXqILjp4-unsplash.webp"
              alt="Company Story"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "550px", width: "100%" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-4 text-primary">
              Connecting Businesses with Exceptional Talent
            </h2>
            <p className="fs-5 text-muted mb-3">
              For over 2 decades, Buzzworks has been instrumental in changing
              lives and transforming businesses by connecting the right people
              with the right job opportunities. With a focus on advancing human
              capital, we help global companies find the right people, enhance
              their productivity and thereby improve profitability.
            </p>
            <p className="fs-5 text-muted mb-3">
              Our journey began with a simple yet profound belief: People are
              the heart and soul of every organization. In an ever-evolving job
              market, finding the right talent can be a challenge but it is also
              the key to success. With this belief as our guiding star, we set
              out to create a company to bridge the gap between businesses and
              talent.
            </p>
            <p className="fs-5 text-muted mb-3">
              Established in 2001 from a small office in Chennai, we are now an
              ISO 9001:2015 certified company with offices across India and
              Dubai. Our turnover is 450cr+ with aims to reach 1000cr+ over the
              next 3 years, backed by defined processes and performance-driven
              teams.
            </p>
            <p className="fs-6 fst-italic text-primary">
              Proudly aligned with UN’s Sustainable Development Goal 8: to
              promote sustained, inclusive and sustainable economic growth, full
              and productive employment and decent work for all.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mb-5">
        <div className="row gy-4 text-center text-md-start">
          <div className="col-md-6">
            <div className="p-5 bg-white rounded shadow h-100 border-start border-4 border-primary">
              <h3 className="fw-bold mb-3 text-primary">Our Vision</h3>
              <p className="fs-5">
                Drive Economic Productivity and Enterprise Profitability by
                Matching Employment Opportunities to the Right People with the
                Right Skills at the Right Time.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5 bg-white rounded shadow h-100 border-start border-4 border-primary">
              <h3 className="fw-bold mb-3 text-primary">Our Mission</h3>
              <p className="fs-5">
                Empower 100,000 people annually across India, GCC and Europe to
                find meaningful work on a contract basis with fair remuneration
                as per their skills by FY 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
        <InfoSections/>
    </div>
  );
}
