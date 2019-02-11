import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import GroupIcon from 'assets/images/Group.png';

import styles from './styles';

/**
 * @name LeftMenu
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class LeftMenuComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
    literals: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }

  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  render() {
    const {
      classes,
      header,
      literals,
      user,
      isAuthenticated,
    } = this.props;

    return (
      <React.Fragment>
        {isAuthenticated && (
          <Drawer
            variant='permanent'
            classes={{
              paper: classNames(classes.root, !header.open && classes.drawerPaperClose),
            }}
            open={header.open}
          >
            <div className={classes.topRow}>
              <img className={classes.groupIcon} src={GroupIcon} alt='Group Icon' />
              <Typography className={classes.groupText}>
                {user.factory}
              </Typography>
            </div>
            <Divider className={classes.divider} />
            <List className={classes.list}>
              <ListItem button className={classes.listItem} onClick={this.handleRedirect('/patients')}>
                <ListItemText classes={{ primary: classes.listText }} primary={literals.patients} />
              </ListItem>
              <ListItem button className={classes.listItem} onClick={this.handleRedirect('/diagnostics')}>
                <ListItemText classes={{ primary: classes.listText }} primary={literals.diagnostics} />
              </ListItem>
              <ListItem button className={classes.listItem} onClick={this.handleRedirect('/help')}>
                <ListItemText classes={{ primary: classes.listText }} primary={literals.help} />
              </ListItem>
            </List>
          </Drawer>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LeftMenuComponent);
