import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { get } from 'lodash';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';

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
  chip: {
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
          <Chip label={card.category.name} className={classes.chip} />
          {card.disabilities.map((disability, i) => (
            <Chip key={`disability-${i}`} label={disability.name} className={classes.chip} />
          ))}
          {card.wcagNumbers.map((wcag, i) => (
            <Chip key={`wcag-${i}`} label={`${wcag.level.name} ${wcag.name}`} className={classes.chip} />
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
