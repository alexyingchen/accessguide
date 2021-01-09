import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Menu from '../Menu';

const styles = theme => ({
  root: {
    // !important to override "translate: none" on style prop
    transform: `translateY(${theme.spacing(1)}px) !important`,
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
  const { classes, open, anchorEl, handleClose, ...other } = props;
  const isDarkMode = useSelector(state => state.display.isDarkMode);
  const dispatch = useDispatch();

  return (
    <Menu
      id="display-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      className={classes.root}
      {...other}
    >
      <div className={classes.container}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Typeface</FormLabel>
          <RadioGroup>
            <FormControlLabel 
              key={`display-typeface-comicsans`} 
              value={'comicsans'} 
              label={'Comic Sans'} 
              control={<Radio color="default" checked={false} onChange={() => {}}/>}
            />
            <FormControlLabel 
              key={`display-typeface-verdana`} 
              value={'verdana'} 
              label={'Verdana'} 
              control={<Radio color="default" checked={true} onChange={() => {}}/>}
            />
          </RadioGroup>
        </FormControl>
        <hr className={classes.divider} />
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Mode</FormLabel>
          <RadioGroup>
            <FormControlLabel 
              key={`display-mode-light`} 
              value={'light'} 
              label={'Light mode'} 
              control={
                <Radio color="default" checked={!isDarkMode} onChange={() => dispatch({ type: 'SET_DARKMODE', isDarkMode: false })}/>
              }
            />
            <FormControlLabel 
              key={`display-mode-dark`} 
              value={'dark'} 
              label={'Dark mode'} 
              control={
                <Radio color="default" checked={isDarkMode} onChange={() => dispatch({ type: 'SET_DARKMODE', isDarkMode: true })}/>
              }
            />
          </RadioGroup>
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

export default withStyles(styles)(DisplayMenu);
