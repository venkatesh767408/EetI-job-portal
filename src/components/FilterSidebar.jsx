// src/components/FilterSidebar.jsx
import React from 'react';
import '../pages/CandidatesList.css';

const FilterSidebar = () => (
  <div className="sidebar">
    <h4>Search by Keywords</h4>
    <input type="text" placeholder="Job title, keywords, or company" />
    <h4>Location</h4>
    <input type="text" placeholder="City or postcode" />
    <p className="range-label">Radius around selected destination</p>
    <input type="range" min="10" max="200" defaultValue="100" />
    <p className="range-value">100km</p>
    <h4>Category</h4>
      <select>
        <option>Choose a category</option>
        <option>Residential</option>
        <option>Commercial</option>
        <option>Industrial</option>
        <option>Apartments</option>
      </select>
      <h4>Candidate Gender</h4>
      <select>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <h4>Date Posted</h4>
      <div className="radio-group">
        <label><input type="radio" name="date" /> All</label>
        <label><input type="radio" name="date" /> Last Hour</label>
        <label><input type="radio" name="date" /> Last 24 Hour</label>
        <label><input type="radio" name="date" /> Last 7 Days</label>
        <label><input type="radio" name="date" /> Last 14 Days</label>
        <label><input type="radio" name="date" /> Last 30 Days</label>
      </div>
      <h4>Experience</h4>
      <div className="checkbox-group">
        <label><input type="checkbox" /> Fresh</label>
        <label><input type="checkbox" /> 1 Year</label>
        <label><input type="checkbox" /> 2 Year</label>
        <label><input type="checkbox" /> 3 Year</label>
        <label><input type="checkbox" /> 4 Year</label>
      </div>

      <h4>Qualification</h4>
      <div className="checkbox-group">
        <label><input type="checkbox" /> Certificate</label>
        <label><input type="checkbox" /> Associate Degree</label>
        <label><input type="checkbox" /> Bachelor Degree</label>
        <label><input type="checkbox" /> Master's Degree</label>
        <label><input type="checkbox" /> Doctorate Degree</label>
      </div>
     
  </div>
);

export default FilterSidebar;



