import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sticky from 'react-sticky-el';
import { store, view } from '~/store/store';
import Menu from './menu';

//style
const Header = styled.header`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 4fr;
    grid-template-areas:
        ". . logo logo . fb"
        ". . logo logo . .";
    }
    .logo {
        grid-area: logo;
        width: 100%;
        max-width: 20rem;
        margin: 0 auto;
    }
    @media ${props => props.theme.smartphone} {
        display: block;
        .social {
            display: none;
        }
        .logo {
            max-width: 15rem;
        }
    }
`;
const Nav = styled.nav`
  display: flex;
  background-color: ${props => props.theme.seasons[store.season]};
  padding: 0.7rem;
  .burgermenu {
    display: none;
  }
  .desktop {
    display: flex;
    list-style: none;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
  li {
    font-size: 1.1rem;
    letter-spacing: 0.025rem;
    text-align: center;
    padding: 0 1.5rem;
    a {
      text-decoration: none;
      color: white;
      position: relative;
      transition: ease-in 0.4s;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        border-bottom: 2px solid ${props => props.theme.secondaryHighlight};
        transition: ease-in 0.5s;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
  @media ${props => props.theme.smartphone} {
    .desktop {
      display: none;
    }
    .burgermenu {
      display: flex;
      width: 100%;
      a {
        color: white !important;
        text-decoration: none;
        font-size: 1rem;
        padding: 0.2rem;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.secondaryHighlight};
        }
      }
      .menu {
        flex-grow: 1;
      }
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  grid-area: fb;
  color: ${props => props.theme.seasons[store.season]};
  margin: 0 auto;
  font-size: 1rem;
`;

//componentdesktop
export default view(() => {
  return (
    <div>
      <Header>
        <StyledLink
          className="social"
          target="_blank"
          rel="noreferrer"
          href="https://facebook.com/saintthomasaquinascookeville">
          Follow us on <FontAwesomeIcon icon={faFacebook} />
        </StyledLink>
        <div className="logo">
          <Link to="/">
            <img
              src="/img/STAC-logo.svg"
              alt="St. Thomas Aquinas Church logo"
            />
          </Link>
        </div>
      </Header>
      <Sticky style={{ zIndex: 1 }}>
        <Nav>
          <Menu className="desktop" />
          <div className="burgermenu">
            <a className="menu" onClick={store.toggleMenu}>
              <FontAwesomeIcon icon={faBars} /> Menu
            </a>
            <StyledLink
              target="_blank"
              rel="noreferrer"
              href="https://facebook.com/saintthomasaquinascookeville">
              Follow us on <FontAwesomeIcon icon={faFacebook} />
            </StyledLink>
          </div>
        </Nav>
        <Menu className="mobile" showMenu={store.showMenu} />
      </Sticky>
    </div>
  );
});
