import { RoadUpdatesHeader } from "./RoadUpdatesHeader";
import rightArrowIcon from '../../assets/arrows_right_line.svg';
import './RoadUpdates.css';
import '../../index.css'; 

export function RoadUpdates() {

  return (
    <>
      <RoadUpdatesHeader />

      <section className="cctv-container">
        <div className="cctv-feed">
          <div className='cctv-info'>
            <p>123 Street</p>
            <div className="details-right-arrow">
              <p>View Details</p>
              <img src={rightArrowIcon} alt="Right arrow" className="icon-right" />
            </div>
          </div>

          <div className="cctv-video">
            <i class="fas fa-video"></i>
          </div>
        </div>

        <div className="cctv-feed">
          <div className='cctv-info'>
            <p>124 Street</p>
            <div className="details-right-arrow">
              <p>View Details</p>
              <img src={rightArrowIcon} alt="Right arrow" className="icon-right" />
            </div>
          </div>

          <div className="cctv-video">
            <i class="fas fa-video"></i>
          </div>
        </div>

        <div className="cctv-feed">
          <div className='cctv-info'>
            <p>125 Street</p>
            <div className="details-right-arrow">
              <p>View Details</p>
              <img src={rightArrowIcon} alt="Right arrow" className="icon-right" />
            </div>
          </div>

          <div className="cctv-video">
            <i class="fas fa-video"></i>
          </div>
        </div>

        <div className="cctv-feed">
          <div className='cctv-info'>
            <p>126 Street</p>
            <div className="details-right-arrow">
              <p>View Details</p>
              <img src={rightArrowIcon} alt="Right arrow" className="icon-right" />
            </div>
          </div>

          <div className="cctv-video">
            <i class="fas fa-video"></i>
          </div>
        </div>

        <div className="cctv-feed">
          <div className='cctv-info'>
            <p>127 Street</p>
            <div className="details-right-arrow">
              <p>View Details</p>
              <img src={rightArrowIcon} alt="Right arrow" className="icon-right" />
            </div>
          </div>

          <div className="cctv-video">
            <i class="fas fa-video"></i>
          </div>
        </div>

        <div className="cctv-feed">
          <div className='cctv-info'>
            <p>128 Street</p>
            <div className="details-right-arrow">
              <p>View Details</p>
              <img src={rightArrowIcon} alt="Right arrow" className="icon-right" />
            </div>
          </div>

          <div className="cctv-video">
            <i class="fas fa-video"></i>
          </div>
        </div>
      </section>
    </>
  );
}