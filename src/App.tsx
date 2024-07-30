import React from 'react';
import './App.css'
import Sidebar from './views/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './views/components/Dashboard';
import Kanban from './views/components/Kanban';
import Backlog from './views/components/Backlog';
import Admin from './views/components/Admin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar content={<Dashboard />} />} />
        <Route path="carelynx-ci-poc" element={<Sidebar content={<Dashboard />} />} />
        <Route path="carelynx-ci-poc/dashboard" element={<Sidebar content={<Dashboard />} />} />
        <Route path="carelynx-ci-poc/board" element={<Sidebar content={<Kanban />} />} />
        <Route path="carelynx-ci-poc/backlog" element={<Sidebar content={<Backlog />} />} />
        <Route path="carelynx-ci-poc/admin" element={<Sidebar content={<Admin />} />} />
      </Routes>
    </Router>
  )
}

export default App
