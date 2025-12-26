import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './page/sidebar/Sidebar';
import { Dashboard } from './page/dashboard/Dashboard.jsx';
import { RoadUpdates } from './page/road_updates/RoadUpdates';
import { AccidentReports } from './page/accident_reports/AccidentReports';
import { RoutePlanning } from './page/route_planning/RoutePlanning';
import { PublicTransport } from './page/public_transport/PublicTransport';
import { ViolationPage } from './page/violation/ViolationPage';
import { roads } from './data/roads.js';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='app-layout'>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className='main-content'>
        <button className='menu-toggle' onClick={() => setSidebarOpen(!sidebarOpen)}>
          <i className="fas fa-bars"></i>
        </button>

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/roads" element={<RoadUpdates roads={roads} />} />
          <Route path="/accident-reports" element={<AccidentReports />} />
          <Route path="/route-planning" element={<RoutePlanning />} />
          <Route path="/public-transport" element={<PublicTransport />} />
          <Route path="/violation-tickets" element={<ViolationPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
