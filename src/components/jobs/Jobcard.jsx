import React, { useState } from "react";
import "./jobs.css";
import JobData from "../../assets/data/jobsdata";

const JobCard = () => {
  const [jobs, setJobs] = useState(JobData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [minSalary, setMinSalary] = useState(0);

  const toggleBookmark = (id) => {
    const updated = jobs.map((job) =>
      job.job_id === id ? { ...job, isBookmarked: !job.isBookmarked } : job
    );
    setJobs(updated);
  };

  const filterJobs = () => {
    return jobs.filter((job) => {
      const titleMatch = job.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(searchLocation.toLowerCase());
      const typeMatch = selectedJobType
        ? job.type.includes(selectedJobType)
        : true;
      const salaryMatch = parseInt(job.salary.replace(/[^0-9]/g, "")) >= minSalary;
      // Date posted filter can be expanded later

      return titleMatch && locationMatch && typeMatch && salaryMatch;
    });
  };

  return (
    <div className="screen-layout">
      {/* Filter Section */}
      <div className="filter-section">
        <h3>Search by Keywords</h3>
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        <h3>Location</h3>
        <input
          type="text"
          placeholder="City or postcode"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />

        <h3>Job Type</h3>
        {['Freelancer', 'Full Time', 'Part Time', 'Temporary'].map((type) => (
          <div key={type}>
            <input
              type="radio"
              name="jobType"
              value={type}
              checked={selectedJobType === type}
              onChange={(e) => setSelectedJobType(e.target.value)}
            /> {type}
          </div>
        ))}

        <h3>Salary (Minimum)</h3>
        <input
          type="number"
          placeholder="Min salary (e.g. 40000)"
          value={minSalary}
          onChange={(e) => setMinSalary(Number(e.target.value))}
        />
      </div>

      {/* Job Cards Section */}
      <div className="job-wrapper">
        <div className="job-header">
          <span>
            Show <strong>{filterJobs().length}</strong> jobs
          </span>
        </div>

        <div className="job-list">
          {filterJobs().slice(0, 10).map((job) => (
            <div key={job.job_id} className="job-card">
              <div className="job-left">
                <img
                  src={job.company_logo}
                  alt={job.company}
                  className="company-logo"
                />
                <div className="job-info">
                  <h2 className="job-title">{job.title}</h2>
                  <div className="job-meta">
                    <span>🏢 {job.company}</span>
                    <span>📍 {job.location}</span>
                    <span>🕒 {job.posted}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                  <div className="job-tags">
                    {job.type.map((tag, i) => (
                      <span
                        key={i}
                        className={`tag ${tag
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="bookmark-icon"
                onClick={() => toggleBookmark(job.job_id)}
              >
                <span className={job.isBookmarked ? "active" : ""}>🔖</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
