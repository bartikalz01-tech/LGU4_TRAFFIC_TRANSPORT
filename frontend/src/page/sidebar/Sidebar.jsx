//import { useState, useEffect } from 'react';
import '../.././index.css';
import './Sidebar.css';
import { NavLink} from 'react-router-dom';

// Sidebar component receives:
// - isOpen: boolean that controls visibility
// - onClose: function that to close the sidebar
/*export function Sidebar({ isOpen, onClose }) {

  const [active, setActive] = useState('Dashboard');

  const menuItems = [{
    name: 'Dashboard',
    path: '/',
    icon: 'fas fa-home'
  }, {
    name: 'Road Conditions',
    path: '/roads',
    icon: 'fas fa-road'
  }, {
    name: 'Accident Reports',
    path: '/accident-reports',
    icon: 'fas fa-car-crash'
  }, {
    name: 'Route Planning',
    path: '/route-planning',
    icon: 'fas fa-route'
  }, {
    name: 'Public Transport',
    path: '/public-transport',
    icon: 'fas fa-car'
  }, {
    name: 'Violation Tickets',
    path: '/violation-tickets',
    icon: 'fas fa-ticket-alt'
  }]

  const location = useLocation();

  useEffect(() => {
    const currentItem = menuItems.find(
      item => item.path === location.pathname
    );

    if (currentItem) {
      setActive(currentItem.name);
    }
  }, [location.pathname]);

  return (
    // Adds "open" class when isOpen === true
    <nav className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-header'>
        <div className='sidebar-header-content'>
          <i className="fas fa-traffic-light"></i>
          <h2>Barangay (N/A) Traffic Management</h2>
        </div>
        <button className='sidebar-close-btn' onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className='menu-items'>
        {menuItems.map(item => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={`sidebar-link ${active === item.name ? 'active' : ''}`}
            onClick={() => setActive(item.name)}
          >
            <i className={item.icon} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}*/

export function Sidebar({ isOpen, onClose}) {

  return(
    <nav className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-header'>
        <div className='sidebar-header-content'>
          <i className='fas fa-traffic-light'></i>
          <h2>Barangay (N/A) Traffic Management</h2>
        </div>
        <button className='sidebar-close-btn' onClick={onClose}>
          <i className='fas fa-times'></i>
        </button>
      </div>

      <div className='menu-items'>
        <NavLink to="/" 
          end 
          className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }
          onClick={onClose}
        >
          <i className='fas fa-home'></i>
          <span>DashBoard</span>
        </NavLink>

         <NavLink to="/roads" 
          end 
          className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }
          onClick={onClose}
        >
          <i className='fas fa-road'></i>
          <span>Road Conditions</span>
        </NavLink>

        <NavLink to="/accident-reports" 
          end 
          className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }
          onClick={onClose}
        >
          <i className='fas fa-car-crash'></i>
          <span>Accident Reports</span>
        </NavLink>

        <NavLink to="/route-planning" 
          end 
          className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }
          onClick={onClose}
        >
          <i className='fas fa-route'></i>
          <span>Route Planning</span>
        </NavLink>

        <NavLink to="/public-transport" 
          end 
          className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }
          onClick={onClose}
        >
          <i className='fas fa-car'></i>
          <span>Public Transport</span>
        </NavLink>

        <NavLink to="/violation-tickets" 
          end 
          className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }
          onClick={onClose}
        >
          <i className='fas fa-ticket-alt'></i>
          <span>Violation Ticketing</span>
        </NavLink>
      </div>
    </nav>
  );
}