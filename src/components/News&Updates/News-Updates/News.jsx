import React from 'react';

const NewsUpdatesPage = () => {
  return (
    <div className="flex w-full min-h-screen bg-black text-white font-sans">
      
      {/* Left Column: 30% for Latest News Live */}
      <div className="w-3/12 border-r border-gray-800 p-8 flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-gray-200">Latest News Live</h2>
        <div className="flex-1 overflow-y-auto">
          {/* Example of a news item */}
          <div className="mb-4 pb-4 border-b border-gray-800 last:border-b-0">
            <p className="text-sm text-gray-400">01:45 PM</p>
            <p className="mt-1 font-semibold text-gray-100">NASA announces new funding for Artemis program.</p>
          </div>
          <div className="mb-4 pb-4 border-b border-gray-800 last:border-b-0">
            <p className="text-sm text-gray-400">01:30 PM</p>
            <p className="mt-1 font-semibold text-gray-100">SpaceX prepares Falcon Heavy for next launch window.</p>
          </div>
          <div className="mb-4 pb-4 border-b border-gray-800 last:border-b-0">
            <p className="text-sm text-gray-400">12:15 PM</p>
            <p className="mt-1 font-semibold text-gray-100">ESA's new lunar rover enters final testing phase.</p>
          </div>
          {/* Add more news items as needed */}
        </div>
      </div>

      {/* Right Column: 70% for Latest Moon Missions */}
      <div className="w-9/12 p-8 flex flex-col space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-100">Latest Moon Missions</h1>
        
        {/* Div 1: Mission 1 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-gray-200">Artemis III</h3>
          <p className="text-sm text-gray-400 mt-1">Status: In development</p>
          <p className="mt-4 text-gray-300">
            The Artemis III mission aims to land the first woman and next man on the Moon, specifically at the lunar south pole.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Target Launch: September 2026
          </div>
        </div>
        
        {/* Div 2: Mission 2 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-gray-200">Chang'e 6</h3>
          <p className="text-sm text-gray-400 mt-1">Status: Completed</p>
          <p className="mt-4 text-gray-300">
            China's Chang'e 6 mission successfully returned samples from the far side of the Moon, a historic first.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Mission Date: May - June 2024
          </div>
        </div>

        {/* Div 3: Mission 3 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-gray-200">Chandrayaan-4</h3>
          <p className="text-sm text-gray-400 mt-1">Status: Planned</p>
          <p className="mt-4 text-gray-300">
            ISRO is planning the Chandrayaan-4 mission, a collaborative effort for lunar sample return.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Expected Launch: 2027
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdatesPage;