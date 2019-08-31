import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: `#aaa`,
    padding: `20px 20px 10px`,
    fontSize: `14px`,
    textAlign: `center`,
  },
}));

function Footer({ children }) {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      {children}
    </footer>
  );
};

Footer.propTypes = {}

export default Footer;
