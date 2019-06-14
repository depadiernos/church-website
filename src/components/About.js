// import NPM packages
import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Media from "react-media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

// import js modules and assets
import ReadingContainer from "./ReadingContainer";
import SupportContainer from "./SupportContainer";
import ScheduleContainer from "./ScheduleContainer";
import Heading from "./heading";
import Hero from "./hero";
import Header from "./header";

// style
const AboutDiv = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  .staff-container {
    margin: 0 auto;
    padding-top: 0.5rem;
    background-color: ${props => props.theme.complementary};
    .staff-label {
      text-align: center;
      padding-top: 1rem;
      padding-bottom: 0.5rem;
      background-color: #f0f0f0;
      font-size: 1.2rem;
    }
    .pastor-container {
      width: 100%;
      margin: 0 auto;
      padding: 0 2rem 2rem 2rem;
      background-color: #f0f0f0;
    }
    .pastor-info {
      width: 80%;
      max-width: 800px;
      margin: 0 auto;
      .pastor-title span{
        font-weight: 700;
      }
      @media ${props => props.theme.smartphone} {
        width: 100%;
      }
    }
    .text {
      background-color: rgba(255, 255, 255, 0.7);
      border: solid 1px ${props => props.theme.complementary};
      margin: 1rem;
      padding: 2rem;
      width: 50%;
    }
    .right {
      float: right;
    }
  }
  .history {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }

  .history-text {
    width: 75%;
    margin: 0 auto;
    padding: 1rem 0 4rem 0;
    @media ${props => props.theme.smartphone} {
      width: 90%;
    }
}
    .staff {
      display: grid;
      max-width: 800px;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      .staff-info {
        img {
          width: 100%;
        }
        border-bottom: solid 1px ${props => props.theme.primaryHighlight};
        padding: 2rem;
        margin: 0 auto;
        h3,
        h4 {
          margin: 0.3rem 0;
        }
        h4 {
          colotextr: ${props => props.theme.headingText};
        }
        h5 {
          margin: 0.4rem 0;
          font-weight: 400;
          font-size: 12px;
        }
        p {
          padding: 0;
          line-height: 0.7rem;
        }
      }
      @media ${props => props.theme.smartphone} {
        display: block;
        width: 100%;
        .staff-info {
          margin: 0 auto;
          &>div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          img {
            width: 60%;
            margin: auto;
          }
        }
      }
    }
    .readmore {
        font-size: 0.8rem;
        font-weight: 700;
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
  }
`;

// Component
export default () => {
  return (
    <AboutDiv>
      <Header />
      <Hero img="/img/inside-church2.jpg" />
      <section className="history">
        <Heading>
          <h2>
            <span>A Brief History About Our Church</span>
          </h2>
        </Heading>
        <div>
          <p> className="history-text">
            Back in the 1930’s, William P. Morris and his family first brought
            the Catholic faith to Putnam County, Tennessee. Within a decade,
            other Catholics and a priest from Harriman would come and say Mass
            in the Moran family home on the 5th Sunday of the month. Early in
            the 1950, construction began on the original church building. The
            first mass was celebrated in the basement of that building on
            Christmas Eve, 1950, since the church itself was not quite finished.
            St. Thomas Aquinas Catholic Church was dedicated on May 6, 1951,
            with Fr. Joseph Julius as its first pastor and a membership of 11
            families.
            <br />
            <br />
            The Catholic population increased to approximately 43 families by
            the late 1960’s and because of the continued growth of the Catholic
            faith in the Upper Cumberland area, St. Thomas Aquinas Parish was
            instrumental in helping establish mission parishes in Crossville,
            Sparta, Smithville and Celina. All of them, except for Celina, have
            by now grown into self-sustaining parishes. In the mid 1990’s there
            were about 200 Catholic families in the area and that number rapidly
            grew to over 550 registered families by 2001.
            <br />
            <br />
            Currently, our parish serves about 900 families. The parish
            boundaries include all of Clay, Jackson, Overton and Putnam counties
            and is incredibly diverse. The area is slated to grow by many new
            jobs in the area and it continues to expand as well through
            Tennessee Technological University and growth in its medical
            service.
          </p>
        </div>
      </section>

      <section className="staff-container">
        <Heading>
          <h2>
            <FontAwesomeIcon icon={faUserFriends} /> <span>PARISH STAFF</span>
          </h2>
        </Heading>
        <div className="staff-label">
          <h2>Our Pastors</h2>
        </div>
        <div className="pastor-container">
          <Card className="pastor-info">
            <Card.Img src="/img/fr_chris-horz.jpg" alt="Card image" />
            <Media query="(max-width: 860px)">
              {matches =>
                matches ? (
                  <Card.Body>
                    <Card.Title className="pastor-title">
                      Fr. Christiano Nunes da Silva <br />
                      <span>Pastor</span>
                    </Card.Title>
                    <Card.Subtitle>
                      Email:{" "}
                      <a href="emailto:pastor@saintthomasaquinaschurch.com">
                        pastor@saintthomasaquinaschurch.com
                      </a>
                      <br />
                      931-526-2575
                    </Card.Subtitle>
                  </Card.Body>
                ) : (
                  <Card.ImgOverlay className="pastor-info">
                    <div className="text">
                      <Card.Title className="pastor-title">
                        Fr. Christiano Nunes da Silva <br />
                        <span>Pastor</span>
                      </Card.Title>
                      <Card.Subtitle>
                        Email:{" "}
                        <a href="emailto:pastor@saintthomasaquinaschurch.com">
                          pastor@saintthomasaquinaschurch.com
                        </a>
                        <br />
                        931-526-2575
                      </Card.Subtitle>
                    </div>
                  </Card.ImgOverlay>
                )
              }
            </Media>
            <Card.Body className="pastor-about" style={{ zIndex: 0 }}>
              <details>
                <summary className="readmore">
                  <FontAwesomeIcon icon={faArrowCircleRight} />
                  READ MORE
                </summary>
                Native of Fortaleza - Ceara' - Brazil
             <br />
             <p>
                Before entering the religious life, Fr. Chris studied scientific
                sciences hoping to be a veterinarian doctor. He worked in the
                clothing industry as a supervisor for quality control and in
                health care as an assistant administrator for the Center of
                Image of a private hospital.
             <br />
                Fr. Chris entered the religious life in 1994. He was sent to
                Italy for a three year formation and then went back to Brazil.
                In 2000, he was sent to Jamaica W.I. as a Missionary where he
                stayed until 2011. From 2003 to 2009, he attended St. Thomas
                Aquinas Pontifical University in Rome where he obtained his
                degrees in Philosophy and Theology with a Magna cum Laude score.
                He temporarily left Religious Life in January 2011 and returned
                to Brazil to attend to family exigencies. Fourteen months later
                he was invited by the Most Rev. Bishop David R. Choby to join
                the Diocese of Nashville and in April 2012, Fr. Chris joined the
                Diocese. He was ordained to the sacred diaconate in April 2013
                and to the Sacred Priesthood in July 2014. Father Chris spent
                the time before coming to St. Thomas Aquinas Parish, as
                seminarian, deacon and parochial vicar at the Immaculate
                Conception Parish in Clarksville TN. <br />
                He loves hiking, dogs, cooking, wine and beer. His favorite
                biblical citation, which became his priestly motto is "I know my
                Redeemer lives" from the book of Job
            </p>
            </details>
            </Card.Body>
          </Card>
          <Card className="pastor-info">
            <Card.Img src="/img/fr_james-horz.jpg" alt="Card image" />
            <Media query="(max-width: 860px)">
              {matches =>
                matches ? (
                  <Card.Body className="">
                    <Card.Title className="pastor-title">
                      Fr. James Panackal, CMI <br />
                      <span>Parochial Vicar</span>
                    </Card.Title>
                    <Card.Subtitle className="pastor-title">
                      Email:{" "}
                      <a href="emailto:parochialvicar@saintthomasaquinaschurch.com">
                        parochialvicar@saintthomasaquinaschurch.com
                      </a>
                      <br />
                      615-585-2296
                    </Card.Subtitle>
                  </Card.Body>
                ) : (
                  <Card.ImgOverlay className="">
                    <div className="text right">
                      <Card.Title className="pastor-title">
                        Fr. James Panackal, CMI <br />
                        <span>Parochial Vicar</span>
                      </Card.Title>
                      <Card.Subtitle>
                        Email:{" "}
                        <a href="emailto:parochialvicar@saintthomasaquinaschurch.com">
                          parochialvicar@saintthomasaquinaschurch.com
                        </a>
                        <br />
                        615-585-2296
                      </Card.Subtitle>
                    </div>
                  </Card.ImgOverlay>
                )
              }
            </Media>
            <Card.Body className="pastor-about" style={{ zIndex: 0 }}>
              <details>
                <summary className="readmore">
                  <FontAwesomeIcon icon={faArrowCircleRight} />
                  READ MORE
                </summary>
                Rev. James is a Carmelite Priest from India, born on August 12th
                1953. He was ordained a priest on May 11th 1984. He came to the
                United States in 2001 and served at the Immaculate Conception
                Church in Irvington, New York and then moved on to Saint Patrick
                Church in Amarillo, Texas. In 2009, he came to Nashville as
                Associate Pastor of the Holy Rosary and served for five years.{" "}
                <br />
                Prior to being assigned in Cookeville, Father James served as
                Pastor for Saint Lawrence Church in Joelton from 2014 to 2017.
                In addition to being the Parochial Vicar for Saint Thomas
                Aquinas, he also serves as the Director of the Carmel Center of
                Spirituality in Liberty, Tennessee.
              </details>
            </Card.Body>
          </Card>
        </div>
        <div className="staff">
          <div className="staff-info">
            <div>
              <img src="/img/valerie-richardson.jpg" alt="" />
            </div>
            <h3>Valerie Richardson</h3>
            <h4>Director of Religious Education</h4>
            <p>931-526-4411</p>
            <p>
              <a href="emailto:dre@saintthomasaquinaschurch.com">
                dre@saintthomasaquinaschurch.com
              </a>
            </p>
          </div>
          <div className="staff-info">
            <div>
              <img src="/img/jackie-vester.jpg" alt="" />
            </div>
            <h3>Jackie Vester</h3>
            <h4>Youth Ministry Director</h4>
            <p>
              <a href="emailto:jmclawson21@gmail.com">jmclawson21@gmail.com</a>
            </p>
          </div>
          <div className="staff-info">
            <div>
              <img src="/img/beatriz-alvarez.jpg" alt="" />
            </div>
            <h3>Beatriz Alvarez</h3>
            <h4>Secretary & Hispanic Ministry Coordinator</h4>
            <p>931-526-2575</p>
            <p>
              <a href="emailto:parishoffice@saintthomasaquinaschurch.com">
                parishoffice@saintthomasaquinaschurch.com
              </a>
            </p>
          </div>
          <div className="staff-info">
            <div>
              <img src="/img/placeholder.jpg" alt="" />
            </div>
            <h3>Jim Hron</h3>
            <h4>Parish Council Chairperson</h4>
          </div>
          <div className="staff-info">
            <div>
              <img src="/img/ray-holbrook2.jpg" alt="" />
            </div>
            <h3>Ray Holbrook</h3>
            <h4>Finance Committee Chairperson</h4>
            <p>
              <a href="emailto:rholbrook@tntech.edu">
                rholbrook@tntech.edu
              </a>
            </p>
          </div>
          <div className="staff-info">
            <div>
              <img src="/img/bill-kreppner.jpg" alt="" />
            </div>
            <h3>Bill Kreppner</h3>
            <h4>Facilities Director</h4>
            <p>931-526-2575</p>
          </div>
        </div>
      </section>
      <SupportContainer />
      <ReadingContainer />
      <ScheduleContainer />
    </AboutDiv>
  );
};
