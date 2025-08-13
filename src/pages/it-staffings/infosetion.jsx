import React from "react";



export default function InfoSections() {
  const sections = [
    {
      title: "Solutions we provide",
      items: [
        { icon: "🎯", text: "Staffing" },
        { icon: "🔍", text: "Recruitment" },
        { icon: "💰", text: "Payroll & Operations" }
      ],
      subTitle: "Geographies we serve",
      flags: [
        { icon: "🇮🇳", text: "India" },
        { icon: "🇸🇦", text: "GCC" },
        { icon: "🇪🇺", text: "Europe" }
      ]
    },
    {
      title: "Industries we serve",
      items: [
        { icon: "🏦", text: "Banking & Finance" },
        { icon: "🏗️", text: "Construction & Real Estate" },
        { icon: "🛍️", text: "Consumer Products & Goods" },
        { icon: "🩺", text: "Healthcare & Pharmaceutical" },
        { icon: "⚙️", text: "Industrial & Manufacturing" },
        { icon: "🚚", text: "Logistics & Transportation" },
        { icon: "🎬", text: "Media & Entertainment" }
      ]
    },
    {
      title: "Roles we hire",
      items: [
        { icon: "💻", text: "Software Developer" },
        { icon: "☁️", text: "Cloud Engineer" },
        { icon: "📊", text: "Business Analyst" },
        { icon: "🌐", text: "Web Developer" },
        { icon: "📜", text: "Javascript Developer" },
        { icon: "📞", text: "Back End Support" }
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
              <ul className="list-unstyled">
                {sec.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="me-2">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              {sec.subTitle && (
                <>
                  <h6 className="fw-bold mt-4">{sec.subTitle}</h6>
                  <ul className="list-unstyled">
                    {sec.flags.map((flag, idx) => (
                      <li key={idx} className="mb-2">
                        <span className="me-2">{flag.icon}</span>
                        {flag.text}
                      </li>
                    ))}
                  </ul>
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
