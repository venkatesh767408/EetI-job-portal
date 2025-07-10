
  import React from 'react';
import { Link } from 'react-router-dom';
import './EmployersDropdown.css';

const EmployersDropdown = ({ onItemClick }) => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/employers/list" onClick={onItemClick}>Employers List</Link></li>
        <li><Link to="/employers/single" onClick={onItemClick}>Employers Single</Link></li>
        <li><Link to="/employers/dashboard" onClick={onItemClick}>Employers Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default EmployersDropdown;
