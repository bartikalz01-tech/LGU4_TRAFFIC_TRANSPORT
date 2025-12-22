import { RoadUpdates } from './page/road_updates/RoadUpdates';
import { Sidebar } from './page/sidebar/Sidebar';
import { roads } from './data/roads.js';
import './App.css';

function App() {

  /*const roads = [{
    roadId: 1,
    roadName: '123 street'
  }, {
    roadId: 2,
    roadName: '124 street'
  }, {
    roadId: 3,
    roadName: '125 street'
  }, {
    roadId: 4,
    roadName: '126 street'
  }, {
    roadId: 5,
    roadName: '127 street'
  }, {
    roadId: 6,
    roadName: '128 street'
  }];*/

  return (
    <>
      <Sidebar />
      <RoadUpdates roads={roads} />
    </>
  )
}

export default App
