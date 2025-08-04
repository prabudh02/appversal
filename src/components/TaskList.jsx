import React from 'react';
import ProgressBar from './ProgressBar';
import { useDispatch } from 'react-redux';
import { updateProgress } from '../redux/slices/tasksSlice.js';

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  const changeProgress = (id, delta) => {
    dispatch(updateProgress({ id, amount: delta }));
  };

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{task.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Due: {task.dueDate}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => changeProgress(task.id, -10)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
              <button onClick={() => changeProgress(task.id, 10)} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
            </div>
          </div>
          <ProgressBar progress={task.progress} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
