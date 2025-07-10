

// import React from 'react';
// import './CandidatesSingle.css';
// import logo from '../assets/udemy.png';
// import img1 from '../assets/img1.png';
// import img2 from '../assets/img2.png';
// import img3 from '../assets/img3.png';
// import img4 from '../assets/img4.png';
// import im1 from '../assets/im1.png';
// import im2 from '../assets/im2.png';
// import im3 from '../assets/im3.png';
// import v from '../assets/v.jpg';
// // import video-img from '../assets/video-img.jpg';

// const EmployersSingle = () => {
//   return (
//     <div className="employer-single-page">
//       <div className="employer-header">
//         <img src={logo} alt="Company Logo" className="company-logo" />
//         <div className="company-details">
//           <h2>Moody’s Corporation</h2>
//              <p>New York, USA &nbsp; &nbsp;  Financial Services &nbsp;  &nbsp; +1 212-553-0300&nbsp; &nbsp;  info@moodys.com</p>
        
//           <button className="open-jobs-btn">Open Jobs — 15</button>
//         </div>
//         <button className="private-message-btn">Private Message</button>
//       </div>
      

//       <div className="content-area">
//         <div className="about-section">
//           <img src={v} alt="office" className="gallery-img" />
//           <h3>About Company</h3>
//           <p>
//             Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company.
//             It is the holding company for Moody’s Investors Service (MIS), and Moody’s Analytics (MA), an American provider 
//             of financial analysis software and services.
//           </p>
//           <p>
//             Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings.
//             Moody’s was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate
//             company that was listed on the NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, 
//             Moody’s Investors Service, the rating agency, and Moody’s Analytics, with all of its other products.
//           </p>
// <div className="main-content-area">
//         <div className="candidate-details-section">
//           <h2 className="section-title">Education</h2>

//           <div className="education-item">
//             <div className="initial-circle education-modern-college">M</div>
//             <div className="education-info">
//               <h3>Bachelors in Fine Arts</h3>
//               <p className="duration">2012 - 2014</p>
//               <p className="university">Modern College</p>
//               <p className="description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//               </p>
//             </div>
//           </div>

//           <div className="education-item">
//             <div className="initial-circle education-harvard">H</div>
//             <div className="education-info">
//               <h3>Computer Science</h3>
//               <p className="duration">2008 - 2012</p>
//               <p className="university">Harvard University</p>
//               <p className="description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//               </p>
//             </div>
//           </div>

//           <h2 className="section-title">Work & Experience</h2>

//           <div className="work-experience-item">
//             <div className="initial-circle work-spotify">S</div>
//             <div className="work-experience-info">
//               <h3>Product Designer</h3>
//               <p className="duration">2008 - 2012</p>
//               <p className="company">Spotify Inc.</p>
//               <p className="description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//               </p>
//             </div>
//           </div>

//           {/* Add more work experience items as needed following the same structure */}

//         </div>

//         <div className="sidebar-container"> {/* New container for both sidebar elements */}
//           {/* Candidate Info Sidebar */}
//           <div className="candidate-sidebar">
//             <div className="sidebar-info-card">
//               <div className="info-item">
//                 <i className="fas fa-briefcase"></i> {/* Font Awesome icon */}
//                 <p><strong>Experience:</strong> <span>0.2 Years</span></p>
//               </div>
//               <div className="info-item">
//                 <i className="fas fa-user-friends"></i> {/* Font Awesome icon */}
//                 <p><strong>Age:</strong> <span>28-33 Years</span></p>
//               </div>
//               <div className="info-item">
//                 <i className="fas fa-money-bill-wave"></i> {/* Font Awesome icon */}
//                 <p><strong>Current Salary:</strong> <span>11K - 15K</span></p>
//               </div>
//               <div className="info-item">
//                 <i className="fas fa-money-bill-wave"></i> {/* Font Awesome icon */}
//                 <p><strong>Expected Salary:</strong> <span>26K - 30K</span></p>
//               </div>
//               <div className="info-item">
//                 <i className="fas fa-venus-mars"></i> {/* Font Awesome icon */}
//                 <p><strong>Gender:</strong> <span>Female</span></p>
//               </div>
//               <div className="info-item">
//                 <i className="fas fa-language"></i> {/* Font Awesome icon */}
//                 <p><strong>Language:</strong> <span>English, German, Spanish</span></p>
//               </div>
//               <div className="info-item">
//                 <i className="fas fa-graduation-cap"></i> {/* Font Awesome icon */}
//                 <p><strong>Education Level:</strong> <span>Master Degree</span></p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Sidebar */}
//           <div className="sidebar-contact-form">
//             <div className="contact-us-card">
//               <h3>Contact Us</h3>
//               <div className="form-group">
//                 <input type="text" placeholder="Your Name" />
//               </div>
//               <div className="form-group">
//                 <input type="email" placeholder="Email Address" />
//               </div>
//               <div className="form-group">
//                 <textarea placeholder="Message"></textarea>
//               </div>
//               <button className="send-message-btn">Send Message</button>
//             </div>
//           </div>
//         </div>
//       </div>
//           <div className="gallery">
//             {/* <img src={video-img} alt="sujatha" className="gallery-img" /> */}
//             <img src={v} alt="office" className="gallery-img" />
//             <img src={img2} alt="workspace" className="gallery-img" />
//             <img src={img3} alt="city" className="gallery-img" />
//             <img src={img4} alt="team" className="gallery-img" />
//           </div>
//           <p>Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. 
//             It is the holding company for Moody’s Investors Service (MIS), an American credit rating agency,
//              and Moody’s Analytics (MA), an American provider of financial analysis software and services.</p>
//              <p>Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings. 
//                 Moody’s was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate
//                  company that was listed on the NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, 
//                  Moody’s Investors Service, the rating agency, and Moody’s Analytics, with all of its other products.</p>

//           <h1>3 Others jobs available</h1>
//           <p>2020 jobs live - 293 added today.</p>

//           <div className="job-card">
//             <img src={im1} alt="Segment Logo" />
//             <div>
//               <h4>Software Engineer (Android), Libraries</h4>
//               <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
//               <div className="tags">
//                 <span className="tag blue">Full Time</span>
//                 <span className="tag green">Private</span>
//                 <span className="tag yellow">Urgent</span>
//               </div>
//             </div>
//           </div>
//             <div className="job-card">
//             <img src={im2} alt="Segment Logo" />
//             <div>
//               <h4>Software Engineer (Android), Libraries</h4>
//               <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
//               <div className="tags">
//                 <span className="tag blue">Full Time</span>
//                 <span className="tag green">Private</span>
//                 <span className="tag yellow">Urgent</span>
//               </div>
//             </div>
//           </div>
//             <div className="job-card">
//             <img src={im3} alt="Segment Logo" />
//             <div>
//               <h4>Software Engineer (Android), Libraries</h4>
//               <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
//               <div className="tags">
//                 <span className="tag blue">Full Time</span>
//                 <span className="tag green">Private</span>
//                 <span className="tag yellow">Urgent</span>
//               </div>
//             </div>
//           </div>


//         </div>

//         <div className="sidebar">
//           <div className="sidebar-card">
//             <p><strong>Primary industry:</strong> <span>Software</span></p>
//             <p><strong>Company size:</strong> <span>501-1,000</span></p>
//             <p><strong>Founded in:</strong> <span>2011</span></p>
//             <p><strong>Phone:</strong> <span>123 456 7890</span></p>
//             <p><strong>Email:</strong> <span>info@udemy.com</span></p>
//             <p><strong>Location:</strong> <span>London, UK</span></p>
//             <p><strong>Social media:</strong> 
//               <span className="social-icons">
//                 <i className="fab fa-facebook"></i>
//                 <i className="fab fa-twitter"></i>
//                 <i className="fab fa-instagram"></i>
//                 <i className="fab fa-linkedin"></i>
//               </span>
//             </p>
//             <a className="website-link" href="https://www.udemy.com" target="_blank" rel="noreferrer">
//               www.udemy.com
//             </a>
//           </div>

//           {/* Map section here */}
//           <div className="map-section">
//             <h4 className="map-title">Job Location</h4>
//             <iframe
//               title="company-map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.224685269733!2d-74.0060158!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ1LjgiTiA3NMKwMDAnMzguOCJX!5e0!3m2!1sen!2sin!4v1623423432487!5m2!1sen!2sin"
//               width="100%"
//               height="200"
//               style={{ border: 0, borderRadius: '10px' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployersSingle;
// // import React from 'react';
// // import './CandidatesSingle.css';
// // import candidateAboutImg from '../assets/img1.png'; // Assuming img1.png is the image with people
// // // You'll likely need a play icon, either an image or from Font Awesome
// // // import playIcon from '../assets/play-icon.png';

// // const CandidatesSingle = () => {
// //   return (
// //     <div className="candidates-single-page">
    
// //       <div className="main-content-area">
// //         <div className="candidate-details-section">
// //           {/* Candidates About Section */}
// //           <div className="candidates-about-section">
// //             <h2 className="section-title">Candidates About</h2>
// //             <div className="about-image-wrapper">
// //               <img src={candidateAboutImg} alt="Candidate Team" className="about-main-image" />
// //               <div className="play-button-overlay">
// //                 <i className="fas fa-play"></i> {/* Font Awesome play icon */}
// //                 {/* Or if using an image: <img src={playIcon} alt="Play Video" className="play-icon" /> */}
// //               </div>
// //             </div>
// //             <p className="about-description">
// //               Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam.
// //               Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae
// //               aliquam elit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare
// //               ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.
// //             </p>
// //             <p className="about-description">
// //               Integer in purus quis nisl maximus efficitur quis sed justo. Ut efficitur velil sed aule pellentesque, id venenatis
// //               felis tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
// //             </p>
// //           </div>

// //           {/* Education Section */}
// //           <div className="education-section">
// //             <h2 className="section-title">Education</h2>

// //             <div className="education-item">
// //               <div className="initial-circle education-modern-college">M</div>
// //               <div className="education-info">
// //                 <h3>Bachelors in Fine Arts</h3>
// //                 <p className="duration">2012 - 2014</p>
// //                 <p className="university">Modern College</p>
// //                 <p className="description">
// //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="education-item">
// //               <div className="initial-circle education-harvard">H</div>
// //               <div className="education-info">
// //                 <h3>Computer Science</h3>
// //                 <p className="duration">2008 - 2012</p>
// //                 <p className="university">Harvard University</p>
// //                 <p className="description">
// //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Work & Experience Section */}
// //           <div className="work-experience-section">
// //             <h2 className="section-title">Work & Experience</h2>
// //             <div className="work-experience-item">
// //               <div className="initial-circle work-spotify">S</div>
// //               <div className="work-experience-info">
// //                 <h3>Product Designer</h3>
// //                 <p className="duration">2008 - 2012</p>
// //                 <p className="company">Spotify Inc.</p>
// //                 <p className="description">
// //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
// //                 </p>
// //               </div>
// //             </div>
// //             {/* Add more work experience items as needed */}
// //           </div>

// //         </div>

// //         <div className="sidebar-container">
// //           {/* Candidate Info Sidebar */}
// //           <div className="candidate-sidebar-info">
// //             <div className="sidebar-info-card">
// //               <div className="info-item">
// //                 <i className="fas fa-briefcase"></i> {/* Font Awesome icon */}
// //                 <p><strong>Experience:</strong> <span>0.2 Years</span></p>
// //               </div>
// //               <div className="info-item">
// //                 <i className="fas fa-user-friends"></i> {/* Font Awesome icon */}
// //                 <p><strong>Age:</strong> <span>28-33 Years</span></p>
// //               </div>
// //               <div className="info-item">
// //                 <i className="fas fa-money-bill-wave"></i> {/* Font Awesome icon */}
// //                 <p><strong>Current Salary:</strong> <span>11K - 15K</span></p>
// //               </div>
// //               <div className="info-item">
// //                 <i className="fas fa-money-bill-wave"></i> {/* Font Awesome icon */}
// //                 <p><strong>Expected Salary:</strong> <span>26K - 30K</span></p>
// //               </div>
// //               <div className="info-item">
// //                 <i className="fas fa-venus-mars"></i> {/* Font Awesome icon */}
// //                 <p><strong>Gender:</strong> <span>Female</span></p>
// //               </div>
// //               <div className="info-item">
// //                 <i className="fas fa-language"></i> {/* Font Awesome icon */}
// //                 <p><strong>Language:</strong> <span>English, German, Spanish</span></p>
// //               </div>
// //               <div className="info-item">
// //                 <i className="fas fa-graduation-cap"></i> {/* Font Awesome icon */}
// //                 <p><strong>Education Level:</strong> <span>Master Degree</span></p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact Form Sidebar */}
// //           <div className="sidebar-contact-form">
// //             <div className="contact-us-card">
// //               <h3>Contact Us</h3>
// //               <div className="form-group">
// //                 <input type="text" placeholder="Your Name" />
// //               </div>
// //               <div className="form-group">
// //                 <input type="email" placeholder="Email Address" />
// //               </div>
// //               <div className="form-group">
// //                 <textarea placeholder="Message"></textarea>
// //               </div>
// //               <button className="send-message-btn">Send Message</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CandidatesSingle;

import React from 'react';
import './CandidatesSingle.css';
import candidateAboutImg from '../assets/img1.png';
import darlene from '../assets/darlene.png';
import { Link } from 'react-router-dom';
 // Assuming img1.png is the image with people
// You'll likely need a play icon, either an image or from Font Awesome
// import playIcon from '../assets/play-icon.png';

const CandidatesSingle = () => {
  return (
    
    <div className="candidates-single-page">
      {/* Top Navigation Bar - Based on the screenshot */}
      {/* Assuming a global Navbar component or include it directly if it's unique to this page */}
      <div className="employer-header">
        <img src={darlene} alt="Company Logo" className="company-logo" />
         <div className="company-details">
          <h2>Darlene Roberston</h2>
            <p>UI Designer &nbsp;&nbsp;London, UK&nbsp; &nbsp;  $99 / hour &nbsp;  &nbsp; Member Since,Aug 19,2020</p>
            
        
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
                {/* Or if using an image: <img src={playIcon} alt="Play Video" className="play-icon" /> */}
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
            {/* Add more work experience items as needed */}
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
          

          {/* NEW: Professional Skills Section */}
          <div className="professional-skills-section">
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
