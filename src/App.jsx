// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import Footer from './components/Footer';

// import EmployersList from './pages/EmployersList';
// import EmployersSingle from './pages/EmployersSingle';
// import EmployersDashboard from './pages/EmployersDashboard';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/employers/list" element={<EmployersList />} />
//         <Route path="/employers/single" element={<EmployersSingle />} />
//         <Route path="/employers/dashboard" element={<EmployersDashboard />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
// App.jsx
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmployersList from './pages/EmployersList';
import EmployersSingle from './pages/EmployersSingle';
import EmployersDashboard from './pages/EmployersDashboard';
import CompanyProfile from './pages/CompanyProfile';
// import ManageJobs from './pages/ManageJobs'; // Import the new component
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import ManageJobs from './pages/ManageJobs.JSX';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/employers/list" element={<EmployersList />} />
            <Route path="/employers/single" element={<EmployersSingle />} />
            <Route path="/employers/dashboard" element={<EmployersDashboard />} />
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
