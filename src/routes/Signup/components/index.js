import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import LanguageSelector from 'components/LanguageSelector';

import { ROUTE_LOGIN, ROUTE_MAIN_PAGE } from 'routes';
import pattern from 'constants/patterns';

import './styles.css';

/**
 * @name Signup
 *
 *
 * @param {Boolean}   isAuthenticated
 * @param {Object}    literals
 * @param {Object}    signupData
 * @param {String}    userLang
 * @param {Function}  showLoading
 *
 * @returns {JSX}
 */
class Signup extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    literals: PropTypes.object.isRequired,
    signupData: PropTypes.object.isRequired,
    userLang: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    onSignup: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { userLang } = this.props;

    this.state = {
      firstname: '',
      lastName: '',
      email: '',
      lang: userLang,
      emailValid: false,
      formValid: false,
    };
  }

  componentDidUpdate({ signupData: { success: prevSuccess } }) {
    const {
      signupData: {
        success,
      },
    } = this.props;

    if (success !== prevSuccess) {
      this.clearForm();
    }
  }

  /**
   * @name handleChange
   * Function to control inputs changes
   */
  handleChange = name => (event) => {
    const value = event.target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.validateField(name, value);
    });
  };

  /**
   * @name validateField
   * Function to validate signup form fields
   */
  validateField = (fieldName, value) => {
    let { emailValid } = this.state;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(pattern.EMAIL);
        break;
      default:
        break;
    }

    this.setState({
      emailValid,
    }, this.validateForm);
  }

  /**
   * @name validateForm
   * Function to activate/deactivate signup button
   */
  validateForm = () => {
    const {
      firstname,
      lastName,
      emailValid,
    } = this.state;

    return this.setState({
      formValid: (firstname !== '' && lastName !== '' && emailValid),
    });
  }

  /**
   * @name clearForm
   * Sets component state to initial state
   */
  clearForm = () => {
    this.setState({
      firstname: '',
      lastName: '',
      email: '',
      emailValid: false,
      formValid: false,
    });
  }

  render() {
    const {
      literals,
      isAuthenticated,
      location,
      signupData: {
        success,
        error,
      },
      onSignup,
    } = this.props;

    const {
      firstname,
      lastName,
      email,
      formValid,
    } = this.state;

    if (isAuthenticated) {
      return (
        <Redirect to={{
          pathname: ROUTE_MAIN_PAGE,
          state: location.state,
        }}
        />
      );
    }

    return (
      <div className='Signup'>
        <Grid container spacing={0} className='Signup__panel'>
          <Hidden smDown>
            <Grid item md={8} className='Signup__panel--left'>
              <LanguageSelector direction='left' />

              <div className='Signup__panel--left__content text-align-center'>
                <div className='Signup__panel--left__content__header'>
                  <span className='title'>
                    {literals.loginTitle}
                  </span>
                  <p className='description'>
                    {literals.loginDescription}
                  </p>
                </div>
                <div className='Signup__panel--left__content__form'>
                  <Button
                    fullWidth
                    component={Link}
                    to={ROUTE_LOGIN}
                    variant='outlined'
                    className='btn-login'
                  >
                    {literals.loginActionBtn}
                  </Button>
                </div>
              </div>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={4} className='Signup__panel--right'>
            <div className='Signup__panel--right__content'>
              <div className='Signup__panel--right__content__header text-align-center'>
                <span className='title'>
                  {literals.title}
                </span>
                <p className='description'>
                  {literals.description}
                </p>
              </div>
              <div className='Signup__panel--right__content__form'>
                <form onSubmit={event => onSignup(event, this.state)} noValidate autoComplete='off'>
                  <FormControl
                    fullWidth
                    className='form__field'
                  >
                    <InputLabel
                      htmlFor='adornment-firstname'
                      classes={{
                        root: 'form__field__label',
                      }}
                    >
                      {literals.firstname}
                    </InputLabel>
                    <Input
                      id='adornment-firstname'
                      type='text'
                      autoComplete='given-name'
                      autoFocus
                      value={firstname}
                      onChange={this.handleChange('firstname')}
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
                      htmlFor='adornment-lastName'
                      classes={{
                        root: 'form__field__label',
                      }}
                    >
                      {literals.lastName}
                    </InputLabel>
                    <Input
                      id='adornment-lastName'
                      type='text'
                      autoComplete='family-name'
                      value={lastName}
                      onChange={this.handleChange('lastName')}
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
                      value={email}
                      onChange={this.handleChange('email')}
                      inputProps={{
                        className: 'form__field__input',
                      }}
                    />
                  </FormControl>

                  {(success !== '') && (
                    <span className='state-message state-message--success'>
                      {success}
                    </span>
                  )}

                  {(error !== '') && (
                    <span className='state-message state-message--error'>
                      {error}
                    </span>
                  )}

                  <Button
                    fullWidth
                    variant='contained'
                    color='primary'
                    className='btn-signup'
                    type='submit'
                    disabled={!formValid}
                  >
                    {literals.actionBtn}
                  </Button>
                  <Hidden mdUp>
                    <LanguageSelector />
                    <Button
                      fullWidth
                      component={Link}
                      to={ROUTE_LOGIN}
                      variant='outlined'
                      color='primary'
                      className='btn-login'
                    >
                      {literals.loginActionBtn}
                    </Button>
                  </Hidden>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Signup;
