import arrowLeftFill from '../../assets/arrow_to_left_fill.svg';
import './RoadCondition.css';
import '../../index.css';

export function RoadCondition({ road, onClose }) {

  return (
    <>
      <div className='road-condition-overlay'>
        <div className='road-condition-content'>
          <div className='cctv-options-container'>
            <div className='road-title-menu'>
              <button className='close-btn' onClick={onClose}>
                <img className='left-arrow-logo' src={arrowLeftFill} />
              </button>
              <h2 className='road-name'>{road.roadName}</h2>
            </div>

            <div className='cctv-controls'>
              <span className='status-live'>LIVE</span>
              {/*<button className='btn pause-btn'>Pause</button>*/}
              {/*<button className='btn replay-btn'>Replay</button>*/}
              <button className='btn record-btn'>Save Record footage</button>
            </div>

            <div className='right-side'>
              <h2>Predictive AI</h2>
            </div>
          </div>
          <div className='full-cctv-video'>
            <i class="fas fa-video"></i>
          </div>
        </div>
      </div>
    </>
  );
}