import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

import HeaderAvatar from 'assets/test/header_avatar.png';

import styles from './styles';

class HeaderComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
    headerActions: PropTypes.object.isRequired,
    logoutAction: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  }

  handleRedirect = (path) => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  render() {
    const {
      classes,
      location,
      header,
      headerActions,
      logoutAction,
      user,
    } = this.props;

    return (
      <AppBar className={classNames(classes.root, header.open && classes.appBarShift)} position='relative'>
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Open drawer' onClick={header.open ? headerActions.closeLeftMenu : headerActions.openLeftMenu}>
            {header.open ? <CloseIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />}
          </IconButton>
          <img className={classes.avatar} src={HeaderAvatar} alt='header_avatar' onClick={() => this.handleRedirect('/profile')} />
          <Typography noWrap className={classes.title} color='inherit' onClick={() => this.handleRedirect('/profile')}>
            {user.first_name}
            {' '}
            {user.last_name}
          </Typography>
          <hr className={classes.verticalDivider} />
          <div className={classes.grow} />
          <hr className={classes.verticalDivider} />
          <div className={classes.logout}>
            <PowerSettingsNewIcon className={classes.logoutIcon} onClick={logoutAction} />
          </div>
        </Toolbar>
        <div className={classes.pathBar}>
          <Typography className={classes.title} color='inherit'>
            {location.pathname }
          </Typography>
          <div className={classes.grow} />
          <Typography className={classes.title} color='inherit'>
            Close
          </Typography>
        </div>
        <Divider className={classes.horizentalDivider} />
      </AppBar>
    );
  }
}

export default withStyles(styles)(HeaderComponent);
