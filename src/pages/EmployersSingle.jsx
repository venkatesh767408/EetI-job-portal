// import React from 'react';
// import './EmployersSingle.css';

// const EmployersSingle = () => {
//   return (
//     <div className="employer-single-page">
//       <h2>Moody’s Corporation</h2>
//       <p>
//        <b>About Company</b> 
// Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. It is the holding company for Moody’s Investors Service (MIS), an American credit rating agency, and Moody’s Analytics (MA), an American provider of financial analysis software and services.

//         Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. 
//         It is the holding company for Moody’s Investors Service (MIS), and Moody’s Analytics (MA), an American provider 
//         of financial analysis software and services.
//       </p>
//       <p>
//         Founded in 1909, acquired by Dun & Bradstreet in 1962, and split into two divisions in 2007.
//       </p>

//       <div className="gallery">
//         <img src="https://source.unsplash.com/300x200/?office" alt="office" />
//         <img src="https://source.unsplash.com/300x200/?workspace" alt="workspace" />
//         <img src="https://source.unsplash.com/300x200/?city" alt="city" />
//         <img src="https://source.unsplash.com/300x200/?team" alt="team" />
//       </div>
//     </div>
//   );
// };

// export default EmployersSingle;
import React from 'react';
import './EmployersSingle.css';
import logo from '../assets/udemy.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';
const EmployersSingle = () => {
  return (
    <div className="employer-single-page">
      <div className="employer-header">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <div className="company-details">
          <h2>Moody’s Corporation</h2>
             <p>New York, USA &nbsp; &nbsp;  Financial Services &nbsp;  &nbsp; +1 212-553-0300&nbsp; &nbsp;  info@moodys.com</p>
        
          <button className="open-jobs-btn">Open Jobs — 15</button>
        </div>
        <button className="private-message-btn">Private Message</button>
      </div>

      <div className="content-area">
        <div className="about-section">
          <h3>About Company</h3>
          <p>
            Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company.
            It is the holding company for Moody’s Investors Service (MIS), and Moody’s Analytics (MA), an American provider 
            of financial analysis software and services.
          </p>
          <p>
            Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings.
            Moody’s was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate
            company that was listed on the NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, 
            Moody’s Investors Service, the rating agency, and Moody’s Analytics, with all of its other products.
          </p>

          <div className="gallery">
            <img src={img1} alt="office" className="gallery-img" />
            <img src={img2} alt="workspace" className="gallery-img" />
            <img src={img3} alt="city" className="gallery-img" />
            <img src={img4} alt="team" className="gallery-img" />
          </div>
          <p>Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. 
            It is the holding company for Moody’s Investors Service (MIS), an American credit rating agency,
             and Moody’s Analytics (MA), an American provider of financial analysis software and services.</p>
             <p>Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings. 
                Moody’s was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate
                 company that was listed on the NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, 
                 Moody’s Investors Service, the rating agency, and Moody’s Analytics, with all of its other products.</p>

          <h1>3 Others jobs available</h1>
          <p>2020 jobs live - 293 added today.</p>

          <div className="job-card">
            <img src={im1} alt="Segment Logo" />
            <div>
              <h4>Software Engineer (Android), Libraries</h4>
              <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
              <div className="tags">
                <span className="tag blue">Full Time</span>
                <span className="tag green">Private</span>
                <span className="tag yellow">Urgent</span>
              </div>
            </div>
          </div>
            <div className="job-card">
            <img src={im2} alt="Segment Logo" />
            <div>
              <h4>Software Engineer (Android), Libraries</h4>
              <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
              <div className="tags">
                <span className="tag blue">Full Time</span>
                <span className="tag green">Private</span>
                <span className="tag yellow">Urgent</span>
              </div>
            </div>
          </div>
            <div className="job-card">
            <img src={im3} alt="Segment Logo" />
            <div>
              <h4>Software Engineer (Android), Libraries</h4>
              <p>Segment &nbsp; | &nbsp; London, UK &nbsp; | &nbsp; 11 hours ago &nbsp; | &nbsp; $35k - $45k</p>
              <div className="tags">
                <span className="tag blue">Full Time</span>
                <span className="tag green">Private</span>
                <span className="tag yellow">Urgent</span>
              </div>
            </div>
          </div>


        </div>

        <div className="sidebar">
          <div className="sidebar-card">
            <p><strong>Primary industry:</strong> <span>Software</span></p>
            <p><strong>Company size:</strong> <span>501-1,000</span></p>
            <p><strong>Founded in:</strong> <span>2011</span></p>
            <p><strong>Phone:</strong> <span>123 456 7890</span></p>
            <p><strong>Email:</strong> <span>info@udemy.com</span></p>
            <p><strong>Location:</strong> <span>London, UK</span></p>
            <p><strong>Social media:</strong> 
              <span className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
              </span>
            </p>
            <a className="website-link" href="https://www.udemy.com" target="_blank" rel="noreferrer">
              www.udemy.com
            </a>
          </div>

          {/* Map section here */}
          <div className="map-section">
            <h4 className="map-title">Job Location</h4>
            <iframe
              title="company-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.224685269733!2d-74.0060158!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ1LjgiTiA3NMKwMDAnMzguOCJX!5e0!3m2!1sen!2sin!4v1623423432487!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployersSingle;
