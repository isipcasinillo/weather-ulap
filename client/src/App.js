import WeatherWidget from './Components/WeatherWidget';
import HourlyContainer from './Components/HourlyContainer/HourlyContainer';
import WeekContainer from './Components/WeekContainer';
import Snapshot from './Components/Snapshot/Snapshot';
import './WeatherMain.css'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(
  )
});


function App() {

  return (
    <>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </>
  );
}
export default App;
