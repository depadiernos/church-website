import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { store, view } from "~/store/store";
import Heading from "./heading";

const EventCard = styled.article`
      display: grid;
      @media ${props => props.theme.smartphone} {
            display: block;
        }
        .event-card {
            width: 90%;
            max-width: 90%;
            margin: 1rem auto;
            .img-event {
                margin: 0 auto;
            }
        }
      }
      .event-card {
        background-color: ${props => props.theme.complementary};
        padding: 1rem;
        border: solid 1px ${props => props.theme.complementary};
        position: relative;
        &:hover {
          box-shadow: 0 5px 5px 0 ${props => props.theme.secondaryHighlight};
          transition: linear 0.4s;
        }
        img {
          width: 100%;
          height: 10rem;
          margin: 0 auto;
          object-fit: contain;
          @media ${props => props.theme.smartphone}{
            height: auto;
          }
        }
      }
      .article-title {
        width: 90%;
        margin: 0 auto;
        h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        h4{
          font-size: 0.9rem;
          margin: 0 auto;
          font-weight: 300;
        }
        h5 {
          font-size: 0.6rem;
          margin-top: 0;
          font-weight: 300;
        }
      }
      .readmore {
        font-size: 0.8rem;
        color: ${props => props.theme.secondaryHighlight};
        list-style: none;
        cursor: pointer;
        &::-webkit-details-marker {
        display: none;
        }
        &:hover {
          cursor: pointer;
        }
      }
`;

const EventContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media ${props => props.theme.smartphone} {
    padding-bottom: 2rem;
  }
`;

export default view(() => {
  return (
    <EventContainer>
      <Heading>
        <h2>
          <FontAwesomeIcon icon={faBell} />
          <span>{" " + "UPCOMING EVENTS"}</span>
        </h2>
      </Heading>
      <EventCard>
        {store.posts.map((post, index) => (
          <article className="event-card" key={index}>
            <div className="img-event">
              <img src={post.data.thumbnail} alt="" />
            </div>
            <div className="article-title">
              <h3>{post.data.title}</h3>
              <h4>
                {"Event date: " +
                  moment(post.data.eventStartDate).format("MMMM Do YYYY")}
              </h4>
              <h5>
                {"Posted on " + moment(post.data.date).format("MMMM Do YYYY")}
              </h5>
            </div>
            <details>
              <summary className="readmore">
                <h4>
                  <FontAwesomeIcon icon={faArrowCircleRight} />
                  READ MORE
                </h4>
              </summary>
              <div className="article-content">
                <ReactMarkdown source={post.content} />
              </div>
            </details>
          </article>
        ))}
      </EventCard>
    </EventContainer>
  );
});
