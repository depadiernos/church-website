import moment from 'moment';
import { store } from '~/store/store';

export default () =>
  !store.today.length
    ? (store.today = moment().format('YYYYMMDD'))
    : !!store.today == moment().format('YYYYMMDD')
      ? (store.isToday = true)
      : (store.isToday = false);
