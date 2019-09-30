import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';

const metaDataQuery = graphql`
  query {
    allContentfulCard {
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
          name
          level {
            name
          }
        }
        category {
          name
        }
        subcategories {
          name
        }
        disabilities {
          name
        }
      }
    }
  }  
`;

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '2em',
  },
}));

function CardContainer({ children }) {
  const { allContentfulCard } = useStaticQuery(metaDataQuery);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {allContentfulCard.nodes.map((card, i) => (
          <Grid item xs={12} key={`card-${i}`}>
            <Card card={card}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardContainer;
