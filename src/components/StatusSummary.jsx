import React from 'react';

const statuses = ['Working', 'Meeting', 'Break', 'Offline'];

const StatusSummary = ({ members }) => {
  const counts = statuses.reduce((acc, status) => {
    acc[status] = members.filter(m => m.status === status).length;
    return acc;
  }, {});

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Status Summary</h2>
      <ul className="space-y-2">
        {statuses.map(status => (
          <li key={status} className="flex justify-between">
            <span className="capitalize text-gray-700 dark:text-gray-200">{status}</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">{counts[status]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusSummary;
