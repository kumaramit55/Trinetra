
import { FaBullseye, FaSearch, FaDollarSign, FaGlobe, FaIndustry, FaUser, FaLaptopCode } from "react-icons/fa";
import InfoBox from "../../Components/elements/infobox";
import { BsBank2 } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";

export default function OurOffering() {
  const sections = [
    
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
        {sections.map((sec, i) => (
          <div key={i} className="col-md-4">
            <div className="custom-card h-100 p-4">
              <h5 className="fw-bold mb-3">{sec.title}</h5>

              <div className="d-flex flex-column gap-2">
                {sec.items.map((item, idx) => (
                  <InfoBox key={idx} IconComponent={item.IconComponent} title={item.title} />
                ))}
              </div>

              {sec.subTitle && (
                <>
                  <h6 className="fw-bold mt-4">{sec.subTitle}</h6>
                  <div className="d-flex flex-column gap-2">
                    {sec.flags.map((flag, idx) => (
                      <InfoBox key={idx} IconComponent={flag.IconComponent} title={flag.title} />
                    ))}
                  </div>
                </>
              )}

              {sec.more && (
                <p className="mt-3 text-danger" style={{ cursor: "pointer" }}>
                  {sec.more}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
