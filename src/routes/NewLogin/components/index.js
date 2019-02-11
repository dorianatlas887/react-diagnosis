import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import LoginImg from 'assets/images/login.png';

import {
  BASEROUTE,
  ROUTE_LOGOUT,
  ROUTE_PATIENTS_PAGE,
} from 'routes';

import styles from './styles';

/**
 * @name NewLogin
 * Main component to log in a user on the platform
 *
 * @param {Boolean}   isAuthenticated
 * @param {Object}    literals
 * @param {String}    userLang
 * @param {String}    loginError
 *
 * @returns {JSX}
 */
class NewLogin extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    loginActions: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: '',
      formValid: false,
    };
  }

  /**
   * @name handleChange
   * Function to control inputs changes
   */
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    }, this.validateForm);
  };

  /**
   * @name validateForm
   * Function to activate/deactivate login button
   */
  validateForm = () => {
    const {
      user,
      password,
    } = this.state;

    return this.setState({
      formValid: (user !== '' && password !== ''),
    });
  }

  render() {
    const {
      user,
      password,
      formValid,
    } = this.state;

    const {
      isAuthenticated,
      location,
      literals,
      classes,
      loginActions,
    } = this.props;

    if (isAuthenticated) {
      const flagRedirect = location.state
                           && location.state.from !== BASEROUTE
                           && location.state.from !== ROUTE_LOGOUT;
      const redirectTo = (flagRedirect) ? location.state.from : ROUTE_PATIENTS_PAGE;

      return (
        <Redirect to={{
          pathname: redirectTo,
          state: location.state,
        }}
        />
      );
    }

    return (
      <div className='Login'>
        <Grid container alignItems='center' justify='center' className={classes.screen}>
          <Grid item lg={3} md={5} sm={7} xs={10} container direction='column' spacing={16}>
            <Grid item>
              <img src={LoginImg} alt='login_img' className={classes.image} />
            </Grid>
            <Grid item>
              <Typography className={classes.label}>
                {literals.user}
              </Typography>
              <input type='text' className={classes.input} value={user} onChange={this.handleChange('user')} />
            </Grid>
            <Grid item>
              <Typography className={classes.label}>
                {literals.password}
              </Typography>
              <input type='text' className={classes.input} value={password} onChange={this.handleChange('password')} />
            </Grid>
            <Grid item>
              <Button variant='contained' color='primary' className={classes.button} disabled={!formValid} onClick={() => loginActions.fetchloginAction()}>
                {literals.access}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(NewLogin);
