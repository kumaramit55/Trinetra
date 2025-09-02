import React, { useEffect, useState } from "react";
import Papa from "papaparse";

export default function JobOpportunities() {

  const [JOBS, SETJOBS] = useState([]);

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
  const jobDate = new Date(job.postedDate);
  const filterMonth = filters.postedMonth ? new Date(filters.postedMonth) : null; // expect filters.postedMonth like '2025-08'

  const matchesMonth = filterMonth
    ? jobDate.getFullYear() === filterMonth.getFullYear() &&
      jobDate.getMonth() === filterMonth.getMonth()
    : true;

  return (
    (filters.location ? job.location === filters.location : true) &&
    (filters.contractMonths ? job.contractMonths === parseInt(filters.contractMonths) : true) &&
    (filters.category ? job.category === filters.category : true) &&
    (filters.experience ? job.experience === filters.experience : true) &&
    (filters.jobType ? job.jobType === filters.jobType : true) &&
    matchesMonth
  );
});




  const CSV_URL="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLjafSpiOkVW5bzWyhfHTD530qh33CSLOM6IlhTHidELlvl4M2cTOW4jLONWPWVVmh6EZ3Yk3ECn0D/pub?gid=0&single=true&output=csv"

useEffect(() => {
    fetch(CSV_URL)
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true, // auto-convert numbers
        });
        SETJOBS(parsed.data);
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV:", error);
      });
  }, []);

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
                   <p className="text-muted mb-3">
                    <strong>Post Date:</strong> {job.postedDate}
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
