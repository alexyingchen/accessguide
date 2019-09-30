import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbarSpacer: theme.mixins.toolbar,
});

function Drawer(props) {
  const { classes } = props;
  return (
    <MuiDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbarSpacer} />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

Drawer.propTypes = {}

export default withStyles(styles)(Drawer);
