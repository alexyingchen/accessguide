import React from 'react';

import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

function LinkComponent(props, ref) {
  return (
    <MuiLink color="textPrimary" component={GatsbyLink} ref={ref} {...props} />
  );
}

const Link = React.forwardRef(LinkComponent);

export default Link;
