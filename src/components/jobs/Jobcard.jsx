import React, { useState } from "react";
import "./jobs.css";
import JobData from "../../assets/data/jobsdata";

const JobCard = () => {
  const [jobs, setJobs] = useState(JobData);

  const toggleBookmark = (id) => {
    const updated = jobs.map((job) =>
      job.job_id === id ? { ...job, isBookmarked: !job.isBookmarked } : job
    );
    setJobs(updated);
  };

  return (
    <div className="job-wrapper">
      <div className="job-header">
        <span>Show <strong>10</strong> jobs</span>
      </div>

      <div className="job-list">
        {jobs.slice(0, 10).map((job) => (
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
                      className={`tag ${tag.toLowerCase().replace(" ", "-")}`}
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
  );
};

export default JobCard;
