
//   import React from 'react';
// import './EmployersList.css';

// const companies = [
//   {
//     name: 'Udemy',
//     location: 'London, UK',
//     industry: 'Accounting / Finance',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg',
//     openJobs: 15
//   },
//   {
//     name: 'Stripe',
//     location: 'London, UK',
//     industry: 'Accounting / Finance',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Stripe_Logo%2C_revised_2016.svg',
//     openJobs: 22
//   },
//   {
//     name: 'Dropbox',
//     location: 'London, UK',
//     industry: 'Accounting / Finance',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dropbox_Icon.svg',
//     openJobs: 22
//   }
// ];

// const EmployersList = () => {
//   return (
//     <div className="employers-list-page">
//       <div className="header-section">
//         <h2>Companies</h2>
//         <p className="breadcrumb">Home / Companies</p>
//       </div>

//       <div className="employers-container">
//         <div className="filter-section">
//           <h3>Search by Keywords</h3>
//           <input type="text" placeholder="Job title, keywords, or company" />
//           <h3>Location</h3>
//           <input type="text" placeholder="City or postcode" />
//         </div>

//         <div className="companies-section">
//           {companies.map((company, index) => (
//             <div className="company-card" key={index}>
//               <img src={company.logo} alt={company.name} />
//               <div>
//                 <h4>{company.name}</h4>
//                 <p>{company.location}</p>
//                 <p>{company.industry}</p>
//               </div>
//               <div className="open-jobs">
//                 Open Jobs — {company.openJobs}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployersList;
//  import React from 'react';
// import './EmployersList.css';

// const companies = [
//   {
//     name: 'Udemy',
//     location: 'London, UK',
//     industry: 'Accounting / Finance',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg',
//     openJobs: 15
//   },
//   {
//     name: 'Stripe',
//     location: 'London, UK',
//     industry: 'Accounting / Finance',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Stripe_Logo%2C_revised_2016.svg',
//     openJobs: 22
//   },
//   {
//     name: 'Dropbox',
//     location: 'London, UK',
//     industry: 'Accounting / Finance',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dropbox_Icon.svg',
//     openJobs: 22
//   }
// ];

// const EmployersList = () => {
//   return (
//     <div className="employers-list-page">
//       {/* Title + Filters Section */}
//       <div className="header-section">
//         <div className="title-area">
//           <h2>Companies</h2>
//           <p className="breadcrumb">Home / Companies</p>
//         </div>
//         <div className="right-filters">
//           <select>
//             <option>Sort by (default)</option>
//             <option>Date</option>
//             <option>Company Name</option>
//             <option>Open Jobs</option>
//           </select>
//           <select>
//             <option>All</option>
//             <option>Finance</option>
//             <option>IT</option>
//             <option>Healthcare</option>
//           </select>
//         </div>
//       </div>

//       {/* Main Layout */}
//       <div className="employers-container">
//         <div className="filter-section">
//           <h3>Search by Keywords</h3>
//           <input type="text" placeholder="Job title, keywords, or company" />
         
//           <h3>Location</h3>
//           <input type="text" placeholder="City or postcode" />
           
//   <h3>Category</h3>
//   <input type="text" placeholder="Choose a category" />
  
//   <h3>Foundation Date</h3>
//   <input type="text" placeholder="e.g. 2005" />
//         </div>

        

//         <div className="companies-section">
//           {companies.map((company, index) => (
//             <div className="company-card" key={index}>
//               <img src={company.logo} alt={company.name} />
//               <div>
//                 <h4>{company.name}</h4>
//                 <p>{company.location}</p>
//                 <p>{company.industry}</p>
//               </div>
//               <div className="open-jobs">
//                 Open Jobs — {company.openJobs}
//               </div>
//             </div>
            
            
//           ))}
//         </div>
        
//       </div>
      
//     </div>
//   );
// };

// export default EmployersList;
// import React from 'react';
import './EmployersList.css';

import udemyLogo from '../assets/udemy.png';
import stripeLogo from '../assets/strip.png';
import dropboxLogo from '../assets/dropbox.png';
import figma from '../assets/figma.png';

const companies = [
  {
    name: 'Udemy',
    location: 'London, UK',
    industry: 'Accounting / Finance',
    logo: udemyLogo,
    openJobs: 15
  },
  {
    name: 'Stripe',
    location: 'London, UK',
    industry: 'Accounting / Finance',
    logo: stripeLogo,
    openJobs: 22
  },
  {
    name: 'Dropbox',
    location: 'London, UK',
    industry: 'Accounting / Finance',
    logo: dropboxLogo,
    openJobs: 22
  },
  {
    name: 'Figma',
    location: 'London, UK',
    industry: 'Accounting / Finance',
    logo: figma,
    openJobs: 21
  },
  // ➕ Add more companies to test scroll
  {
    name: 'Google',
    location: 'California, US',
    industry: 'Tech',
    logo: figma,
    openJobs: 48
  },
  {
    name: 'Amazon',
    location: 'Seattle, US',
    industry: 'E-commerce',
    logo: figma,
    openJobs: 100
  },
  {
    name: 'Meta',
    location: 'Menlo Park, US',
    industry: 'Social Media',
    logo: figma,
    openJobs: 55
  }
];

const EmployersList = () => {
  return (
    <div className="employers-list-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="title-area">
          <h2>Companies</h2>
          <p className="breadcrumb">Home / Companies</p>
        </div>
        <div className="right-filters">
          <select>
            <option>Sort by (default)</option>
            <option>Date</option>
            <option>Company Name</option>
            <option>Open Jobs</option>
          </select>
          <select>
            <option>All</option>
            <option>Finance</option>
            <option>IT</option>
            <option>Healthcare</option>
          </select>
        </div>
      </div>

      {/* Main Layout */}
      <div className="employers-container">
        <div className="filter-section">
          <h3>Search by Keywords</h3>
          <input type="text" placeholder="Job title, keywords, or company" />
           <h3>Location</h3>
          {/* <h3>Location</h3>
          <input type="text" placeholder="City or postcode" /> */}
          <input type="text" placeholder="City or postcode" />
    <p className="range-label">Radius around selected destination</p>
    <input type="range" min="10" max="200" defaultValue="100" />
    <p className="range-value">100km</p>

          <h3>Category</h3>
          <input type="text" placeholder="Choose a category" />
          

          <h3>Foundation Date</h3>
        
    <input type="range" min="10" max="200" defaultValue="100" />
    <p className="range-value">1900 - 2028</p>
          

          {/* Recruiting Widget */}
          <div className="recruiting-section">
            <h3>Recruiting?</h3>
            <p>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
            <button>Start Recruiting Now</button>
          </div>
        </div>

        <div className="companies-section">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <img src={company.logo} alt={company.name} />
              <div>
                <h4>{company.name}</h4>
                <p>{company.location}</p>
                <p>{company.industry}</p>
              </div>
              <div className="open-jobs">
                Open Jobs — {company.openJobs}
              </div>
            </div>
          ))}

          {/* Show More */}
          <div className="show-more-section">
            <p>Showing {companies.length} of 497 Jobs</p>
            <button className="show-more-btn">Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployersList;
