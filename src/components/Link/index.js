import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const styles = theme => ({
  root: {
    borderBottom: '2px solid transparent',
    '&:hover': {
      fontWeight: theme.typography.fontWeightMedium,
      borderBottom: '2px solid black',
    }
  }
});

function LinkComponent(props, ref) {
  return (
    <MuiLink underline="none" color="textPrimary" component={GatsbyLink} ref={ref} {...props} />
  );
}

const Link = React.forwardRef(LinkComponent);

export default withStyles(styles)(Link);
