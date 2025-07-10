import React from 'react';
import { Link } from 'react-router-dom';
import './CandidDropdown.css';

const CandidDropdown = ({ onItemClick }) => {
    return (
        <div className="dropdown-menu">
            <ul>
                <li><Link to="/candidates/list" onClick={onItemClick}>Candidates List</Link></li>
                <li><Link to="/candidates/single" onClick={onItemClick}>Candidates Single</Link></li>
                <li><Link to="/candidates/dashboard" onClick={onItemClick}>Candidates Dashboard</Link></li>
            </ul>
        </div>
    );
};

export default CandidDropdown;
