import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Menu from '../Menu';

const styles = theme => ({
  root: {
    // !important to override "translate: none" on style prop
    transform: `translateY(${theme.spacing(2)}px) !important`,
  },
  formControl: {
    width: '100%',
    paddingRight: theme.spacing(2),
  },
  formLabel: {
    color: theme.palette.common.black,
    marginBottom: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  divider: {
    width: theme.spacing(4),
    height: '1px',
    margin: theme.spacing(2),
    backgroundColor: theme.palette.common.black,
    border: 'none',
  }
});

function DisplayMenu(props) {
  const { classes, open, anchorEl, handleClose, isDarkMode, setDarkMode, ...other } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      className={classes.root}
      {...other}
    >
      <div className={classes.container}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Typeface</FormLabel>
          <FormGroup>
            <FormControlLabel 
              key={`display-typeface-comicsans`} 
              value={'comicsans'} 
              label={'Comic Sans'} 
              control={<Checkbox checked={false} onChange={() => {}}/>}
            />
            <FormControlLabel 
              key={`display-typeface-verdana`} 
              value={'verdana'} 
              label={'Verdana'} 
              control={<Checkbox checked={false} onChange={() => {}}/>}
            />
          </FormGroup>
        </FormControl>
        <hr className={classes.divider} />
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Mode</FormLabel>
          <FormGroup>
            <FormControlLabel 
              key={`display-mode-light`} 
              value={'light'} 
              label={'Light mode'} 
              control={<Checkbox checked={!isDarkMode} onChange={() => setDarkMode(false)}/>}
            />
            <FormControlLabel 
              key={`display-mode-dark`} 
              value={'dark'} 
              label={'Dark mode'} 
              control={<Checkbox checked={isDarkMode} onChange={() => setDarkMode(true)}/>}
            />
          </FormGroup>
        </FormControl>
      </div>
    </Menu>
  );
}

DisplayMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isDarkMode: state.display.isDarkMode,
});

const mapDispatchToProps = dispatch => ({
  setDarkMode: isDarkMode => dispatch({ type: 'SET_DARKMODE', isDarkMode }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DisplayMenu));
