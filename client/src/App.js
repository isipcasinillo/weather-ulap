import WeatherWidget from './Components/WeatherWidget';
import HourlyContainer from './Components/HourlyContainer/HourlyContainer';
import WeekContainer from './Components/WeekContainer';
import Snapshot from './Components/Snapshot/Snapshot';
import { ApiProvider } from './Components/ApiContext'
import './WeatherMain.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Search from './Components/Search';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(
  )
});


function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <ApiProvider>
          <Search />
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
        </ApiProvider>
      </ApolloProvider>
    </>
  );
}
export default App;
