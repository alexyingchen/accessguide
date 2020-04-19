import React from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
});

const Main = props => {
  const { classes, additionalClasses, children } = props;

  return (
    <main
      aria-labelledby="#header"
      className={clsx(classes.root, additionalClasses)}
      id="main"
      role="main"
    >
      {children}
    </main>
  );
};

Main.propTypes = {
  additionalClasses: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default withStyles(styles)(Main);