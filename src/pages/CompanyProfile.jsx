// CompanyProfile.js (Updated for single-select Industry Type)
import React from 'react';
import './CompanyProfile.css'; // Make sure your CSS file is correctly linked

const CompanyProfile = () => {
  return (
    <div className="company-profile-container">
      <h2>Company Profile!</h2>
      <p>Ready to jump back in?</p>

      <div className="profile-section">
        <h3>My Profile</h3>

        <div className="upload-section">
          <div className="upload-box">
            <div className="upload-area">
              <i className="fas fa-upload upload-icon"></i>
              <p>Browse Logo</p>
            </div>
            <small>
              Max file size is 1MB, Minimum dimension: 330x300 <br />
              Suitable files: .jpg & .png
            </small>
          </div>

          <div className="upload-box">
            <div className="upload-area">
              <i className="fas fa-upload upload-icon"></i>
              <p>Browse Cover</p>
            </div>
            <small>
              Max file size is 1MB, Minimum dimension: 330x300 <br />
              Suitable files: .jpg & .png
            </small>
          </div>
        </div>

        {/* Company Information Section */}
        <div className="form-section">
          <h4>Company Information</h4>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" placeholder="Enter company name" />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input type="text" id="tagline" placeholder="Enter company tagline" />
          </div>
          {/* Industry Type - NOW A SINGLE-SELECT DROPDOWN */}
          <div className="form-group">
            <label htmlFor="industryType">Industry Type</label>
            <select id="industryType"> {/* Removed 'multiple' attribute */}
              <option value="">Select industry</option> {/* Changed text */}
              <option value="banking">Banking</option>
              <option value="digital">Digital</option>
              <option value="retail">Retail</option>
              <option value="healthcare">Healthcare</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
            {/* <small>Hold Ctrl (Windows) or Cmd (Mac) to select multiple options.</small> Removed this helper text */}
          </div>
          <div className="form-group">
            <label htmlFor="teamSize">Team Size</label>
            <select id="teamSize">
              <option value="">Select team size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-100">51-100 employees</option>
              <option value="101-500">101-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="searchListing">Allow Search Listing?</label>
            <select id="searchListing">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="establishmentDate">Establishment Date (or Time Zone)</label>
            <input type="text" id="establishmentDate" placeholder="e.g., 2020 or EST" />
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="form-section">
          <h4>Contact Details</h4>
          <div className="form-group">
            <label htmlFor="companyEmail">Company Email</label>
            <input type="email" id="companyEmail" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+1234567890" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="url" id="website" placeholder="https://www.yourcompany.com" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Street, City, State, Zip" />
          </div>
        </div>

        {/* "About Company" Section */}
        <div className="form-section">
          <h4>About Company</h4>
          <div className="form-group">
            <label htmlFor="aboutCompanyText">
              Share a detailed description of your company, or general text you might use for social media profiles/bios.
            </label>
            <textarea
              id="aboutCompanyText"
              rows="8" // Increased rows for a larger textbox
              placeholder="Tell your story, your mission, or social media friendly content..."
            ></textarea>
          </div>
        </div>

        <button className="save-button">Save Profile</button>
      </div>
    </div>
  );
};

export default CompanyProfile;