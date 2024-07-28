import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskCreation = () => {
  const [task, setTask] = useState({
    taskName: '',
    issueDate: '',
    expireDate: '',
    assignedPerson: '',
    assignedProject: '',
    priority: '',
    process: ''
  });
  const [people, setPeople] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Retrieve the list of people from local storage or API
    const savedPeople = JSON.parse(localStorage.getItem('people')) || [];
    setPeople(savedPeople);
    
    // Retrieve the list of projects from local storage or API
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save task to local storage
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...existingTasks, task]));
    console.log('Task saved:', task);
    // Optionally, clear form fields after submission
    setTask({
      taskName: '',
      issueDate: '',
      expireDate: '',
      assignedPerson: '',
      assignedProject: '',
      priority: '',
      process: ''
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">Task Name</label>
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="Task Name"
            value={task.taskName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">Issue Date</label>
          <input
            type="date"
            name="issueDate"
            id="issueDate"
            value={task.issueDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="expireDate" className="block text-sm font-medium text-gray-700">Expire Date</label>
          <input
            type="date"
            name="expireDate"
            id="expireDate"
            value={task.expireDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="assignedPerson" className="block text-sm font-medium text-gray-700">Assigned Person</label>
          <select
            name="assignedPerson"
            id="assignedPerson"
            value={task.assignedPerson}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a person</option>
            {people.map((person, index) => (
              <option key={index} value={person.name}>
                {person.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="assignedProject" className="block text-sm font-medium text-gray-700">Assigned Project</label>
          <select
            name="assignedProject"
            id="assignedProject"
            value={task.assignedProject}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a project</option>
            {projects.map((project, index) => (
              <option key={index} value={project.name}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            name="priority"
            id="priority"
            value={task.priority}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="process" className="block text-sm font-medium text-gray-700">Process</label>
          <input
            type="text"
            name="process"
            id="process"
            placeholder="Process"
            value={task.process}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskCreation;
