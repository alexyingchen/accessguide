import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    textTransform: 'none',
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
