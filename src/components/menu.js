import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { view, store } from "~/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = styled.ul`
  list-style: none;
  display: ${props =>
    props.className == "mobile" && !props.showMenu
      ? "none"
      : !props.className == "desktop"
        ? "block"
        : null};
  background-color: ${props => props.theme.seasons[store.season]};
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 1rem;
  li {
    padding: ${props => (props.className == "mobile" ? "0.2rem" : null)};
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: white;
`;

const CloseMenu = styled.li`
  color: white;
`;

export default view(props => {
  return (
    <Menu className={props.className} showMenu={props.showMenu}>
      <li>
        <StyledNavLink
          to="/"
          onClick={props.className == "mobile" ? store.toggleMenu : null}
        >
          Home
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="/parish"
          onClick={props.className == "mobile" ? store.toggleMenu : null}
        >
          Parish
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="/ministries"
          onClick={props.className == "mobile" ? store.toggleMenu : null}
        >
          Ministries
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="/readings"
          onClick={props.className == "mobile" ? store.toggleMenu : null}
        >
          Readings
        </StyledNavLink>
      </li>
      {props.className == "mobile" ? (
        <CloseMenu
          onClick={props.className == "mobile" ? store.toggleMenu : null}
        >
          <FontAwesomeIcon icon={faTimes} />
        </CloseMenu>
      ) : null}
    </Menu>
  );
});
