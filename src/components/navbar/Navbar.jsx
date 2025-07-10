import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 shadow bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">Superio</div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Find Jobs</li>
        <li className="hover:text-blue-600 cursor-pointer">Employers</li>
        <li className="hover:text-blue-600 cursor-pointer">Candidates</li>
        <li className="hover:text-blue-600 cursor-pointer">Blog</li>
        <li className="hover:text-blue-600 cursor-pointer">Pages</li>
      </ul>
      <div className="hidden md:flex space-x-3 items-center">
        <button className="text-blue-600 font-medium hover:underline">Upload your CV</button>
        <button className="text-blue-600 font-medium hover:underline">Login / Register</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Job Post</button>
      </div>
    </nav>
  );
};

export default Navbar;
