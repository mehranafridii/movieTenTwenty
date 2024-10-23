import Home from '../../screens/home/Home';
import Library from '../../screens/library/Library';
import More from '../../screens/more/More';
import Search from '../../screens/search/Search';
import Watch from '../../screens/watch/Watch';

export const tabRoutes = [
  {
    name: 'Watch',
    component: Watch,
  },
  {
    name: 'Library',
    component: Library,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'More',
    component: More,
  },
];
