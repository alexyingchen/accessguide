import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { intersection } from 'lodash';

import CardFilter from '../CardFilter';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';

const styles = theme => ({
  root: {
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
    subcategoryFilter: [],
    disabilityFilter: [],
    wcagNumberFilter: [],
  }

  filterCard = (card, tagType, filters) => {
    if (filters.length > 0) {
      // Cards can only have 1 category
      if (tagType === 'category') {
        return filters.some(f => card[tagType].id === f);
      }
      // Card passes filter if intersection of card tags and filters
      const typeIds = card[tagType].map(types => types.id);
      return intersection(typeIds, filters).length > 0;
    }
    return true;
  }

  getFilteredCards = (cards) => (
    cards
      .filter(c => this.filterCard(c, 'category', this.state.categoryFilter))
      .filter(c => this.filterCard(c, 'subcategories', this.state.subcategoryFilter))
      .filter(c => this.filterCard(c, 'disabilities', this.state.disabilityFilter))
      .filter(c => this.filterCard(c, 'wcagNumbers', this.state.wcagNumberFilter))
  );

  render() {
    const { classes } = this.props;
    return (
      <StaticQuery query={cardQuery} render={({ allContentfulCard }) => (
        <Container className={classes.root}>
          <CardFilter {...this.state}/>
          <Grid container justify="center" spacing={5}>
            {this.getFilteredCards(allContentfulCard.nodes).map((card, i) => (
              <Grid item xs={12} md={9} lg={7} key={`card-${i}`}>
                <Card card={card}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      )} />
    );
  }
}

export default withStyles(styles)(CardContainer);
