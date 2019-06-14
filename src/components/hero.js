import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Media from 'react-media';

const Hero = styled.div`
  .main-top {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .h5 {
    font-size: 1rem;
  }
  .special {
    margin: 0 auto;
    width: 70%;
    background-color: rgba(255, 255, 255, 0.85);
    border: solid 1px ${props => props.theme.secondaryHighlight};
    .title {
      width: 100%;
      text-align: center;
      color: #ac3c00;
      border-bottom: solid 1px ${props => props.theme.secondaryHighlight};
    }
    .content {
      width: 80%;
      margin: 0 auto;
      color: ${props => props.theme.headingText};
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
    @media ${props => props.theme.tablet} {
      width: 75%;
      .h5 {
        font-size: 0.6rem;
      }
      .title {
        font-size: 0.8rem;
      }
      .content {
        font-size: 1.1rem;
      }
    }
    @media ${props => props.theme.smartphone} {
      background-image: url('/img/masstimes.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-color: rgba(255, 255, 255, 0.8);
      background-blend-mode: lighten;
      width: 100%;
      .h5 {
        font-size: 0.5rem;
      }
      .title {
        font-size: 0.7rem;
      }
      .content {
        font-size: 1rem;
      }
    }
  }
`;

export default props => {
  return (
    <Hero>
      <Card>
        <Card.Img src={props.img} alt="Card image" />
        {/* <Media query="(max-width: 740px)">
          {matches =>
            matches ? (
              <Card.Body className="main-top">
                <div className="special">
                  <Card.Title className="title">
                    <h1>
                      FALL FESTIVAL MASS SCHEDULE
                      <br />
                      SEPT. 22 and 23
                    </h1>
                  </Card.Title>
                  <Card.Text as="div">
                    <div className="content">
                      <p>Saturday: 6pm - Fr. James</p>
                      <p>Sunday: 8am (English) - Fr. Chris</p>
                      <p>Sunday: 10am (Bilingual, outdoor mass) - Both</p>
                    </div>
                  </Card.Text>
                </div>
              </Card.Body>
            ) : (
              <Card.ImgOverlay className="main-top">
                <div className="special">
                  <Card.Title className="title">
                    <h1>
                      FALL FESTIVAL MASS SCHEDULE
                      <br />
                      SEPT. 22 and 23
                    </h1>
                  </Card.Title>
                  <Card.Text as="div">
                    <div className="content">
                      <p>Saturday: 6pm - Fr. James</p>
                      <p>Sunday: 8am (English) - Fr. Chris</p>
                      <p>Sunday: 10am (Bilingual, outdoor mass) - Both</p>
                    </div>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            )
          }
        </Media> */}
      </Card>
    </Hero>
  );
};
