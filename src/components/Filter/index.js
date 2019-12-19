import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Button from '../Button';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2, 0, 0),
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    padding: theme.spacing(0, 2, 0, 2),
    height: theme.spacing(6),
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
  'Cognitive': 'TEST',
  'Hearing': 'TEST',
  'Physical': 'TEST',
  'Visual': 'TEST',
  'A': 'A',
  'AA': 'AAA',
  'AAA': 'AAA',
}

function Filter(props) {
  const { classes, children, className, type, ...other } = props;

  const highlightContent = highlightContentMap[type];
  const highlightColor = highlightColorMap[type];
  const highlightStyle = {
    backgroundColor: highlightColor || 'red',
    ...(!highlightContent && { 
      width: '8px',
      padding: 0,
    }),
  }
  return (
    <Button className={clsx(classes.root, className)} {...other}>
      <div className={classes.highlight} style={highlightStyle}>{highlightContent}</div>
      {children}
    </Button>
  );
}

export default withStyles(styles)(Filter);

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['Content', 'Design', 'Programming', 'Cognitive', 'Hearing', 'Physical', 'Visual', 'A', 'AA', 'AAA'])
};