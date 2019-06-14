// import NPM packages
import React from 'react';

// import js modules and assets
import EventContainer from './EventContainer';
import ReadingContainer from './ReadingContainer';
import SupportContainer from './SupportContainer';
import ScheduleContainer from './ScheduleContainer';
import Hero from './hero';
import Header from './header';

// Component
export default () => {
  return (
    <React.Fragment>
      <Header />
      <Hero img="/img/inside-church.jpg" />
      <EventContainer />
      <SupportContainer />
      <ReadingContainer />
      <ScheduleContainer />
    </React.Fragment>
  );
};
