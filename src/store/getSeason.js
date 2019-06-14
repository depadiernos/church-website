import { store } from '~/store/store';
import { seasonOf } from 'advent-js';

export default () => {
  const currentSeason = seasonOf(store.today);
  store.season = currentSeason;
};
