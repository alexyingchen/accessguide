import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { get } from 'lodash';

import Filter from '../Filter';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    border: '2px solid black',
    borderRadius: '0',
  },
  title: { ...theme.typography.h4, ...{
  }},
  description: {
  },
  quote: {
    paddingLeft: '40px',
    fontStyle: 'italic',
  },
  filter: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  filterContainer: {
    marginTop: theme.spacing(1),
  },
  image: {
    width: '100%',
    maxHeight: '20rem',
  }
});

function Card(props) {
  const { classes, card, ...other } = props;
  return (
    <MuiCard className={classes.root} {...other}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h3' className={classes.title} >
             {card.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.description}>
              {card.body.body}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.quote}>
              <Typography variant="body1" color="textSecondary" fontStyle="italic">
                {card.quote.quote}
              </Typography> 
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} justify="flex-start" className={classes.filterContainer}>
              <Grid item>
                <Filter type={card.category.name} className={classes.filter}/>
              </Grid>
              {card.disabilities.map((disability, i) => (
                <Grid item key={`disability-${i}`} >
                  <Filter type={disability.name} className={classes.filter}/>
                </Grid>
              ))}
              {card.wcagNumbers.map((wcag, i) => (
                <Grid item key={`wcag-${i}`}>
                  <Filter type={wcag.level.name} className={classes.filter}>{wcag.name}</Filter>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CardMedia
                className={classes.image}
                component="img"
                src={`https:${get(card, ['media', 0, 'file', 'url'])}`}
                title={get(card, ['media', 0, 'description'])}
            />
          </Grid>
        </Grid>
      </CardContent>
    </MuiCard>
  );
}

export default withStyles(styles)(Card);

Card.propTypes = {
  card: PropTypes.object,
};
