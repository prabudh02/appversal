import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchRole } from '../redux/slices/roleslice';

const RoleToggle = () => {
  const dispatch = useDispatch();
  const { currentRole } = useSelector(state => state.role);

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => dispatch(switchRole('member'))}
        className={`px-3 py-1 rounded ${currentRole === 'member' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
      >Member</button>
      <button
        onClick={() => dispatch(switchRole('lead'))}
        className={`px-3 py-1 rounded ${currentRole === 'lead' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
      >Lead</button>
    </div>
  );
};

export default RoleToggle;