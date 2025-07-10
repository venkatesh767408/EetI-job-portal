
import React from 'react';
import './CandidatesSingle.css';
import candidateAboutImg from '../assets/img1.png';
import darlene from '../assets/darlene.png';
// import { Link } from 'react-router-dom'; // Link is not used in the provided snippet, can be removed if not needed elsewhere

const CandidatesSingle = () => {
  return (
    <div className="candidates-single-page">
      {/* Top Navigation Bar - Based on the screenshot */}
      <div className="employer-header">
        <img src={darlene} alt="Company Logo" className="company-logo" />
        <div className="company-details">
          <h2>Darlene Roberston</h2>
          <p>UI Designer London, UK $99 / hour Member Since,Aug 19,2020</p>
          <button className="open-jobs-btn">App</button>
          <button className="open-jobs-btn">Design</button>
          <button className="open-jobs-btn">Digital</button>
        </div>
        <button className="private-message-btn">Download CV</button>
      </div>

      <div className="main-content-area">
        <div className="candidate-details-section">
          {/* Candidates About Section */}
          <div className="candidates-about-section">
            <h2 className="section-title">Candidates About</h2>
            <div className="about-image-wrapper">
              <img src={candidateAboutImg} alt="Candidate Team" className="about-main-image" />
              <div className="play-button-overlay">
                <i className="fas fa-play"></i> {/* Font Awesome play icon */}
              </div>
            </div>
            <p className="about-description">
              Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam.
              Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae
              aliquam elit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare
              ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.
            </p>
            <p className="about-description">
              Integer in purus quis nisl maximus efficitur quis sed justo. Ut efficitur velil sed aule pellentesque, id venenatis
              felis tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <div className="initial-circle education-modern-college">M</div>
              <div className="education-info">
                <h3>Bachelors in Fine Arts</h3>
                <p className="duration">2012 - 2014</p>
                <p className="university">Modern College</p>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>

            <div className="education-item">
              <div className="initial-circle education-harvard">H</div>
              <div className="education-info">
                <h3>Computer Science</h3>
                <p className="duration">2008 - 2012</p>
                <p className="university">Harvard University</p>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>

          {/* Work & Experience Section */}
          <div className="work-experience-section">
            <h2 className="section-title">Work & Experience</h2>
            <div className="work-experience-item">
              <div className="initial-circle work-spotify">S</div>
              <div className="work-experience-info">
                <h3>Product Designer</h3>
                <p className="duration">2008 - 2012</p>
                <p className="company">Spotify Inc.</p>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-container">
          {/* Candidate Info Sidebar */}
          <div className="candidate-sidebar-info">
            <div className="sidebar-info-card">
              <div className="info-item">
                <i className="fas fa-briefcase"></i> {/* Font Awesome icon */}
                <p><strong>Experience:</strong> <span>0.2 Years</span></p>
              </div>
              <div className="info-item">
                <i className="fas fa-user-friends"></i> {/* Font Awesome icon */}
                <p><strong>Age:</strong> <span>28-33 Years</span></p>
              </div>
              <div className="info-item">
                <i className="fas fa-money-bill-wave"></i> {/* Font Awesome icon */}
                <p><strong>Current Salary:</strong> <span>11K - 15K</span></p>
              </div>
              <div className="info-item">
                <i className="fas fa-money-bill-wave"></i> {/* Font Awesome icon */}
                <p><strong>Expected Salary:</strong> <span>26K - 30K</span></p>
              </div>
              <div className="info-item">
                <i className="fas fa-venus-mars"></i> {/* Font Awesome icon */}
                <p><strong>Gender:</strong> <span>Female</span></p>
              </div>
              <div className="info-item">
                <i className="fas fa-language"></i> {/* Font Awesome icon */}
                <p><strong>Language:</strong> <span>English, German, Spanish</span></p>
              </div>
              <div className="info-item">
                <i className="fas fa-graduation-cap"></i> {/* Font Awesome icon */}
                <p><strong>Education Level:</strong> <span>Master Degree</span></p>
              </div>
            </div>
          </div>

          {/* NEW: Social Media Section */}
          <div className="social-media-section candidate-sidebar-info"> {/* Reusing candidate-sidebar-info for consistent styling */}
            <h2 className="section-title">Social media</h2>
            <div className="sidebar-info-card social-media-icons">
              <a href="#" className="social-icon-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Professional Skills Section */}
          <div className="professional-skills-section candidate-sidebar-info"> {/* Reusing candidate-sidebar-info for consistent styling */}
            <h2 className="section-title">Professional Skills</h2>
            <div className="sidebar-info-card"> {/* Card container for skills */}
              <div className="skill-tags-wrapper"> {/* Flex container for tags */}
                <span className="skill-tag">App</span>
                <span className="skill-tag">Administrative</span>
                <span className="skill-tag">Android</span>
                <span className="skill-tag">Wordpress</span>
                <span className="skill-tag">Design</span>
                <span className="skill-tag">React</span>
              </div>
            </div>
          </div>

          {/* Contact Form Sidebar */}
          <div className="sidebar-contact-form">
            <div className="contact-us-card">
              <h3>Contact Us</h3>
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="send-message-btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesSingle;