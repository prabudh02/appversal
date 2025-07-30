import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 mt-3">
    <div
      className="h-4 rounded-full bg-blue-500"
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default ProgressBar;