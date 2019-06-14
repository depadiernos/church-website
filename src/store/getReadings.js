import jsonp from 'fetch-jsonp';
import moment from 'moment';
import { store } from '~/store/store';

export default async () => {
  const start = moment().subtract(3, 'd');

  const week = [...Array(7)].map((_, i) => {
    return start.add(1, 'd').format('YYYYMMDD');
  });

  const generateReadingUrl = day =>
    `https://universalis.com/USA/${day}/jsonpmass.js`;

  store.readings = await Promise.all(
    week.map(day => generateReadingUrl(day)).map(readingUrl =>
      jsonp(readingUrl, {
        mode: 'no-cors'
      })
        .then(data => data.json())
        .catch(err => console.log(err))
    )
  );
};

// TODO: compare latest week array to existing storage.readings.number and only fetch ones that is not existing yet.
