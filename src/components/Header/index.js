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
    position: 'fixed',
  },
  title: {
    flexGrow: 1,
  },
});

function Header(props) {
  const { classes, siteTitle, menuLinks } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          { siteTitle }
        </Typography>
        {menuLinks.map((link, index) =>
          <Link key={index} to={link.link}>
            <Button variant="contained" color="primary" key={link.link}>
              {link.name}
            </Button>
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
