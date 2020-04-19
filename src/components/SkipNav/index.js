import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Button from '../Button';

const styles = theme => ({
  root: {
    left: '0',
    padding: theme.spacing(2),
    position: 'absolute',
    top: '-9999px',
    zIndex: theme.zIndex.tooltip,

    '&:focus': {
      outlineOffset: '0 !important',
      left: '5px',
      top: '5px',
    }
  },
});

const SkipNav = props => {
  const { classes } = props;
  return (
    <Button className={classes.root} href="#main">
      {"Skip to main content"}
    </Button>
  );
};

export default withStyles(styles)(SkipNav);
