
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          {/* Superio Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg">S</div>
              <span className="font-semibold text-lg">Superio</span>
            </div>
            <p className="font-semibold mb-1">Call us</p>
            <a href="tel:1234567890" className="text-blue-600 font-medium block mb-2">123 456 7890</a>
            <p>329 Queensberry Street, North Melbourne VIC</p>
            <p>3051, Australia.</p>
            <p className="mt-1">support@superio.com</p>
          </div>

          {/* For Candidates */}
          <div>
            <h4 className="font-semibold mb-2">For Candidates</h4>
            <ul className="space-y-1">
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Browse Categories</a></li>
              <li><a href="#">Candidate Dashboard</a></li>
              <li><a href="#">Job Alerts</a></li>
              <li><a href="#">My Bookmarks</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="font-semibold mb-2">For Employers</h4>
            <ul className="space-y-1">
              <li><a href="#">Browse Candidates</a></li>
              <li><a href="#">Employer Dashboard</a></li>
              <li><a href="#" className="text-blue-600">— Add Job</a></li>
              <li><a href="#">Job Packages</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <ul className="space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Job Page Invoice</a></li>
              <li><a href="#">Terms Page</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Helpful Resources */}
          <div>
            <h4 className="font-semibold mb-2">Helpful Resources</h4>
            <ul className="space-y-1">
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Center</a></li>
              <li><a href="#">Security Center</a></li>
              <li><a href="#">Accessibility Center</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-8 pt-6 text-sm text-gray-500">
          <p>© 2025 Superio by ib-themes. All Right Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
