import { RoadUpdates } from './page/road_updates/RoadUpdates';
//import { Sidebar } from './page/sidebar/Sidebar';
import { roads } from './data/roads.js';
import './App.css';

function App() {

  return (
    <>
      <RoadUpdates roads={roads} />
    </>
  )
}

export default App
