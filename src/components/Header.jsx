import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchRole } from '../redux/slices/roleslice';
import RoleToggle from './RoleToggle';
import { HiSun, HiMoon } from 'react-icons/hi';

const Header = () => {
  const dispatch = useDispatch();
  const { currentRole } = useSelector(state => state.role);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Team Pulse Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <HiSun className="text-yellow-400" /> : <HiMoon className="text-gray-800" />}
        </button>
        <RoleToggle />
      </div>
    </header>)
};

export default Header;