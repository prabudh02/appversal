import React from 'react';
import StatusBadge from './StatusBadge';

const MemberCard = ({ member }) => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 flex flex-col items-center">
    <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">{member.name}</div>
    <StatusBadge status={member.status} className="mt-2" />
  </div>
);

export default MemberCard;



