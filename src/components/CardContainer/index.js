import React from 'react';
import { connect } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
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
          category {
            id
            name
          }
          disabilities {
            id
            name
          }
          wcagNumbers {
            id
            name
            level {
              id
              name
            }
          }
        }
      }
    }  
  `;

function CardContainer(props) {
  const { classes, filters } = props;
  const { allContentfulCard } = useStaticQuery(cardQuery);

  const filterCard = (card, tagType, tagFilters) => {
    if (tagFilters.length === 0) {
      return true;
    }
    if (tagType === 'category') {
      return tagFilters.some(f => card[tagType].id === f);
    } else if (tagType === 'disabilities') {
      const disabilityIds = card.disabilities.map(disability => disability.id);
      return tagFilters.every(f => disabilityIds.indexOf(f) > -1);
    } else if (tagType === 'wcagNumbers') {
      const wcagLevelIds = card.wcagNumbers.map(number => number.level.id);
      return tagFilters.every(f => wcagLevelIds.indexOf(f) > -1);
    }
  }

  const getFilteredCards = (cards) => (
    cards
      .filter(c => filterCard(c, 'category', filters.category))
      .filter(c => filterCard(c, 'disabilities', filters.disability))
      .filter(c => filterCard(c, 'wcagNumbers', filters.wcagLevel))
  );

  return (
    <Container className={classes.root}>
      <CardFilter />
      <Grid container justify="center" spacing={5}>
        {getFilteredCards(allContentfulCard.nodes).map((card, i) => (
          <Grid item xs={12} md={9} lg={7} key={`card-${i}`}>
            <Card card={card}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps, null)(withStyles(styles)(CardContainer));
