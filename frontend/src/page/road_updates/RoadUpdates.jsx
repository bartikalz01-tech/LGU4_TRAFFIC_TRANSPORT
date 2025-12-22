import { useState } from 'react';
import { RoadCondition } from "./RoadCondition";
import { RoadUpdatesHeader } from "./RoadUpdatesHeader";
import rightArrowIcon from '../../assets/arrows_right_line.svg';
import './RoadUpdates.css';
import '../../index.css';

export function RoadUpdates({ roads }) {

  const [ currenntRoad, setCurrentRoad ] = useState({});

  return (
    <>
      <RoadUpdatesHeader />

      <section className="cctv-container">
        {roads.map((road) => {
          return(
            <div id={road.id} className="cctv-feed">
              <div className='cctv-info'>
                <p>{road.roadName}</p>
                <div className="details-right-arrow" onClick={() => setCurrentRoad(road)}>
                  <p>View Details</p>
                  <img src={rightArrowIcon} alt="Right arrow" className="icon-right" />
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