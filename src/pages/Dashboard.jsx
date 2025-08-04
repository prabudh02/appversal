import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import StatusSelector from '../components/StatusSelector';
import StatusSummary from '../components/StatusSummary';
import PieChartComponent from '../components/PieChartComponent';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { currentRole, currentUser } = useSelector(state => state.role);
  const members = useSelector(state => state.members);
  const tasks = useSelector(state => state.tasks);

  // Reset status to offline after 10 minutes of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      const userMember = members.find(m => m.name === currentUser);
      if (userMember && userMember.status !== 'Offline') {
        dispatch(updateStatus({ id: userMember.id, status: 'Offline' }));
      }
    }, 600000); // 10 minutes
    
    return () => clearTimeout(timer);
  }, [currentUser, members, dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="container mx-auto p-4">
        {currentRole === 'lead' ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-bold mb-4">Team Member Status</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {members.map(member => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <TaskForm members={members} />
                <StatusSummary members={members} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Status Distribution</h2>
              <PieChartComponent members={members} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Update Your Status</h2>
                <StatusSelector currentUser={currentUser} />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Your Tasks</h2>
                <TaskList 
                  tasks={tasks.filter(t => t.assignedTo === currentUser)} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;