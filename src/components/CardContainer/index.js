import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';

import CardFilter from '../CardFilter';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';

const styles = theme => ({
  root: {
    width: '70vw',
    margin: '0',
    padding: '0',
    marginLeft: theme.spacing(4),
  },
});

const cardQuery = graphql`
    query {
      allContentfulCard(
        sort: {
          fields: title
          order: ASC
        }
        filter: {
        }
      ) {
        nodes {
          title
          media {
            file {
              url
              fileName
              contentType
            }
            description
          }
          quote {
            quote
          }
          body {
            body
          }
          wcagNumbers {
            id
            name
            level {
              name
            }
          }
          category {
            id
            name
          }
          subcategories {
            id
            name
          }
          disabilities {
            id
            name
          }
        }
      }
    }  
  `;

class CardContainer extends React.Component {
  state = {
    categoryFilter: [],
    subcategoryFilter: ["ace71a5b-3178-53b5-be90-84b73ee62f50"],
    disabilityFilter: [],
    wcagNumberFilter: ['4d16dcab-ca6a-57f0-8827-77a93abf87e8'],
  }

  getFilterQuery = (filterName) => {
    const filters = this.state[`${filterName}Filter`];
    if (filters.length === 0) {
      return '';
    }
    if (Array.isArray(filters)) {
      return `${filterName}: {
        elemMatch: {
          id: {
            in: ${filters}
          }
        }
      }`
    } else {
      return `${filterName}: {
        id: {
          eq: ${filters}
        }
      }` 
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <StaticQuery query={cardQuery} render={({ allContentfulCard }) => (
        <Container className={classes.root}>
          <CardFilter {...this.state}/>
          <Grid container justify="center" spacing={3}>
            {allContentfulCard.nodes.map((card, i) => (
              <Grid item xs={9} key={`card-${i}`}>
                <Card card={card}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}/>
    );
  }
}

export default withStyles(styles)(CardContainer);
