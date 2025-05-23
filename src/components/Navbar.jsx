import React from 'react';

const Navbar = ({ activeTab, onTabChange }) => {
  const tabs = ['Queue', 'Table', 'History'];

  return (
    <div className="relative">
      {/* Full-width horizontal line with faded white color */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
      
      <div className="flex justify-between items-center overflow-x-auto relative z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative flex-1 py-2 md:py-4 px-1 text-center text-xs sm:text-sm md:text-base font-medium transition-all duration-200 
              ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
          >
            {/* Active Tab Gradient + Glow */}
            {activeTab === tab && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#3c3c3c] to-transparent rounded-t-xl z-0" />
            )}

            <span className="relative z-10 whitespace-nowrap">{tab}</span>

            {/* Active Tab Underline */}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white z-10"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;