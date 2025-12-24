import { RoadUpdates } from './page/road_updates/RoadUpdates';
import { Sidebar } from './page/sidebar/Sidebar';
import { roads } from './data/roads.js';
import './App.css';
import { RoadConditionSidebar } from './page/road_updates/RoadConditionSidebar.jsx';

function App() {

  return (
    <>
      <Sidebar />
      <RoadUpdates roads={roads} />
      {/*<RoadConditionSidebar />*/}
    </>
  )
}

export default App
