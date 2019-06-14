import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from "@fortawesome/free-solid-svg-icons";
import Heading from "./heading";

const ScheduleContainer = styled.section`
  margin: 2rem auto;
  max-width: 800px;
  @media ${props => props.theme.smartphone} {
    width: 95%;
    margin: 2rem auto;
  }
  @media ${props => props.theme.largeDesktop}, ${props => props.theme.tablet} {
    width: 75%;
    .schedule {
      .img-mass {
        max-height: 30rem;
      }
    }
  }
  .schedule {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    background-color: ${props => props.theme.complementary};
    .img-mass {
      width: 100%;
      height: 100%;
      background-image: url("/img/church1.jpg");
      background-size: cover;
      background-position: center;
    }
    .mass-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem;
      h4 {
        color: #f2b350;
        margin: 1.5rem 0 0.25rem 0;
      }
      p {
        margin: 0;
        padding-bottom: 0.5rem;
      }
    }
    @media ${props => props.theme.smartphone} {
      display: block;
      margin: 0 auto;
      .img-mass {
        height: 15rem;
      }
      .mass-text {
        padding: 1rem;
      }
    }
  }
`;

export default () => {
  return (
    <ScheduleContainer>
      <Heading>
        <h2>
          <FontAwesomeIcon icon={faChurch} />
          <span>{" " + "MASS & CONFESSION SCHEDULE"}</span>
        </h2>
      </Heading>
      <div className="schedule">
        <div className="img-mass" />
        <div className="mass-text">
          <h4>DAILY MASS</h4>
          <p>Monday-Saturday at 8:00 AM</p>
          <h4>LATIN MASS</h4>
          <p>Tuesday at 6:00 PM</p>
          <h4>SUNDAY MASSES</h4>
          <p>Saturday 5:00 PM (Vigil Mass)</p>
          <p>Sunday 8:00 AM & 10:45 AM - English</p>
          <p>Sunday 12:30 PM - en Español</p>
          <h4>CONFESSION</h4>
          <p>Saturday at 9:00 AM & 4:00 PM or by appointment</p>
          <h4>CHAPEL HOURS</h4>
          <p>Monday-Friday 9:00 AM - 6:00 PM</p>
          <p>Saturday 9:00 AM - 3:00 PM</p>
          <p>Sunday Closed</p>
          <p>All are invited to pray the Rosary every 1st Saturday at 4:30 PM</p>
        </div>
      </div>
    </ScheduleContainer>
  );
};
