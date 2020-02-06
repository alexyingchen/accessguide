import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Button from '../Button';
import Link from '../Link';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '0.8rem',
    padding: '0',
    minWidth: '0',
    border: '2px solid black',
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1, 0, 1),
    height: theme.spacing(4),
  },
  content: {
    margin: theme.spacing(0, 1, 0, 1),
  }
});

const highlightColorMap = {
  'Content': 'red',
  'Design': 'red',
  'Programming': 'red',
  'Cognitive': 'red',
  'Hearing': 'red',
  'Physical': 'red',
  'Visual': 'red',
  'A': 'red',
  'AA': 'red',
  'AAA': 'red',
}

const highlightContentMap = {
  'Content': '',
  'Design': '', 
  'Programming': '',
  'Cognitive': 'ABC',
  'Hearing': 'ABC',
  'Physical': 'ABC',
  'Visual': 'ABC',
  'A': 'A',
  'AA': 'AAA',
  'AAA': 'AAA',
}

function Tag(props) {
  const { classes, children, className, type, onClick, href, ...other } = props;

  let ComponentType = 'div';
  if (onClick) {
    ComponentType = Button;
  } else if (href) {
    ComponentType = Link;
  }

  const highlightContent = highlightContentMap[type];
  const highlightColor = highlightColorMap[type];
  const highlightStyle = {
    backgroundColor: highlightColor || 'red',
    // Update highlight style for Category filters, which have no highligh content
    ...(!highlightContent && {
      width: '8px',
      padding: 0,
    }),
  }

  // Wcag filters will either use `children` (if provided) or it will hide the filter content
  const content = children || (!['A', 'AA', 'AAA'].includes(type) && type);

  return (
    <ComponentType className={clsx(classes.root, className)} {...other}>
      <div className={classes.highlight} style={highlightStyle}>{highlightContent}</div>
      {content && (
        <div className={classes.content}> 
          {content}
        </div>
      )}
    </ComponentType>
  );
}

export default withStyles(styles)(Tag);

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.oneOf(['Content', 'Design', 'Programming', 'Cognitive', 'Hearing', 'Physical', 'Visual', 'A', 'AA', 'AAA'])
};
