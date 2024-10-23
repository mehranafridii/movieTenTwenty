import GetTicket from '../../screens/getTicket/GetTicket';
import Home from '../../screens/home/Home';
import MovieDetail from '../../screens/movieDetail/MovieDetail';
import PayForTicket from '../../screens/payforTicket/PayForTicket';
import SearchResult from '../../screens/searchResult/SearchResult';
import WatchVideo from '../../screens/watchVideo/WatchVideo';
import TabStack from '../tab/TabStack';

export const appRoutes = [
  {
    name: 'Home',
    component: TabStack,
  },
  {
    name: 'MovieDetail',
    component: MovieDetail,
  },
  {
    name: 'GetTicket',
    component: GetTicket,
  },
  {
    name: 'SearchResult',
    component: SearchResult,
  },
  {
    name: 'WatchVideo',
    component: WatchVideo,
  },
  {
    name: 'PayForTicket',
    component: PayForTicket,
  },
];
