import React from 'react';
import Sidebar from './views/Sidebar';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './views/components/Dashboard';
import Kanban from './views/Kanban';
import Backlog from './views/components/Backlog';
import Admin from './views/components/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/carelynx-ci-poc/dashboard' />} />
        <Route path='carelynx-ci-poc' element={<Navigate to='/carelynx-ci-poc/dashboard' />} />
        <Route path='/dashboard' element={<Sidebar content={<Dashboard />} />} />
        <Route path='/board' element={<Sidebar content={<Kanban />} />} />
        <Route path='/backlog' element={<Sidebar content={<Backlog />} />} />
        <Route path='/admin' element={<Sidebar content={<Admin />} />} />
      </Routes>
    </Router>
  );
}

export default App;
