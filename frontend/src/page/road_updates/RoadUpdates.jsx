import { useState } from 'react';
import { RoadCondition } from "./RoadCondition";
import { RoadUpdatesHeader } from "./RoadUpdatesHeader";
import { Sidebar } from '../sidebar/Sidebar';
//import rightArrowIcon from '../../assets/arrows_right_line.svg';
import './RoadUpdates.css';
import '../../index.css';

export function RoadUpdates({ roads }) {

  const [ currenntRoad, setCurrentRoad ] = useState({});

  // Controls sidebar open/close
  const [ sidebarOpen, setSidebarOpen ] = useState(false);

  return (
    <>
      {/* Overlay appears only when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* sidebar toggle menu */}
      <RoadUpdatesHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <section className="cctv-container">
        {roads.map((road) => {
          return(
            <div key={road.id} id={road.id} className="cctv-feed">
              <div className='cctv-info'>
                <p>{road.roadName}</p>
                <div className="details-right-arrow" onClick={() => setCurrentRoad(road)}>
                  <p>View Details</p>
                  <i class="fas fa-list" />
                </div>
              </div>

              <div className="cctv-video">
                <i class="fas fa-video"></i>
              </div>
            </div>
          );
        })}
      </section>

      {currenntRoad && (
        <RoadCondition road={currenntRoad} onClose={() => setCurrentRoad(null)} />
      )}
    </>
  );
}