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
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar classes={{ gutters: classes.toolbarGutters }}>
        <nav className={classes.nav}>
          <span className={classes.title}>
            <Link to={'/'}>
              { siteTitle }
            </Link>
          </span>
          <Button onClick={handleOpen}>
            Display
          </Button>
          <DisplayMenu {...{ open, anchorEl, handleClose }}/>
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

export default withStyles(styles)(Header);
