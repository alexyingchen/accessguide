import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { get } from 'lodash';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tag from '../Tag';

const styles = theme => ({
  root: {
    border: '2px solid black',
    borderRadius: '0',
    padding: theme.spacing(2),
  },
  title: { ...theme.typography.h4, ...{
  }},
  description: {
  },
  quote: {
    paddingLeft: '40px',
    fontStyle: 'italic',
  },
  tag: {
    marginRight: theme.spacing(1),
  },
  tagContainer: {
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
            <Grid container spacing={1} justify="flex-start" className={classes.tagContainer}>
              <Grid item>
                <Tag type={card.category.name} className={classes.tag}/>
              </Grid>
              {card.disabilities.map((disability, i) => (
                <Grid item key={`disability-${i}`} >
                  <Tag type={disability.name} className={classes.tag}/>
                </Grid>
              ))}
              {card.wcagNumbers.map((wcag, i) => (
                <Grid item key={`wcag-${i}`}>
                  <Tag type={wcag.level.name} className={classes.tag}>{wcag.name}</Tag>
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
