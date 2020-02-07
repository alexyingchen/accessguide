import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../Button';
import Link from '../Link'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbarGutters: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  nav: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
    fontSize: theme.typography.h6.fontSize,
  },
  link: {
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(2),
  }
});

function Header(props) {
  const { classes, siteTitle, menuLinks, isDarkMode, setDarkMode } = props;
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar classes={{ gutters: classes.toolbarGutters }}>
        <nav className={classes.nav}>
          <span className={classes.title}>
            <Link to={'/'}>
              { siteTitle }
            </Link>
          </span>
          <Button onClick={() => setDarkMode(!isDarkMode)}>
            Display
          </Button>
          {menuLinks.map((link, index) =>
            <Link key={index} to={link.link} className={classes.link}>
              {link.name}
            </Link>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = state => ({
  isDarkMode: state.display.isDarkMode,
});

const mapDispatchToProps = dispatch => ({
  setDarkMode: isDarkMode => dispatch({ type: 'SET_DARKMODE', isDarkMode }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
