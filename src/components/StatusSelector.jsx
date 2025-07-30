import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../redux/slices/membersSlice';
import StatusBadge from './StatusBadge';

const statusOptions = [
  { id: 'working', label: 'Working' },
  { id: 'break', label: 'Break' },
  { id: 'meeting', label: 'Meeting' },
  { id: 'offline', label: 'Offline' }
];

const StatusSelector = ({ currentUser }) => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);
  const currentMember = members.find(m => m.name === currentUser);

  const handleStatusChange = (status) => {
    if (currentMember) {
      dispatch(updateStatus({ id: currentMember.id, status }));
    }
  };

  return (
    <div className="space-y-3">
      {statusOptions.map((status) => (
        <button
          key={status.id}
          onClick={() => handleStatusChange(status.label)}
          className={`w-full flex items-center p-3 rounded-lg transition ${
            currentMember?.status === status.label
              ? 'bg-blue-100 border-2 border-blue-500'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <StatusBadge status={status.label} />
          <span className="ml-3">{status.label}</span>
        </button>
      ))}
    </div>
  );
};

export default StatusSelector;