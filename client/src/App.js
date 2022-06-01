
import WeatherWidget from './Components/WeatherWidget';
import HourlyContainer from './Components/HourlyContainer/HourlyContainer';
import WeekContainer from './Components/WeekContainer';
import Snapshot from './Components/Snapshot/Snapshot';
import './WeatherMain.css'



function App() {
  return (
    <>
      <div className='WeatherMain'>
        <div className='WidgetWidget' >
          <WeatherWidget />
        </div>
        <div className='WeekContainer'>
          <WeekContainer />
        </div>
        <div className='HourlyContainer'>
          <HourlyContainer />
        </div>
        <div className='SnapshotContainer' >
          <Snapshot />
        </div>
      </div>
    </>
  );
}

export default App;
