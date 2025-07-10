
import React from 'react';
import './CandidatesDb.css';
import { NavLink } from 'react-router-dom';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';
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

const CandidatesDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
     <aside className="dashboard-sidebar">
  <ul>
    <li><NavLink to="/candidates/list" className={({ isActive }) => isActive ? 'active' : ''}><i className="fas fa-home"></i> Dashboard</NavLink></li>
    <li><NavLink to="/candidates/profile"className={({ isActive }) => isActive ? 'active' : ''}><i className="fas fa-building"></i> My Profile</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-paper-plane"></i>My Resume</NavLink></li>
<li><NavLink to="/candidates/manage-jobs" className={({ isActive }) => isActive ? 'active' : ''}><i className="fas fa-tasks"></i>Applied Jobs</NavLink></li> {/* Updated NavLink */}
    <li><NavLink to="#"><i className="fas fa-users"></i>Job Alerts</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-bookmark"></i> Shortlisted Jobs</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-bookmark"></i>CV Manager</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-box"></i> Packages</NavLink></li>
    <li><NavLink to="/candidates/messages"><i className="fas fa-envelope"></i> Messages</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-bell"></i>Change Password</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-bell"></i>Logout</NavLink></li>
  </ul>
</aside>

        <main className="dashboard-main">
          <h2>Howdy, Jerome!!</h2>
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
           <div className="job-card">
            <img src={im1} alt="Segment Logo" />
            <div>
              <h4>Software Engineer (Android), Libraries</h4>
              <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
              <div className="tags">
                <span className="tag blue">Full Time</span>
                <span className="tag green">Private</span>
                <span className="tag yellow">Urgent</span>
              </div>
            </div>
          </div>
            <div className="job-card">
            <img src={im2} alt="Segment Logo" />
            <div>
              <h4>Software Engineer (Android), Libraries</h4>
              <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
              <div className="tags">
                <span className="tag blue">Full Time</span>
                <span className="tag green">Private</span>
                <span className="tag yellow">Urgent</span>
              </div>
            </div>
          </div>
            <div className="job-card">
            <img src={im3} alt="Segment Logo" />
            <div>
              <h4>Software Engineer (Android), Libraries</h4>
              <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
              <div className="tags">
                <span className="tag blue">Full Time</span>
                <span className="tag green">Private</span>
                <span className="tag yellow">Urgent</span>
              </div>
            </div>
          </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default CandidatesDashboard;
