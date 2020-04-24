import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    borderRadius: '0',
    border: '2px solid black',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textTransform: 'none',
    boxShadow: 'none',

    '&:focus': {
      transition: '0s',
      boxShadow: `5px 5px 0px ${theme.palette.warning.light}`,
    }
  },
});

function CustomButton(props) {
  const { classes, children, className, ...other } = props;
  return (
    <Button variant="contained" className={clsx(classes.root, className)} {...other}>
      {children}
    </Button>
  );
}

export default withStyles(styles)(CustomButton);

CustomButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
