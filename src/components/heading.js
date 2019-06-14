import React from 'react';
import styled from 'styled-components';

const Headings = styled.div`
  margin: 2rem auto;
  border-top: 1px solid ${props => props.theme.secondaryHighlight};
  border-bottom: 1px solid ${props => props.theme.secondaryHighlight};
  width: 23rem;
  @media ${props => props.theme.smartphone} {
    margin: 2rem auto;
    width: 95%;
    max-width: 92%;
  }
  h2 {
    font-size: 1.25rem;
    text-align: center;
    color: ${props => props.theme.secondaryHighlight};
    span {
      color: ${props => props.theme.headingText};
    }
  }
`;

export default props => {
  return <Headings>{props.children}</Headings>;
};
