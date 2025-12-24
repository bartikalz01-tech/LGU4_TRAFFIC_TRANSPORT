import { useState } from 'react';
import '../.././index.css';
import './Sidebar.css';

// Sidebar component receives:
// - isOpen: boolean that controls visibility
// - onClose: function that to close the sidebar
export function Sidebar({ isOpen, onClose }) {

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
    // Adds "open" class when isOpen === true
    <nav className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-header'>
        <div className='sidebar-header-content'>
          <i class="fas fa-traffic-light"></i>
          <h2>Barangay (N/A) Traffic Management</h2>
        </div>
        <button className='sidebar-close-btn' onClick={onClose}>
          <i class="fas fa-times"></i>
        </button>
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