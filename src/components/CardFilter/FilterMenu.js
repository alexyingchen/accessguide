import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Menu from '../Menu';
import Tag from '../Tag';

const filterQuery = graphql`
  query {
    allContentfulCategory(sort: {fields: createdAt, order: ASC}) {
      nodes{
        id
        name
      }
    }
    allContentfulDisability(sort: {fields: createdAt, order: ASC}) {
      nodes{
        id
        name
      }
    }
    allContentfulWcagLevel(sort: {fields: createdAt, order: ASC}) {
      nodes{
        id
        name
      }
    }
  }  
`;

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

function FilterMenu(props) {
  const { classes, open, anchorEl, handleClose, filters, toggleFilter, ...other } = props;
  const { allContentfulCategory, allContentfulDisability, allContentfulWcagLevel } = useStaticQuery(filterQuery);

  const getFilterCheckbox = (filterType, typeId) => (
    <Checkbox checked={filters[filterType].includes(typeId)} onChange={() => toggleFilter(filterType, typeId)} />
  );
  
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
          <FormLabel component="legend" className={classes.formLabel}>Category tag</FormLabel>
          <FormGroup>
            {allContentfulCategory.nodes.map((category, i) => (
              <FormControlLabel 
                key={`filter-category-${i}`} 
                value={category.id} 
                label={<Tag type={category.name}/>} 
                control={getFilterCheckbox('category', category.id)}
              />
            ))}
          </FormGroup>
        </FormControl>
        <hr className={classes.divider} />
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Disability tag</FormLabel>
          <FormGroup>
            {allContentfulDisability.nodes.map((disability, i) => (
              <FormControlLabel 
                key={`filter-disability-${i}`} 
                value={disability.id} 
                label={<Tag type={disability.name}/>} 
                control={getFilterCheckbox('disability', disability.id)}
              />
            ))}
          </FormGroup>
        </FormControl>
        <hr className={classes.divider} />
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>WCAG tag</FormLabel>
          <FormGroup>
            {allContentfulWcagLevel.nodes.map((wcagLevel, i) => (
              <FormControlLabel 
                key={`filter-wcagLevel-${i}`} 
                value={wcagLevel.id}
                label={<Tag type={wcagLevel.name}/>} 
                control={getFilterCheckbox('wcagLevel', wcagLevel.id)}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </Menu>
  );
}

FilterMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  toggleFilter: (filterType, typeId) => dispatch({ type: 'TOGGLE_FILTER', filterType, typeId }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FilterMenu));
