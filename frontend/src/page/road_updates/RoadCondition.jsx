import './RoadCondition.css';
import '../../index.css';
export function RoadCondition({ road, onClose }) {

  return(
    <>
      <div className='road-condition-overlay'>
        <div className='road-condition-content'>
          <button onClick={onClose}>Close</button>
          <h2>{road.name}</h2>
          <p>Test</p>
        </div>
      </div>
    </>
  );
}