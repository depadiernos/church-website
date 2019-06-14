import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandsHelping,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons';

const SupportContainer = styled.section`
  background-image: url('/img/support.jpg');
  background-size: cover;
  background-color: rgba(200, 100, 0, 0.3);
  background-blend-mode: multiply;
  margin-top: 2rem;
  padding: 3rem;
  position: relative;
  color: #2f2f2f;
  h1 {
    color: white;
    font-size: 1.5rem;
    text-align: center;
  }
  .support-buttons {
    display: grid;
    grid-template-columns: 10% repeat(2, 1fr) 10%;
    grid-column-gap: 2rem;
    @media ${props => props.theme.smartphone} {
      display: block;
      width: 90%;
      max-width: 90%;
      margin: 0 auto;
      .join {
        display: block;
        margin-bottom: 2rem;
      }
    }
    @media ${props => props.theme.tablet} {
      max-width: 60rem;
      margin: 0 auto;
    }
    .join {
      grid-column-start: 2;
    }
  }
  .join,
  .give {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px white;
    border-radius: 0.5rem;
    color: white;
    text-align: center;
    padding: 1em;
    background-color: rgba(255, 253, 249, 0.2);
    &:hover {
      background-color: rgba(255, 253, 249, 0.5);
      color: #565656;
    }
    i {
      font-size: 1.5rem;
    }
    p {
      margin: 1em 0 0 0;
      font-family: Raleway, sans-serif;
      font-size: 1rem;
      letter-spacing: 0.02rem;
    }
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const onClick = () => {
  window.scrollTo(0, 0);
};

export default () => {
  return (
    <SupportContainer>
      <h1>SUPPORT OUR CHURCH</h1>
      <div className="support-buttons">
        <div className="join">
          <StyledNavLink onClick={onClick} to="/ministries">
            <FontAwesomeIcon icon={faHandsHelping} inverse size="3x" />
            <p>Join and voluunteer in our Ministries</p>
          </StyledNavLink>
        </div>
        <div className="give">
          <StyledLink
            target="_blank"
            rel="noreferrer"
            href="https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=oo37DPDB_IkRvUYRT4XYFRYSLkeAY30iWl4jNLjDjUcC8Jr39BzhtDTFkxI3DZSBmjO5za1voHbCKktgkT2I4u3avdPht8ScFTxSmF__f6NhitQCOiazLj6rsV049CE3">
            <FontAwesomeIcon icon={faHandHoldingHeart} inverse size="3x" />
            <p>
              Give your weekly mass offering, monthly tithes or one time love
              offering.
            </p>
          </StyledLink>
        </div>
      </div>
    </SupportContainer>
  );
};
