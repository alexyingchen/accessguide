import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { get } from 'lodash';

import Filter from '../Filter';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {},
  flexbox: {
    display: 'flex',
    marginTop: '1rem',
  },
  image: {
    width: '40%',
    height: '100%',
  },
  quote: {
    paddingLeft: '40px',
    fontStyle: 'italic',
    marginBottom: '1rem',
  },
  filter: {
    marginRight: '1rem',
  }
});

function Card(props) {
  const { classes, card, ...other } = props;
  return (
    <MuiCard className={classes.root} {...other}>
      <CardContent>
        <Typography variant='h4'>
         {card.title}
        </Typography>
        <Box className={classes.flexbox}>
          <CardMedia
            className={classes.image}
            component="img"
            src={`https:${get(card, ['media', 0, 'file', 'url'])}`}
            title={get(card, ['media', 0, 'description'])}
          />
          <Container>
            <Box className={classes.quote}>
              <Typography variant="body1" color="textSecondary" fontStyle="italic">
                {card.quote.quote}
              </Typography> 
            </Box>
            <Typography variant="body1">
              {card.body.body}
            </Typography>
          </Container>
        </Box>
        <Box className={classes.flexbox}>
          <Filter type={card.category.name} className={classes.filter}>{card.category.name}</Filter>
          {card.disabilities.map((disability, i) => (
            <Filter key={`disability-${i}`} type={disability.name} className={classes.filter}>{disability.name}</Filter>
          ))}
          {card.wcagNumbers.map((wcag, i) => (
            <Filter key={`wcag-${i}`} type={wcag.level.name} className={classes.filter}>{wcag.name}</Filter>
          ))}
        </Box>
      </CardContent>
    </MuiCard>
  );
}

export default withStyles(styles)(Card);

Card.propTypes = {
  card: PropTypes.object,
};
