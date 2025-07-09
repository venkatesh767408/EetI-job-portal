import React from 'react';
import SuitMan from '../../assets/images/suit-man.png';

const HeroSection = () => {
  return (
    <section className="bg-[#f4f6fb] py-16 px-4 md:px-12 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* LEFT TEXT SIDE */}
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            There Are <span className="text-blue-600">93,178</span> Postings Here For you!
          </h1>
          <p className="mt-3 text-gray-600 text-sm md:text-base">Find Jobs, Employment & Career Opportunities</p>

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

          {/* ✅ Popular Searches */}
          <p className="mt-3 text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Popular Searches:</span> Designer, Developer, Web, IOS, PHP, Senior, Engineer
          </p>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
          <img src={SuitMan} alt="Suit Man" className="w-[320px] md:w-[400px] object-contain" />

          {/* 📨 Work Inquiry */}
          <div className="absolute -top-6 -left-4 hidden md:block">
            <div className="bg-white shadow-md p-3 rounded-lg text-sm flex items-center gap-2 w-56">
              <span className="text-yellow-500 text-lg">📨</span>
              Work Inquiry From Ali Tufan
            </div>
          </div>

          {/* 👥 10k+ Candidates + Tiny Online Images */}
          <div className="absolute bottom-12 left-0 hidden md:block">
            <div className="bg-white shadow-md p-3 rounded-lg text-sm w-56">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-600 text-lg">👥</span>
                <span>10k+ Candidates</span>
              </div>
              <div className="flex space-x-1 mt-1 pl-5">
                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="u1" className="w-6 h-6 rounded-full border" />
                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="u2" className="w-6 h-6 rounded-full border" />
                <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="u3" className="w-6 h-6 rounded-full border" />
                <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="u4" className="w-6 h-6 rounded-full border" />
                <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="u5" className="w-6 h-6 rounded-full border" />
              </div>
            </div>
          </div>

          {/* 🏢 Creative Agency */}
          <div className="absolute -bottom-4 right-0 hidden md:block">
            <div className="bg-white shadow-md p-3 rounded-lg text-sm flex items-center gap-2 w-56">
              <span className="text-pink-500 text-lg">🏢</span>
              Creative Agency
            </div>
          </div>

          {/* 📥 Upload Your CV */}
          <div className="absolute -top-6 right-0 hidden md:block">
            <div className="bg-white shadow-md p-3 rounded-lg text-sm flex items-start gap-2 w-60">
              <span className="text-blue-600 text-xl">📥</span>
              <div>
                <p className="font-semibold">Upload Your CV</p>
                <p className="text-gray-500 text-xs">It only takes a few seconds</p>
              </div>
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
