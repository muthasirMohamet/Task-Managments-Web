import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Project from './Pages/Project.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Login from './Pages/Login.jsx';
import SingUp from './Pages/SingUp.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import AssignedPersonCreation from './Pages/AssignedPerson.jsx';

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Routers */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/details" element={<ProjectDetails />} />
        <Route path="/AssignedPerson" element={<AssignedPersonCreation />} />
      </Routes>
    </div>
  );
}

export default App;
