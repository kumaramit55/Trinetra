
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
      title: "Solutions We Provide",
      items: [
        { IconComponent: BullseyeIcon, title: "Staffing" },
        { IconComponent: SearchIcon, title: "Recruitment" },
        { IconComponent: DollarIcon, title: "Payroll & Operations" },
        
        
      ],
      
    },
    {
      title: "Industries We Serve",
      items: [
        { IconComponent: BankingIcon, title: "IT INDUSTRY" },
        { IconComponent: BankingIcon, title: "Construction & Real Estate" },
      
    
      ],
    },
    {
      title: "Roles We Hire",
      items: [
  { IconComponent: UserIcon, title: "Business Development Executive" },
  { IconComponent: UserIcon, title: "Field Sales Executive" },
  { IconComponent: UserIcon, title: "Field Operation Executive" },
],

    },
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
