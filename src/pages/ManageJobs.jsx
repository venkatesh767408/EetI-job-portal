// ManageJobs.jsx
import React from 'react';
import './ManageJobs.css';
import { NavLink } from 'react-router-dom';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';


const jobListings = [
  {
    id: 1,
    logo: im1, // Placeholder for Superio-like logo
    title: 'Software Engineer (Android), Libraries',
    segment: 'Segment',
    location: 'London, UK',
    applications: 3,
    createdDate: 'October 27, 2017',
    expiredDate: 'April 25, 2011', // Assuming this is intentional from screenshot
    status: 'Active',
  },
  {
    id: 2,
    logo: im2, // Placeholder for Recruiting Coordinator logo
    title: 'Recruiting Coordinator',
    segment: 'Segment',
    location: 'London, UK',
    applications: 3,
    createdDate: 'October 27, 2017',
    expiredDate: 'April 25, 2011',
    status: 'Active',
  },
  {
    id: 3,
    logo: im3, // Placeholder for LinkedIn-like logo
    title: 'Product Manager, Studio',
    segment: 'Segment',
    location: 'London, UK',
    applications: 3,
    createdDate: 'October 27, 2017',
    expiredDate: 'April 25, 2011',
    status: 'Active',
  },
  // Add more job listings as needed to match the screenshot or for more data
];

const ManageJobs = () => {
  return (
    <div className="manage-jobs-container">
      <div className="manage-jobs-header">
        <h2>My Applied Jobs</h2>
        <div className="dropdown-container">
          <span className="dropdown-label">Last 6 Months</span>
          <i className="fas fa-chevron-down dropdown-icon"></i>
        </div>
      </div>

      <div className="job-listings-table-wrapper">
        <table className="job-listings-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map((job) => (
              <tr key={job.id}>
                <td className="job-title-cell">
                  <div className="job-title-content">
                    <img src={job.logo} alt="Company Logo" className="company-logo" />
                    <div>
                      <h4>{job.title}</h4>
                      <p className="job-meta">
                        <span className="job-segment">{job.segment}</span>
                        <span className="job-location"><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                      </p>
                    </div>
                  </div>
                </td>
                {/* <td className="job-applications">
                  <NavLink to="#" className="applications-link">{job.applications}+ Applied</NavLink>
                </td> */}
                <td className="job-dates">
                  <p>Created: {job.createdDate}</p>
                  <p>Expired: {job.expiredDate}</p>
                </td>
                <td className="job-status">
                  <span className={`status-badge status-${job.status.toLowerCase()}`}>{job.status}</span>
                </td>
                <td className="job-actions-cell">
                  <div className="action-icons">
                    <i className="fas fa-eye" title="View Job"></i>
                    <i className="fas fa-pencil-alt" title="Edit Job"></i>
                    <i className="fas fa-trash-alt" title="Delete Job"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: Add pagination or "No jobs" message if the list is empty */}
      {jobListings.length === 0 && (
        <p className="no-jobs-message">No jobs posted yet. <NavLink to="/employers/post-job">Post a new job!</NavLink></p>
      )}
    </div>
  );
};

export default ManageJobs;