import WeatherWidget from './Components/WeatherWidget/WeatherWidget';
import HourlyContainer from './Components/HourlyContainer/HourlyContainer';
import WeekContainer from './Components/WeekContainer/WeekContainer';
import Snapshot from './Components/Snapshot/Snapshot';
import { ApiProvider } from './Components/ApiContext'
import './WeatherMain.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Search from './Components/Search/Search';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(
  )
});
const history = async () => localStorage.getItem('Lastcity')

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <ApiProvider>
       
          {history ?
            <div className='WeatherMain'>
              
              <div className='WidgetWidget' >
                <Search />
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
            :
            <div></div>

          }

        </ApiProvider>
      </ApolloProvider>
    </>
  );
}
export default App;
