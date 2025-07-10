import React from 'react';
import suitMan from "../../assets/images/download.jpg"; // make sure this path is correct

const HeroSection = () => {
  return (
    <section className="bg-[#f4f6fb] py-16 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* LEFT TEXT */}
        <div className="text-left w-full md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            There Are <span className="text-blue-600">93,178</span> Postings Here For you!
          </h1>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Find Jobs, Employment & Career Opportunities
          </p>

          {/* Search Fields */}
          <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-3 md:gap-4">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="px-4 py-3 rounded border w-full md:w-64 text-sm"
            />
            <input
              type="text"
              placeholder="City or postcode"
              className="px-4 py-3 rounded border w-full md:w-64 text-sm"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded text-sm hover:bg-blue-700">Find Jobs</button>
          </div>

          {/* Popular Searches */}
          <p className="mt-4 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Popular Searches:</span> Designer, Web, Developer, IOS, Php, Senior, Engineer
          </p>
        </div>

        {/* RIGHT IMAGE + FLOATING CARDS */}
        <div className="w-full md:w-1/2 relative mb-12 md:mb-0 flex justify-center items-center">
          {/* Rounded Image */}
          <img
            src={suitMan}
            alt="Hero"
            className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-cover rounded-full shadow-lg z-10"
          />

          {/* Work Inquiry */}
          <div className="absolute top-4 left-4 bg-white shadow-md rounded-lg p-3 text-sm flex items-center gap-2 w-56">
            <span className="text-yellow-500 text-lg">📨</span>
            <div>
              <p className="font-medium">Work Inquiry From</p>
              <p className="text-gray-500">Ali Tufan</p>
            </div>
          </div>

          {/* Upload CV */}
          <div className="absolute top-4 right-4 bg-white shadow-md rounded-lg p-3 text-sm flex items-center gap-2 w-52">
            <span className="text-blue-500 text-lg">⬆️</span>
            <div>
              <p className="font-medium">Upload Your CV</p>
              <p className="text-gray-500 text-xs">It only takes a few seconds</p>
            </div>
          </div>

          {/* Creative Agency */}
          <div className="absolute bottom-4 left-4 bg-white shadow-md rounded-lg p-3 text-sm flex items-center gap-2 w-52">
            <span className="text-pink-500 text-lg">🏢</span>
            <div>
              <p className="font-medium">Creative Agency</p>
              <p className="text-gray-500">Startup</p>
            </div>
          </div>

          {/* 10k+ Candidates with avatars */}
          <div className="absolute bottom-4 right-4 bg-white shadow-md rounded-lg p-3 text-sm w-44">
            <div className="flex items-center gap-2">
              <span className="text-purple-600 text-lg">👥</span>
              <div>
                <p className="font-medium">10k+</p>
                <p className="text-gray-500">Candidates</p>
              </div>
            </div>
            <div className="flex mt-2 -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/thumb/men/${i + 10}.jpg`}
                  alt={`User ${i + 1}`}
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100 rounded-full opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default HeroSection;
