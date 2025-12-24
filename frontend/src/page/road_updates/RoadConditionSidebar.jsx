import './RoadConditionSidebar.css';

export function RoadConditionSidebar() {

  return (
    <nav className="sidebar-overlay">
      <div className="road-sidebar-container">
        <div className='road-sidebar-header'>
          <i class="fas fa-traffic-light"></i>
          <h2>Barangay (N/A) Traffic Management</h2>
        </div>

        <div className='road-sidebar-menu'>
          <div className='road-sidebar-link'>
            <i class="fas fa-home"></i>
            <span>Traffic Monitoring</span>
          </div>
          <div className='road-sidebar-link'>
            <i class="fas fa-road"></i>
            <span>Road Conditions</span>
          </div>
          <div className='road-sidebar-link'>
            <i class="fas fa-car-crash"></i>
            <span>Accident Reports</span>
          </div>
        </div>
      </div>
    </nav>
  );
}