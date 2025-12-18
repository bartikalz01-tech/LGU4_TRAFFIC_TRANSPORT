import { useState } from 'react';
import '../.././index.css';
import './Sidebar.css';

export function Sidebar() {

  const [active, setActive] = useState('Dashboard');

  const menuItems = [{
    name: 'Dashboard',
    icon: 'fas fa-home'
  }, {
    name: 'Road Conditions',
    icon: 'fas fa-road'
  }, {
    name: 'Accident Reports',
    icon: 'fas fa-car-crash'
  }, {
    name: 'Route Planning',
    icon: 'fas fa-route'
  }, {
    name: 'Public Transport',
    icon: 'fas fa-car'
  }, {
    name: 'Violation Tickets',
    icon: 'fas fa-ticket-alt'
  }]

  return (
    <nav className='sidebar-container'>
      <div className='sidebar-header'>
        <i class="fas fa-traffic-light"></i>
        <h2>Barangay (N/A) Traffic Management</h2>
      </div>

      <div className='menu-items'>
        {menuItems.map(item => (
          <div 
            key={item.name}
            className={`sidebar-link ${active === item.name ? 'active' : ''}`}
            onClick={() => setActive(item.name)}
          >
            <i className={item.icon} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}