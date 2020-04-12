import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  paper: {
    borderRadius: '0',
    border: '2px solid black',
    boxShadow: '9px 9px 0px 0px rgba(0, 0, 0, 0.5)',
    maxHeight: 'calc(100vh - 140px)', // TODO: remove hacky fix for long menus being pushed up
  },
  list: {
    padding: '0',
  }
});

function CustomMenu(props) {
  const { classes, children, className, anchorEl, open, onClose } = props;
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      onClose={onClose}
      elevation={0}
      keepMounted
      classes={{ 
        paper: clsx(classes.paper, className),
        list: classes.list
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      {children}
    </Menu>
  );
}

export default withStyles(styles)(CustomMenu);

CustomMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  anchorEl: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
