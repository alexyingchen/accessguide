import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
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
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  link: {
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(2),
  }
});

function Header(props) {
  const { classes, siteTitle, menuLinks } = props;
  return (
    <AppBar position="absolute" elevation="0" className={classes.appBar}>
      <Toolbar classes={{ gutters: classes.toolbarGutters }}>
        <Link to={'/'} className={classes.title}>
          <Typography variant="h6" noWrap>
            { siteTitle }
          </Typography>
        </Link>
        <Button>
          Display
        </Button>
        {menuLinks.map((link, index) =>
          <Link key={index} to={link.link} className={classes.link}>
            {link.name}
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withStyles(styles)(Header);
