import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';

const Dashboard = () => {
  const [recentActivities, setRecentActivities] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [newTasks, setNewTasks] = useState([]);

  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        // Example data
        const data = [
          { name: "Review Project Plan", assignedTo: "Ayaan", dueDate: "2024-09-01" },
          { name: "Update API Documentation", assignedTo: "Mohamed", dueDate: "2024-09-05" }
        ];
        setRecentActivities(data);
      } catch (error) {
        console.error('Error fetching recent activities:', error);
      }
    };

    const fetchAssignedTasks = async () => {
      try {
        // Example data
        const data = [
          { id: 1, name: "Design Website", assignedTo: "Ayaan", dueDate: "2024-09-10" },
          { id: 2, name: "Develop Backend", assignedTo: "Mohamed", dueDate: "2024-09-15" },
          { id: 3, name: "Write User Manual", assignedTo: "Fatima", dueDate: "2024-09-20" },
          { id: 4, name: "Setup Deployment Pipeline", assignedTo: "Hassan", dueDate: "2024-09-25" }
        ];
        setAssignedTasks(data);
      } catch (error) {
        console.error('Error fetching assigned tasks:', error);
      }
    };

    const fetchNewTasks = async () => {
      try {
        // Example data
        const data = [
          { id: 1, name: "Prepare Project Kickoff", assignedTo: "Ayaan", dueDate: "2024-09-01" },
          { id: 2, name: "Finalize Database Schema", assignedTo: "Mohamed", dueDate: "2024-09-02" },
          { id: 3, name: "Create API Endpoints", assignedTo: "Fatima", dueDate: "2024-09-03" },
          { id: 4, name: "Review Security Protocols", assignedTo: "Hassan", dueDate: "2024-09-04" }
        ];
        setNewTasks(data);
      } catch (error) {
        console.error('Error fetching new tasks:', error);
      }
    };

    fetchRecentActivities();
    fetchAssignedTasks();
    fetchNewTasks();
  }, []);

  return (
    <div className="p-7 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-12 text-center">Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Recently Working On</h2>
        <table className="w-full bg-white border border-gray-300 rounded-md shadow-sm">
          <thead>
            <tr>
              <th className="border px-4 py-2">Project Name</th>
              <th className="border px-4 py-2">Assigned To</th>
              <th className="border px-4 py-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.slice(0, 2).map((activity, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{activity.name}</td>
                <td className="border px-4 py-2">{activity.assignedTo}</td>
                <td className="border px-4 py-2">{activity.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Assigned Employee Tasks</h2>
        <table className="w-full bg-white border border-gray-300 rounded-md shadow-sm">
          <thead>
            <tr>
              <th className="border px-4 py-2">Task Name</th>
              <th className="border px-4 py-2">Assigned To</th>
              <th className="border px-4 py-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {assignedTasks.slice(0, 2).map((task) => (
              <tr key={task.id}>
                <td className="border px-4 py-2">{task.name}</td>
                <td className="border px-4 py-2">{task.assignedTo}</td>
                <td className="border px-4 py-2">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">New Tasks in Last 24 Hours</h2>
        <table className="w-full bg-white border border-gray-300 rounded-md shadow-sm">
          <thead>
            <tr>
              <th className="border px-4 py-2">Task Name</th>
              <th className="border px-4 py-2">Assigned To</th>
              <th className="border px-4 py-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {newTasks.slice(0, 2).map((task) => (
              <tr key={task.id}>
                <td className="border px-4 py-2">{task.name}</td>
                <td className="border px-4 py-2">{task.assignedTo}</td>
                <td className="border px-4 py-2">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
