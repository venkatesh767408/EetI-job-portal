
 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CandidDropdown from './CandidDropdown';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown on link click
  const handleItemClick = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">Superio</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/find-jobs">Find Jobs</Link></li>

           {/* ✅ Toggle onClick */}
           <li className="dropdown">
             <div className="dropdown-click-zone">
               <span
                 className="dropdown-button"
                 onClick={() => setShowDropdown(!showDropdown)}
               >
                 Candidates ▾
               </span>
               {showDropdown && <CandidDropdown onItemClick={handleItemClick} />}
             </div>
           </li>
           <li><Link to="/blog">Blog</Link></li>
           </ul>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Login / Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
