import matter from 'gray-matter';
import md from '../content/events/*.md';
import { store } from '~/store/store';
import _ from 'lodash';

export default () => {
  const Posts = Object.keys(md).map(post => matter(md[post]));
  const OrderedPosts = _.orderBy(Posts, ['data.date'], ['desc']);
  store.posts = OrderedPosts;
};
