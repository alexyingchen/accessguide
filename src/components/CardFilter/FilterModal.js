import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
//import Badge from '@material-ui/core/Badge';

const styles = theme => ({
  root: {},
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

function CardFilter(props) {
  const { classes, open, handleClose, ...other } = props;
  return (
    <Modal
      aria-labelledby="filter-modal-title"
      aria-describedby="filter-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div className={classes.paper} {...other}>
        <h2 id="filter-modal-title">Guidance filters</h2>
        <p id="filter-modal-description"></p>
      </div>
    </Modal>
  );
}

export default withStyles(styles)(CardFilter);

CardFilter.propTypes = {
  handleClose: PropTypes.func,
};
