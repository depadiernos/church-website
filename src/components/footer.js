import React from "react";
import styled from "styled-components";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from "@fortawesome/free-solid-svg-icons";
import { store } from "~/store/store";

//style
const Footer = styled.footer`
  font-size: 0.9rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media ${props => props.theme.smartphone} {
    .poweredby {
      .img-container {
        display: flex;
        width: 100%;
        justify-content: center;
        img {
          height: 1.5rem;
          padding-right: 0.5rem;
        }
      }
    }
  }
  .footer-top {
    display: grid;
    grid-template-columns: 10% repeat(2, 1fr) 10%;
    padding: 4em 0;
    background-color: ${props => props.theme.seasons[store.season]};
    color: white;
    @media ${props => props.theme.smartphone} {
      display: block;
      padding: 2rem 0;
      .contact {
        width: 80%;
        text-align: center;
      }
      .button-footer {
        width: 60%;
        max-width: 50%;
        margin-top: 2rem;
      }
    }
    .contact {
      grid-column-start: 2;
      margin: 0 auto;
      p {
        color: white;
      }
    }
    .button-footer {
      margin: 0 auto;
      .button {
        font-size: 1rem;
        text-align: center;
        padding: 0 3rem;
        margin: 1rem 0;
        border: solid 1px white;
        border-radius: 0.5rem;
        background-color: rgba(255, 253, 249, 0.2);
        p {
          color: white;
        }
        &:hover {
          background-color: ${props => props.theme.secondaryHighlight};
        }
      }
    }
  }
  .poweredby,
  .copyright {
    background-color: rgb(180, 180, 180);
    text-align: center;
    font-size: 0.7rem;
    .img-container {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      grid-column-gap: 2rem;
      margin: 0 auto;
      padding-bottom: 1rem;
      .netlify {
        grid-column-start: 4;
      }
      img {
        height: 1.5rem;
        vertical-align: middle;
      }
    }
    p {
      margin: 0 auto;
      padding: 0.5rem;
    }
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
`;

//component
export default () => {
  return (
    <Footer>
      <div className="footer-top">
        <div className="contact">
          <p>
            St. Thomas Aquinas Catholic Church
            <br />
            421 North Washington Avenue
            <br />
            Cookeville, Tennessee 38501
          </p>
          <p>
            Phone: 931-526-2575
            <br />
            Fax: 931-526-5869
            <br />
            Email:{" "}
            <a href="emailto:info@saintthomasaquinaschurch.com">
              info@saintthomasaquinaschurch.com
            </a>
          </p>
        </div>
        <div className="button-footer">
          <div className="button">
            <StyledLink
              target="_blank"
              rel="noreferrer"
              href="https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=oo37DPDB_IkRvUYRT4XYFRYSLkeAY30iWl4jNLjDjUcC8Jr39BzhtDTFkxI3DZSBmjO5za1voHbCKktgkT2I4u3avdPht8ScFTxSmF__f6NhitQCOiazLj6rsV049CE3"
            >
              <p>
                {"SUPPORT OUR" + " "}
                <FontAwesomeIcon icon={faChurch} />
              </p>
            </StyledLink>
          </div>
          <div className="button">
            <StyledLink
              target="_blank"
              rel="noreferrer"
              href="https://facebook.com/saintthomasaquinascookeville"
            >
              <p>
                {"FOLLOW US ON" + " "}
                <FontAwesomeIcon icon={faFacebook} />
              </p>
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright 2018 - St. Thomas Aquinas Cookeville. All rights reserved.
        </p>
      </div>
      <div className="poweredby">
        <p>Powered by:</p>
        <div className="img-container">
          <div className="netlify">
            <img src="/img/netlify-light.svg" alt="Netlify logo" />
          </div>
          <div className="netlifycms">
            <img src="/img/netlify-cms-logo.svg" alt="Netlify logo" />
          </div>
          <div className="react">
            <img src="/img/react-icon.svg" alt="React JS Logo" /> ReactJS
          </div>
        </div>
      </div>
    </Footer>
  );
};
