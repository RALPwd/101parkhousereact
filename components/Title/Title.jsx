import React from 'react';
import styled from 'styled-components';
const TitleContainer = styled.h2`
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
    font-size: 2.3rem;
    font-family: 'Tenor Sans';
    text-transform: uppercase;
`;

const Title = ({title}) => {
  return (
    <TitleContainer>{title}</TitleContainer>
  )
}

export default Title