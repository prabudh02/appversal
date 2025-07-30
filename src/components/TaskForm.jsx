import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/tasksSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    assignedTo: '',
    dueDate: new Date()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      dueDate: task.dueDate.toISOString().split('T')[0]
    }));
    setTask({
      title: '',
      assignedTo: '',
      dueDate: new Date()
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Assign New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Task Title</label>
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Assign To</label>
          <select
            value={task.assignedTo}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select a member</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Bob Johnson">Bob Johnson</option>
            <option value="Alice Williams">Alice Williams</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Due Date</label>
          <DatePicker
            selected={task.dueDate}
            onChange={(date) => setTask({ ...task, dueDate: date })}
            className="w-full px-3 py-2 border rounded-lg"
            minDate={new Date()}
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;