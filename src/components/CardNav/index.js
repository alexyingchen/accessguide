import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const navQuery = graphql`
  query {
    allContentfulCategory(sort: {fields: createdAt, order: ASC}) {
      nodes{
        id
        name
        subcategories {
          id
          name
        }
      }
    }
  }  
`;

const styles = theme => ({
  nav: {
    width: '25%',
    minWidth: '12rem',
    maxWidth: '22rem',
    maxHeight: '80vh',
    border: '2px solid black',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
  },
  list: {
    padding: theme.spacing(1),
  },
  item: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

function CardNav(props) {
  const { classes } = props;
  const { allContentfulCategory } = useStaticQuery(navQuery);

  return (
    <nav
      className={classes.nav}
    >
      <List dense className={classes.list}>
        {allContentfulCategory.nodes.map((category, i) => (
          <Fragment key={`category-${i}`}>
            <ListItem button>
              <ListItemText primary={category.name} classes={{ primary: classes.item }} />
            </ListItem>
            <List dense disablePadding>
              {category.subcategories.map((subcategory, j) => (
                <ListItem button key={`subcategory-${i}-${j}`} className={classes.nested}>
                  <ListItemText primary={subcategory.name} classes={{ primary: classes.item }} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </List>
    </nav>
  );
};

CardNav.propTypes = {}

export default withStyles(styles)(CardNav);
