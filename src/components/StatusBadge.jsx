import React from 'react';

const colorMap = {
  Working: 'bg-green-200 text-green-800',
  Break:   'bg-yellow-200 text-yellow-800',
  Meeting: 'bg-blue-200 text-blue-800',
  Offline: 'bg-gray-200 text-gray-800'
};

const StatusBadge = ({ status, className = '' }) => (
  <span className={`${colorMap[status] || 'bg-gray-200 text-gray-800'} px-2 py-1 rounded-full text-sm font-medium ${className}`}> 
    {status}
  </span>
);

export default StatusBadge;