// EmployersDashboard.jsx
import React from 'react';
import './EmployersDashboard.css';
import { NavLink } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'January', views: 155 },
  { name: 'February', views: 208 },
  { name: 'March', views: 204 },
  { name: 'April', views: 196 },
  { name: 'May', views: 115 },
  { name: 'June', views: 156 },
];

const EmployersDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
     <aside className="dashboard-sidebar">
  <ul>
    <li><NavLink to="/employers/dashboard" className={({ isActive }) => isActive ? 'active' : ''}><i className="fas fa-home"></i> Dashboard</NavLink></li>
    <li><NavLink to="/employers/profile" className={({ isActive }) => isActive ? 'active' : ''}><i className="fas fa-building"></i> Company Profile</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-paper-plane"></i> Post A New Job</NavLink></li>
<li><NavLink to="/employers/manage-jobs" className={({ isActive }) => isActive ? 'active' : ''}><i className="fas fa-tasks"></i> Manage Jobs</NavLink></li> {/* Updated NavLink */}
    <li><NavLink to="#"><i className="fas fa-users"></i> All Applicants</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-bookmark"></i> Shortlisted Resumes</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-box"></i> Packages</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-envelope"></i> Messages</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-bell"></i> Resume Alerts</NavLink></li>
  </ul>
</aside>

        <main className="dashboard-main">
          <h2>Dashboard Home!</h2>
          <p>Ready to jump back in?</p>

          <div className="stats-boxes">
            <div className="box blue">
              <i className="fas fa-briefcase"></i>
              <div>
                <h3>22</h3>
                <p>Posted Jobs</p>
              </div>
            </div>
            <div className="box red">
              <i className="fas fa-file-alt"></i>
              <div>
                <h3>9382</h3>
                <p>Application</p>
              </div>
            </div>
            <div className="box yellow">
              <i className="fas fa-comment-dots"></i>
              <div>
                <h3>74</h3>
                <p>Messages</p>
              </div>
            </div>
            <div className="box green">
              <i className="fas fa-bookmark"></i>
              <div>
                <h3>32</h3>
                <p>Shortlist</p>
              </div>
            </div>
          </div>

          <div className="chart-section">
            <div className="profile-views">
              <h3>Your Profile Views <span className="dropdown">Last 6 Months</span></h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="notifications">
              <h3>Notifications</h3>
              <ul>
                <li><i className="fas fa-briefcase"></i> <strong>Henry Wilson</strong> applied for <span className="highlight">Product Designer</span></li>
                <li><i className="fas fa-briefcase"></i> <strong>Raul Costa</strong> applied for <span className="highlight">Product Manager</span></li>
                <li><i className="fas fa-briefcase"></i> <strong>Jack Milk</strong> applied for <span className="highlight">Technical Architect</span></li>
                <li><i className="fas fa-briefcase"></i> <strong>Michel Arian</strong> applied for <span className="highlight">Software Engineer</span></li>
                <li><i className="fas fa-briefcase"></i> <strong>Wade Warren</strong> applied for <span className="highlight">Web Developer</span></li>
              </ul>
            </div>
          </div>

          <div className="recent-applicants">
            <h3>Recent Applicants</h3>
            <div className="applicant-grid">
              {[1, 2, 3, 4].map((_, index) => (
                <div className="applicant-card" key={index}>
                  <img
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + index}.jpg`}
                    alt="Applicant"
                  />
                  <div className="applicant-details">
                    <h4>{["Darlene Robertson", "Wade Warren", "Leslie Alexander", "Floyd Miles"][index]}</h4>
                    <p>{["Ui Designer", "Developer", "Digital Marketer", "Front-end Developer"][index]} &nbsp; 📍 London, UK &nbsp; 💰 ${[44, 99, 88, 44][index]} / hour</p>
                    <div className="tags">
                      <span className="tag">App</span>
                      <span className="tag">Design</span>
                      <span className="tag">Digital</span>
                    </div>
                    <div className="action-icons">
                      <i className="fas fa-eye"></i>
                      <i className="fas fa-check"></i>
                      <i className="fas fa-times"></i>
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default EmployersDashboard;
