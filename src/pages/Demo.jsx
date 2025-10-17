import React from 'react';
import CodeProfile from './CodeProfile';
import StatsCards from './StatsCard';

const Demo = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 py-10">
      
      {/* Left Container */}
      <div className="flex-1   rounded-lg shadow-lg">
      <StatsCards></StatsCards>
      </div>

      {/* Right Container */}
      <div className="flex-1">
        <CodeProfile />
      </div>

    </div>
  );
};

export default Demo;
