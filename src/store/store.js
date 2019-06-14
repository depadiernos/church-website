// import state management
import { store as createStore } from 'react-easy-state';
// export view from react-easy-state
export { view } from 'react-easy-state';

// import store functions
import getReadings from './getReadings';
import getPosts from './getPosts';
import getToday from './getToday';
import toggleMenu from './toggleMenu';
import getSeason from './getSeason';

// set react-easy-state to sync localStorage
export const store = createStore({
  readings: [],
  posts: [],
  today: '',
  season: '',
  isToday: false,
  showMenu: false,
  getReadings,
  getPosts,
  getToday,
  getSeason,
  toggleMenu
});
