import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';

import FilterModal from './FilterModal';
import Button from '../Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  search: {
    width: '100%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.25),
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
});

function CardFilter(props) {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const { classes, ...other } = props;

  return (
    <Box className={classes.root} {...other}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button onClick={handleModalOpen}>Tags</Button>
      <FilterModal handleClose={handleClose} open={modalOpen}/>
    </Box>
  );
}

export default withStyles(styles)(CardFilter);

CardFilter.propTypes = {
  categoryFilter: PropTypes.arrayOf(PropTypes.string),
  subcategoryFilter: PropTypes.arrayOf(PropTypes.string),
  disabilityFilter: PropTypes.arrayOf(PropTypes.string),
  wcagNumberFilter: PropTypes.arrayOf(PropTypes.string),
};
