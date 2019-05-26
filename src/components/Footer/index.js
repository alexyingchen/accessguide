import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  color: #aaa;
  padding: 20px 20px 10px;
  font-size: 14px;
  text-align: center;

  & > p {
    margin-bottom: 10px;
  }

  & > p > a {
    color: #169d39;

    &:hover {
      color: #16799d;
    }
  }
`;


const Footer = ({ children }) => (
  <Container>{children}</Container>
);

export default Footer;
