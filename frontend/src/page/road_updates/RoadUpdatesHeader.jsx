import './RoadUpdateHeader.css'

export function RoadUpdatesHeader({ onMenuClick }) {
  
  return (
    <header className="road-ud-header">
      <div className='road-ud-title-container'>
        <button className='hamburger-menu-btn' onClick={onMenuClick}><i class="fas fa-bars"></i></button>
        <a href='#' className='header-title'>CCTV Monitor</a>
        <a href='#' className='header-title'>Traffic Flow Monitoring</a>
        <a href='#' className='header-title'>Prone Road Accidents</a>
      </div>
    </header>
  );
}