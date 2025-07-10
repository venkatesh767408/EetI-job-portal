
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CandidatesList from './pages/CandidatesList.jsx';
import CandidatesSingle from './pages/CandidatesSingle.jsx';
import CandidatesDashboard from './pages/CandidatesDb.jsx';
import CompanyProfile from './pages/MyProfile.jsx';
// import ManageJobs from './pages/ManageJobs'; // Import the new component
;
import './App.css';
import ManageJobs from './pages/ManageJobs.JSX';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/candidates/list" element={<CandidatesList />} />
            <Route path="/candidates/single" element={<CandidatesSingle />} />
            <Route path="/candidates/dashboard" element={<CandidatesDashboard />} />
            <Route path="/employers/profile" element={<CompanyProfile />} />
            <Route path="/employers/manage-jobs" element={<ManageJobs />} /> {/* New Route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
