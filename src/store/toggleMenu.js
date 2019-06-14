import { store } from '~/store/store';
export default () => {
  store.showMenu = !store.showMenu;
};
