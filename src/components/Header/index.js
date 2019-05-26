import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components';

import { Link } from "gatsby"

const Container = styled.header`
  color: #fff;
  background: linear-gradient(to right, #169d39 0%, #16799d 100%);
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Header = ({ siteTitle, menuLinks }) => (
  <Container>
    <h1> { siteTitle } </h1>
    <nav>
      <ul style={{ display: 'flex', flex: 1, listStyle: 'none' }}>
        {menuLinks.map(link =>
          <li key={link.link}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        )}
      </ul>
    </nav>
  </Container>
);


Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Header;
