import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import LanguageSelector from 'components/LanguageSelector';
import {
  BASEROUTE,
  ROUTE_LOGOUT,
  ROUTE_PATIENTS_PAGE,
  ROUTE_SIGNUP,
} from 'routes';
import RecoverPasswordDialog from './RecoverPasswordDialog';

import './styles.css';

/**
 * @name Login
 * Main component to log in a user on the platform
 *
 * @param {Boolean}   isAuthenticated
 * @param {Object}    literals
 * @param {String}    userLang
 * @param {String}    loginError
 * @param {Function}  showLoading
 *
 * @returns {JSX}
 */
class Login extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    userLang: PropTypes.string.isRequired,
    literals: PropTypes.object.isRequired,
    loginError: PropTypes.string.isRequired,
    showLoading: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { userLang } = this.props;

    this.state = {
      email: '',
      password: '',
      lang: userLang,
      showPassword: false,
      formValid: false,
      recoverPassword: false,
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
      email,
      password,
    } = this.state;

    return this.setState({
      formValid: (email !== '' && password !== ''),
    });
  }

  /**
   * @name handleClickShowPassword
   * Function to show/hide password
   */
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  /**
   * @name handleMouseDownPassword
   * Function to prevent action onMouseDown button password
   */
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /**
   * @name handleRecoverPasswordShow
   * Opens recover password dialog
   */
  handleRecoverPasswordShow = () => {
    this.setState({
      recoverPassword: true,
    });
  }

  /**
   * @name handleRecoverPasswordClose
   * Closes recover password dialog
   */
  handleRecoverPasswordClose = () => {
    this.setState({
      recoverPassword: false,
    });
  }

  render() {
    const {
      literals,
      userLang,
      isAuthenticated,
      location,
      showLoading,
      loginError,
      onLogin,
    } = this.props;

    const {
      email,
      showPassword,
      password,
      formValid,
      recoverPassword,
    } = this.state;

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
        <Grid container spacing={0} className='Login__panel'>
          <Grid item xs={12} sm={12} md={4} className='Login__panel--left'>
            <div className='Login__panel--left__content'>
              <div className='Login__panel--left__content__header text-align-center'>
                <span className='title'>
                  {literals.title}
                </span>
                <p className='description'>
                  {literals.description}
                </p>
              </div>
              <div className='Login__panel--left__content__form'>
                <form onSubmit={event => onLogin(event, this.state)} noValidate autoComplete='off'>
                  <FormControl
                    fullWidth
                    className='form__field'
                  >
                    <InputLabel
                      htmlFor='adornment-email'
                      classes={{
                        root: 'form__field__label',
                      }}
                    >
                      {literals.email}
                    </InputLabel>
                    <Input
                      id='adornment-email'
                      type='text'
                      autoComplete='email'
                      autoFocus
                      value={email}
                      onChange={this.handleChange('email')}
                      inputProps={{
                        className: 'form__field__input',
                      }}
                    />
                  </FormControl>

                  <FormControl
                    fullWidth
                    className='form__field'
                  >
                    <InputLabel
                      htmlFor='adornment-password'
                      classes={{
                        root: 'form__field__label',
                      }}
                    >
                      {literals.password}
                    </InputLabel>
                    <Input
                      id='adornment-password'
                      type={showPassword ? 'text' : 'password'}
                      autoComplete='current-password'
                      value={password}
                      onChange={this.handleChange('password')}
                      inputProps={{
                        className: 'form__field__input',
                      }}
                      endAdornment={(
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='Toggle password visibility'
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )}
                    />
                  </FormControl>

                  {(loginError !== '') && (
                    <span className='error'>
                      {loginError}
                    </span>
                  )}

                  <Button
                    fullWidth
                    variant='contained'
                    color='primary'
                    className='btn-login'
                    type='submit'
                    disabled={!formValid}
                  >
                    {literals.actionBtn}
                  </Button>

                  <a className='btn-remember-password' onClick={this.handleRecoverPasswordShow}>
                    {literals.rememberPassword}
                  </a>

                  <Hidden mdUp>
                    <LanguageSelector />
                    <Button
                      fullWidth
                      component={Link}
                      to={ROUTE_SIGNUP}
                      variant='outlined'
                      color='primary'
                      className='btn-signup'
                    >
                      {literals.signupActionBtn}
                    </Button>
                  </Hidden>
                </form>
              </div>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item md={8} className='Login__panel--right'>
              <div className='Login__panel--right__content text-align-center'>
                <div className='Login__panel--right__content__header'>
                  <span className='title'>
                    {literals.signupTitle}
                  </span>
                  <p className='description'>
                    {literals.signupDescription}
                  </p>
                </div>
                <div className='Login__panel--right__content__form'>
                  <Button
                    fullWidth
                    component={Link}
                    to={ROUTE_SIGNUP}
                    variant='outlined'
                    className='btn-signup'
                  >
                    {literals.signupActionBtn}
                  </Button>
                </div>
              </div>

              <LanguageSelector />
            </Grid>
          </Hidden>
        </Grid>

        <RecoverPasswordDialog
          flagOpen={recoverPassword}
          literals={literals}
          userLang={userLang}
          showLoading={showLoading}
          onDialogClose={this.handleRecoverPasswordClose}
        />
      </div>
    );
  }
}

export default Login;
