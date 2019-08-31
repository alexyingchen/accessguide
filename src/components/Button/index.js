import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
  },
}));

function CustomButton(props) {
  const { children, className, ...other } = props;
  const classes = useStyles();
  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children}
    </Button>
  );
}

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
