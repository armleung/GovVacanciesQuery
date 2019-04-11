import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import { CIVIL } from '../shared/civil';
import { NONCIVIL } from '../shared/nonCivil';

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  }
});

function BottomAppBar(props) {
  const { classes } = props;
  return (
      <div className="container">
        <CssBaseline />
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            政 府 職 位 空 缺 查 詢 系 統
          </Typography>
          <List className={classes.list}>
            <ListSubheader className={classes.subHeader}>公務員職位空缺</ListSubheader>
              {CIVIL.map(({ id, primary,secondary,person}) => (
                <Fragment key = {id}>      
                  <ListItem button>
                    <Avatar alt="Profile Picture" src={person}/>
                    <ListItemText primary={primary} secondary={secondary}/>
                  </ListItem>
                </Fragment>
              ))}
            <Divider />
            <ListSubheader className={classes.subHeader}>非公務員職位空缺</ListSubheader>
              {NONCIVIL.map(({ id, primary,secondary,person}) => (
                <Fragment key = {id}>      
                  <ListItem button>
                    <Avatar alt="Profile Picture" src={person}/>
                    <ListItemText primary={primary} secondary={secondary}/>
                  </ListItem>
                </Fragment>
              ))}
          </List>
        </Paper>
      </div>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
