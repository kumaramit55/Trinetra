import React, { useState } from "react";

const JOBS = [
  {
    id: 1,
    title: "Project Manager",
    category: "Management",
    description:
      "Lead cross-functional teams, manage project timelines, budgets, and ensure effective communication.",
    location: "Bangalore",
    contractMonths: 10,
    experience: "Senior",
    jobType: "Full-Time",
    salaryRange: "₹12,00,000 - ₹18,00,000 per annum",
  },
  {
    id: 2,
    title: "Software Developer",
    category: "IT",
    description:
      "Develop and maintain scalable web applications using React, Node.js, and RESTful APIs.",
    location: "Mumbai",
    contractMonths: 12,
    experience: "Mid",
    jobType: "Full-Time",
    salaryRange: "₹8,00,000 - ₹12,00,000 per annum",
  },
  {
    id: 3,
    title: "QA Engineer",
    category: "IT",
    description:
      "Execute automated and manual tests, identify defects, and work closely with development teams.",
    location: "Hyderabad",
    contractMonths: 8,
    experience: "Mid",
    jobType: "Contract",
    salaryRange: "₹6,00,000 - ₹9,00,000 per annum",
  },
  {
    id: 4,
    title: "HR Assistant",
    category: "HR",
    description:
      "Assist with recruitment drives, employee onboarding, and maintaining records.",
    location: "Delhi",
    contractMonths: 6,
    experience: "Junior",
    jobType: "Temporary",
    salaryRange: "₹3,00,000 - ₹5,00,000 per annum",
  },
  {
    id: 5,
    title: "Field Technician",
    category: "Technical",
    description:
      "Provide technical support and maintenance services at client locations.",
    location: "Chennai",
    contractMonths: 9,
    experience: "Mid",
    jobType: "Full-Time",
    salaryRange: "₹4,00,000 - ₹7,00,000 per annum",
  },
];

export default function JobOpportunities() {
  const [filters, setFilters] = useState({
    location: "",
    contractMonths: "",
    category: "",
    experience: "",
    jobType: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredJobs = JOBS.filter((job) => {
    return (
      (filters.location ? job.location === filters.location : true) &&
      (filters.contractMonths ? job.contractMonths === parseInt(filters.contractMonths) : true) &&
      (filters.category ? job.category === filters.category : true) &&
      (filters.experience ? job.experience === filters.experience : true) &&
      (filters.jobType ? job.jobType === filters.jobType : true)
    );
  });

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-primary">Job Opportunities</h2>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md">
          <select
            className="form-select"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          >
            <option value="">Filter by Location</option>
            {[...new Set(JOBS.map((job) => job.location))].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md">
          <select
            className="form-select"
            name="contractMonths"
            value={filters.contractMonths}
            onChange={handleFilterChange}
          >
            <option value="">Filter by Contract Length (months)</option>
            {[...new Set(JOBS.map((job) => job.contractMonths))].map((months) => (
              <option key={months} value={months}>
                {months} months
              </option>
            ))}
          </select>
        </div>
        <div className="col-md">
          <select
            className="form-select"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">Filter by Category</option>
            {[...new Set(JOBS.map((job) => job.category))].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md">
          <select
            className="form-select"
            name="experience"
            value={filters.experience}
            onChange={handleFilterChange}
          >
            <option value="">Filter by Experience</option>
            {[...new Set(JOBS.map((job) => job.experience))].map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md">
          <select
            className="form-select"
            name="jobType"
            value={filters.jobType}
            onChange={handleFilterChange}
          >
            <option value="">Filter by Job Type</option>
            {[...new Set(JOBS.map((job) => job.jobType))].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="row g-4">
        {filteredJobs.length === 0 ? (
          <p className="text-muted">No jobs found matching the selected criteria.</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm rounded-4">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    {job.title}{" "}
                    <span className="badge bg-info text-dark ms-2" style={{ fontSize: "0.75rem" }}>
                      {job.contractMonths} Months
                    </span>
                  </h5>
                  <p className="text-muted mb-1">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-muted mb-1">
                    <strong>Experience:</strong> {job.experience}
                  </p>
                  <p className="text-muted mb-1">
                    <strong>Category:</strong> {job.category}
                  </p>
                  <p className="text-muted mb-3">
                    <strong>Job Type:</strong> {job.jobType}
                  </p>
                  <p className="card-text flex-grow-1" style={{ fontSize: "0.95rem", color: "#555" }}>
                    {job.description}
                  </p>
                  <button
                    className="btn btn-primary mt-auto align-self-start px-4"
                    onClick={() => {
                      window.location.href = "/talk-to-us";
                    }}
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
