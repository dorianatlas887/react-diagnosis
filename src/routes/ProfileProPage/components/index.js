import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DiagnosticsTable from 'components/DiagnosticsTable';
import PatientTable from 'components/PatientTable';

import EmailImg from 'assets/images/email.png';
import PhoneImg from 'assets/images/phone.png';
import ProfileAvatar from 'assets/test/Profile.png';

import {
  ROUTE_PROFILE_PAGE,
} from 'routes';

import styles from './styles';

/**
 * @name ProfileProPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class ProfileProPage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    value: 0,
  };

  componentDidUpdate() {
  }

  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      literals,
      classes,
    } = this.props;

    const { value } = this.state;

    return (
      <div className='WorkersPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='secondary' className={classes.button} onClick={this.handleRedirect(ROUTE_PROFILE_PAGE)}>
              {literals.perprofile}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.mainSection} spacing={32}>
          <Grid item>
            <img className={classes.avatar} src={ProfileAvatar} alt='profile_avatar' />
          </Grid>
          <Grid item>
            <Typography noWrap className={classes.name}>
              Aarusha Badour
            </Typography>
            <Typography noWrap className={classes.national}>
              <span className={classes.nationalSpan}>{literals.nationalid}</span>
              {' '}
              123456789
            </Typography>
          </Grid>
          <Grid item>
            <Typography noWrap className={classes.status}>
              Active
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item lg={3} md={4} sm={6} xs={12} className={classes.contactInfo} direction='column' spacing={16}>
            <Grid container item justify='space-between' alignItems='center'>
              <Grid item>
                <Typography noWrap className={classes.label}>
                  {literals.email}
                </Typography>
                <Typography noWrap className={classes.text}>
                  aarusha2email.com
                </Typography>
              </Grid>
              <Grid item>
                <img src={EmailImg} alt='email_icon' />
              </Grid>
            </Grid>
            <Grid container item justify='space-between' alignItems='center'>
              <Grid item>
                <Typography noWrap className={classes.label}>
                  {literals.tel}
                </Typography>
                <Typography noWrap className={classes.text}>
                  798645132985
                </Typography>
              </Grid>
              <Grid item>
                <img src={PhoneImg} alt='email_icon' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={9} md={8} xs={12} className={classes.boxSection}>
            <Grid container justify='flex-end' spacing={32} direction='row'>
              <Grid container item md={11} xs={12} direction='column'>
                <Grid item>
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab label={literals.patients} />
                    <Tab label={literals.diagnostics} />
                  </Tabs>
                </Grid>
                {value === 0 && (
                  <Grid item container className={classes.tabContainer}>
                    <PatientTable search={false} entires={false} />
                  </Grid>
                )}
                {value === 1 && (
                  <Grid item container className={classes.tabContainer}>
                    <DiagnosticsTable search={false} entires={false} photoShow={false} />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileProPage);
