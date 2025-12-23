import './RoadCondition.css';
import '../../index.css';

export function RoadCondition({ road, onClose }) {

  return(
    <>
      <div className='road-condition-overlay'>
        <div className='road-condition-content'>
          <div className='road-title'>
            <h2 className='road-name'>{road.roadName}</h2>
            <button className='close-btn' onClick={onClose}>Close</button>
          </div>
          <div className='full-cctv-video'>
            <i class="fas fa-video"></i>
          </div>
        </div>
      </div>
    </>
  );
}