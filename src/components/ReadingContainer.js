import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { store, view } from "~/store/store";
import Heading from "./heading";

const ReadingContainer = styled.section`
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: url("/img/reading.jpg");
  background-size: cover;
  div {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ReadingCard = styled.article`
  display: flex;
  width: 70%;
  margin: 0 auto;
  @media ${props => props.theme.smartphone} {
    display: block;
    width: 90%;
    margin: 0 auto;
    .readings-card {
      border-bottom: 1px solid ${props => props.theme.secondaryHighlight};
    }
  }
  @media ${props => props.theme.largeDesktop} {
    display: grid;
    width: 70%;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  @media ${props => props.theme.tablet} {
    display: grid;
    width: 95%;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5rem;
  }
  .readings-card {
    margin: 0 auto;
    padding: 1rem 0;
    h4 {
      font-weight: 600;
      color: ${props => props.theme.seasons[store.season]};
      margin: 0;
    }
  }
  .readmore {
    margin-top: 0.7rem;
    a {
      font-size: 0.8rem;
      color: ${props => props.theme.secondaryHighlight};
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default view(() => (
  <ReadingContainer>
    <div>
      <Heading>
        <h2>
          <FontAwesomeIcon icon={faBookOpen} />
          <span>{" " + "READINGS FOR THE WEEK"}</span>
        </h2>
      </Heading>
      <ReadingCard>
        {store.readings.slice(2, 5).map((reading, index) => (
          <div className="readings-card" key={index}>
            <h4>{ReactHtmlParser(reading.date)}</h4>
            <div>
              <br />
              {ReactHtmlParser(
                `<strong>Reading 1: </strong>` + reading.Mass_R1.source
              )}
              <br />
              {reading.Mass_R2
                ? ReactHtmlParser(
                    `<strong>Reading 2: </strong>` +
                      reading.Mass_R2.source +
                      `<br/>`
                  )
                : null}
              {ReactHtmlParser(
                `<strong>Psalm: </strong>` + reading.Mass_Ps.source
              )}
              <br />
              {ReactHtmlParser(
                `<strong>Gospel: </strong>` + reading.Mass_G.source
              )}
            </div>
            <div className="readmore">
              <h4>
                <a href={`/readings#${reading.number}`}>
                  <FontAwesomeIcon icon={faArrowCircleRight} />
                  READ MORE
                </a>
              </h4>
            </div>
          </div>
        ))}
      </ReadingCard>
    </div>
  </ReadingContainer>
));
