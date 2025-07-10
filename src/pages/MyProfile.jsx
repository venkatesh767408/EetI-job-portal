// CompanyProfile.js (Updated for single-select Industry Type)

import './MyProfile.css'; // Make sure your CSS file is correctly linked
import React, { useState, useEffect } from "react";
import "./Location.css";


const MyProfile = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError("Unable to retrieve location. Please enable location services.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="company-profile-container">
      <h2>My Profile!</h2>
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


        </div>

        {/* Company Information Section */}
        <div className="form-section">
          <h4>Contact Information</h4>
          <div className="form-group">
            <label htmlFor="companyName">Full Name</label>
            <input type="text" id="companyName" placeholder="Enter Your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Job Title</label>
            <input type="text" id="tagline" placeholder="UI Designer" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="0 123 4566 7890" />
          </div>
          <div className="form-group">
            <label htmlFor="mail">Email address</label>
            <input type="text" id="mail" placeholder="creativelayers" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" placeholder="www.jerome.com" />
          </div>
          <div className="form-group">
            <label htmlFor="csal">Currrent Salary($)</label>
            <input type="text" id="csal" placeholder="40-70 K" />
          </div>
          <div className="form-group">
            <label htmlFor="esal">Expected Salary($)</label>
            <input type="text" id="esal" placeholder="120-350 K" />
          </div>
          <div className="form-group">
            <label htmlFor="exp">Experience</label>
            <input type="text" id="esal" placeholder="5-10 Years" />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="text" id="age" placeholder="23- 27 Years" />
          </div>
          <div className="form-group">
            <label htmlFor="elvl">Education Levels</label>
            <input type="text" id="elvl" placeholder="Certificate" />
          </div>
          <div className="form-group">
            <label htmlFor="lang">Languages</label>
            <input type="text" id="lang" placeholder="Certificate" />
          </div>

          {/* Industry Type - NOW A SINGLE-SELECT DROPDOWN */}
          <div className="form-group">
            <label htmlFor="industryType">Categories</label>
            <select id="industryType"> {/* Removed 'multiple' attribute */}
              <option value="">Digital & Creative</option> {/* Changed text */}
              <option value="banking">Banking</option>
              <option value="retail">Retail</option>
              <option value="technology">Human Resources</option>
              <option value="education">Management</option>
              <option value="other">Accounting & Finance</option>
              <option value="digital">Digital</option>
              <option value="healthcare">Healthcare</option>
            </select>
            {/* <small>Hold Ctrl (Windows) or Cmd (Mac) to select multiple options.</small> Removed this helper text */}
          </div>
          {/* <div className="form-group">
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
          </div> */}
          <div className="form-group">
            <label htmlFor="searchListing">Allow Search Listing?</label>
            <select id="searchListing">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
          </div>
          <button>Save</button> */}
          <div className="form-section">
            <h4>Description</h4>
            <div className="form-group">
              <label htmlFor="aboutCompanyText">
                Description
              </label>
              <textarea
                id="aboutCompanyText"
                rows="8" // Increased rows for a larger textbox
                placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
            </div>
            <button>Save</button>
          </div>
        </div>

            <div className="form-section">
          <h4>Social Network</h4>
          <div className="form-group">
            <label htmlFor="companyEmail">Facebook</label>
            <input type="text" id="text" placeholder="www.facebook.com/Invision" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Twitter</label>
            <input type="text" id="phone" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Linkedin</label>
            <input type="text" id="website" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Google Plus</label>
            <input type="text" id="address" placeholder="" />
          </div>
          <button>Save</button>
        </div>

        {/* Contact Details Section */}
        <div className="form-section">
          <h4>Contact Information</h4>
          <div className="form-group">
            <label htmlFor="companyEmail">Country</label>
            <input type="text" id="text" placeholder="Australia" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">City</label>
            <input type="text" id="phone" placeholder="Melbourne" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Complete Address</label>
            <input type="text" id="website" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
          </div>
          <div className="form-group">
            <label htmlFor="address">Find On Map</label>
            <input type="text" id="address" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
          </div>
          <button>Search Location</button>
        </div>

       
      </div>

      
    <div className="location-container">
      <h1>Your Current Location</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
    </div>
  );
};



export default MyProfile;