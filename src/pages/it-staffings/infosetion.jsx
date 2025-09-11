
import InfoCard from "../../Components/elements/infocard";
import BullseyeIcon from '../../assets/icons/bullseye.svg?react';
import DollarIcon from '../../assets/icons/dollar.svg?react';
import SearchIcon from "../../assets/icons/search.svg?react";
import GlobbeIcon from "../../assets/icons/globbe.svg?react";
import LaptopCode from '../../assets/icons/laptopcode.svg?react'
import UserIcon from '../../assets/icons/user.svg?react'
import BankingIcon from '../../assets/icons/banking.svg?react'

export default function InfoSections() {
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
  <div className="px-1 responsive-card row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
    {sections.map((item, index) => (
      <div key={index} className="col">
        <InfoCard {...item} />
      </div>
    ))}
  </div>
</div>

  );
}
