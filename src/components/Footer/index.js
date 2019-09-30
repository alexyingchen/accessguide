import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    color: `#aaa`,
    padding: `20px 20px 10px`,
    fontSize: `14px`,
    textAlign: `center`,
  },
});

function Footer(props) {
  const { classes, children } = props;
  return (
    <footer className={classes.root}>
      {children}
    </footer>
  );
};

Footer.propTypes = {}

export default withStyles(styles)(Footer);
