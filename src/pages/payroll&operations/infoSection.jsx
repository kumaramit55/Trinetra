import { FaBullseye, FaSearch, FaDollarSign, FaGlobe, FaIndustry, FaUser, FaLaptopCode } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";
import InfoCard from "../../Components/elements/infocard";

export default function InfoSections() {
  const sections = [
    {
      title: "Solutions we provide",
      items: [
        { IconComponent: FaBullseye, title: "Staffing" },
        { IconComponent: FaSearch, title: "Recruitment" },
        { IconComponent: FaDollarSign, title: "Payroll & Operations" }
      ],
      subTitle: "Geographies we serve",
      flags: [
        { IconComponent: FaGlobe, title: "India" },
        { IconComponent: FaGlobe, title: "GCC" },
        { IconComponent: FaGlobe, title: "Europe" }
      ]
    },
    {
      title: "Industries we serve",
      items: [
        { IconComponent: RiBankLine, title: "Banking & Finance" },
        { IconComponent: TbBuildingEstate, title: "Construction & Real Estate" },
        { IconComponent: FaIndustry, title: "Consumer Products & Goods" },
        { IconComponent: FaIndustry, title: "Healthcare & Pharmaceutical" },
        { IconComponent: FaIndustry, title: "Industrial & Manufacturing" },
        { IconComponent: FaIndustry, title: "Logistics & Transportation" },
        { IconComponent: FaIndustry, title: "Media & Entertainment" }
      ]
    },
    {
      title: "Roles we hire",
      items: [
        { IconComponent: FaLaptopCode, title: "Software Developer" },
        { IconComponent: FaLaptopCode, title: "Cloud Engineer" },
        { IconComponent: FaUser, title: "Business Analyst" },
        { IconComponent: FaLaptopCode, title: "Web Developer" },
        { IconComponent: FaLaptopCode, title: "JavaScript Developer" },
        { IconComponent: FaUser, title: "Back End Support" }
      ],
      more: "& more..."
    }
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {sections.map((section, i) => (
          <div key={i} className="col-md-4">
            <InfoCard {...section} />
          </div>
        ))}
      </div>
    </div>
  );
}
