import InfoCard from "../../Components/elements/infocard";
import BullseyeIcon from "../../assets/icons/bullseye.svg?react";
import DollarIcon from "../../assets/icons/dollar.svg?react";
import SearchIcon from "../../assets/icons/search.svg?react";
import GlobbeIcon from "../../assets/icons/globbe.svg?react";
import LaptopCode from "../../assets/icons/laptopcode.svg?react";
import UserIcon from "../../assets/icons/user.svg?react";
import BankingIcon from "../../assets/icons/banking.svg?react";

function InfoSections() {
  const sections = [
    {
      title: "Solutions we provide",
      items: [
        { IconComponent: BullseyeIcon, title: "Staffing", color: "black" },
        { IconComponent: SearchIcon, title: "Recruitment" },
        { IconComponent: DollarIcon, title: "Payroll & Operations" },
      ],
      
      
    },
    {
      title: "Industries we serve",
      items: [
        { IconComponent: BankingIcon, title: "IT INDUSTRY" },
        { IconComponent: BankingIcon, title: "Construction & Real Estate" },
      ],
    },
    {
      title: "Roles we hire",
      items: [
        { IconComponent: UserIcon, title: "Business Development Executive" },
  { IconComponent: UserIcon, title: "Field Sales Executive" },
  { IconComponent: UserIcon, title: "Field Operation Executive" },
      ],
    },
  ];

  console.log(sections);
  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {sections.map((sec, i) => (
          <div key={i} className="col">
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
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-12 col-md-6 order-md-1 d-flex align-items-center">
            <blockquote className="border-start border-5 border-primary ps-4 fst-italic fs-4 text-secondary">
                   “It takes many years to build a reputation and five minutes to ruin it.
              If you think about that, you’ll do things differently.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Company Story & Journey */}
      <section className="container  my-5">
        <div className="row gy-3 align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <img
              src="images/campaign-creators-gMsnXqILjp4-unsplash.webp"
              alt="Company Story"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "100%", width: "850px" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-4 text-primary">
              Connecting Businesses with Exceptional Talent
            </h2>
            <p className="fs-5 text-muted mb-3">
            At Trinetra, we specialize in connecting businesses with the right talent, efficiently and reliably. Founded with a vision to streamline workforce solutions, we understand that people are the backbone of every organization. Our mission is to provide skilled, trustworthy, and motivated manpower to meet diverse business needs.
            </p>
            <p className="fs-5 text-muted mb-3">
              Whether it’s temporary staffing, permanent placements, or specialized manpower solutions, we pride ourselves on delivering personalized services that match the right candidate to the right role. With a commitment to professionalism, integrity, and excellence, [Your Company Name] aims to be a trusted partner in building successful teams for businesses of all sizes.
            </p>
            <p className="tagline">
  We don’t just provide manpower—we provide people who make a difference
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
                To be the most trusted and innovative partner in workforce
                management and labour law compliance, empowering businesses
                across India to operate with confidence, integrity, and
                compliance excellence.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5 bg-white rounded shadow h-100 border-start border-4 border-primary">
              <h3 className="fw-bold mb-3 text-primary">Our Mission</h3>
              <p className="fs-5">
                Deliver reliable and customized manpower solutions that align
                with our clients’ operational goals. Ensure 100% statutory and
                legal compliance through expert consulting and proactive
                management. Simplify labour law complexities for businesses with
                clarity, accountability, and up-to-date expertise. Build
                long-term partnerships based on transparency, service
                excellence, and client success. Promote ethical employment
                practices and contribute to a compliant and empowered workforce
                ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <InfoSections />
    </div>
  );
}
