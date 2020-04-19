import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../Button';
import Link from '../Link'
import DisplayMenu from './DisplayMenu'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbarGutters: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  linkContainer: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    textTransform: 'capitalize',
    marginLeft: theme.spacing(3),
  }
});

function Header(props) {
  const { classes, siteTitle, menuLinks } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} className={classes.appBar} role="banner">
      <Toolbar className={classes.toolbar} classes={{ gutters: classes.toolbarGutters }}>
        <Link className={classes.title} to={'/'}>
          { siteTitle }
        </Link>
        <span className={classes.flex}>
          <Button aria-controls="display-menu" aria-haspopup="true" onClick={handleOpen}>
            Display
          </Button>
          <DisplayMenu {...{ open, anchorEl, handleClose }}/>
          <nav aria-label="Primary navigation">
		        <ul className={classes.linkContainer}>
              { // TODO: Use aria-current
                menuLinks.map((link, index) =>
                <li>
                  <Link key={index} to={link.link} className={classes.link}>
                    {link.name}
                  </Link>
                </li>
              )}
		        </ul>
          </nav>
        </span>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withStyles(styles)(Header);
