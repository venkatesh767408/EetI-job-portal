// import './CandidatesList.css';

// import darleneLogo from '../assets/darlene.png';
// import FloydLogo from '../assets/Floyd.png';
// import LeslieLogo from '../assets/Leslie.png';
// import wadeLogo from '../assets/wade.png';

// export const candidates = [
//   {
//     id: 1,
//     name: "Darlene Roberston",
//     role: "UI Designer",
//     location: "London, UK",
//     rate: "$99 / hour",
//     tags: ["App", "Design", "Digital"],
//     logo: darleneLogo,
//     button: "View profile"
//   },
//   {
//     id: 2,
//     name: "Wade Warren",
//     role: "Developer",
//     location: "London, UK",
//     rate: "$94 / hour",
//     tags: ["App", "Design", "Digital"],
//     logo: wadeLogo,
//     button: "View profile"
//   },
//   {
//     id: 3,
//     name: "Leslie Alexander",
//     role: "Marketing Expert",
//     location: "London, UK",
//     rate: "$94 / hour",
//     tags: ["App", "Design", "Digital"],
//     logo: LeslieLogo,
//     button: "View profile"
//   },
//   {
//     id: 4,
//     name: "Floyd Miles",
//     role: "Developer",
//     location: "London, UK",
//     rate: "$94 / hour",
//     tags: ["App", "Design", "Digital"],
//     logo: FloydLogo,
//     button: "View profile"

//   },

// ]



// const CandidatesList = () => {
//   return (
//     <div className="candidates-list-page">
//       {/* Header Section */}
//       <div className="header-section">
//         <div className="title-area">
//           <h2>Candidates</h2>
//           <p className="breadcrumb">Home / Candidates</p>
//         </div>
//         <div className="right-filters">
//           <select>
//             <option>Sort by (default)</option>
//             <option>Newest</option>
//             <option>oldest</option>

//           </select>
//           <select>
//             <option>All</option>
//             <option>15 per page</option>
//             <option>20 per page</option>
//             <option>25 per page</option>
//           </select>
//         </div>
//       </div>

//       {/* Main Layout */}
//       <div className="candidates-container">
//         <div className="filter-section">
//           <h3>Search by Keywords</h3>
//           <input type="text" placeholder="Job title, keywords, or company" />
//           <h3>Location</h3>
//           {/* <h3>Location</h3>
//           <input type="text" placeholder="City or postcode" /> */}
//           <input type="text" placeholder="City or postcode" />
//           <p className="range-label">Radius around selected destination</p>
//           <input type="range" min="10" max="200" defaultValue="100" />
//           <p className="range-value">100km</p>


//           <h4>Category</h4>
//           <select>
//             <option>Choose a category</option>
//             <option>Residential</option>
//             <option>Commercial</option>
//             <option>Industrial</option>
//             <option>Apartments</option>
//           </select>
//           <h4>Candidate Gender</h4>
//           <select>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//           <h4>Date Posted</h4>
//           <div className="radio-group">
//             <label><input type="radio" name="date" /> All</label>
//             <label><input type="radio" name="date" /> Last Hour</label>
//             <label><input type="radio" name="date" /> Last 24 Hour</label>
//             <label><input type="radio" name="date" /> Last 7 Days</label>
//             <label><input type="radio" name="date" /> Last 14 Days</label>
//             <label><input type="radio" name="date" /> Last 30 Days</label>
//           </div>
//           <h4>Experience</h4>
//           <div className="checkbox-group">
//             <label><input type="checkbox" /> Fresh</label>
//             <label><input type="checkbox" /> 1 Year</label>
//             <label><input type="checkbox" /> 2 Year</label>
//             <label><input type="checkbox" /> 3 Year</label>
//             <label><input type="checkbox" /> 4 Year</label>
//           </div>

//           <h4>Qualification</h4>
//           <div className="checkbox-group">
//             <label><input type="checkbox" /> Certificate</label>
//             <label><input type="checkbox" /> Associate Degree</label>
//             <label><input type="checkbox" /> Bachelor Degree</label>
//             <label><input type="checkbox" /> Master's Degree</label>
//             <label><input type="checkbox" /> Doctorate Degree</label>
//           </div>

//         </div>

//         <div className="candidates-section">
//           {candidates.map((company, index) => (
//             <div className="condidate-card" key={index}>
//               <img src={company.logo} alt={company.name} />
//               <div className="candidate-details">
//                 <div className="info-top">
//                   <h3>{company.name}</h3>
//                   <p className="role">{company.role}</p>
//                   <p className="location">{company.location} &nbsp;|&nbsp; {company.rate}</p>
//                 </div>
//                 <div className="tags">
//                   {company.tags.map((tag, idx) => (
//                     <span key={idx} className="tag">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//               <div className="view-profile">
//                 <button>{company.button}</button>
//               </div>
//             </div>
//           ))}

//           {/* Show More */}
//           <div className="show-more-section">
//             <p>Showing {candidates.length} of 497 Jobs</p>
//             <button className="show-more-btn">Show More</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CandidatesList;


import './CandidatesList.css';
import udemyLogo from '../assets/darlene.png';
import wadeLogo from '../assets/wade.png';
import LeslieLogo from '../assets/Leslie.png';
import FloydLogo from '../assets/Floyd.png';
const companies = [
  {
    name: 'Darlene Robertson',
    industry: "UI Designer",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: udemyLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
  {
    name: 'Wade Warren',
    industry: "Developer",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: wadeLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
  {
    name: 'Leslie Alexander',
    industry: "Marketing Expert",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: LeslieLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
  {
    name: 'Floyd Miles',
    industry: "Developer",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: FloydLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
  // ➕ Add more companies to test scroll
  {
    name: 'Darlene Robertson',
    industry: "UI Designer",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: udemyLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
  {
    name: 'Wade Warren',
    industry: "Developer",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: wadeLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
  {
    name: 'Leslie Alexander',
    industry: "Marketing Expert",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: LeslieLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
  {
    name: 'Floyd Miles',
    industry: "Developer",
    location: 'London, UK',
    rate: '$99 / hour',
    logo: FloydLogo,
    tags: ["App", "Design", "Digital"],
    openJobs: 'view profile'
  },
];

const CandidatesList = () => {
  return (
    <div className="employers-list-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="title-area">
          <h2>Candidates</h2>
          <p className="breadcrumb">Home / Candidates</p>
        </div>
        <div className="right-filters">
          <select>
            <option>Sort by (default)</option>
            <option>Newest</option>
            <option>oldest</option>
          </select>
          <select>
            <option>All</option>
            <option>15 per page</option>
            <option>20 per page</option>
            <option>25 per page</option>
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

        <div className="companies-section">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <img src={company.logo} alt={company.name} />
              <div>
                <h4>{company.name}</h4>
                <p>{company.industry}</p>
                <p>{company.location}</p>
                <p>{company.rate}</p>
                <p>{company.tags}</p>
                
              </div>
              <div className="open-jobs">
                {company.openJobs}
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

export default CandidatesList;
