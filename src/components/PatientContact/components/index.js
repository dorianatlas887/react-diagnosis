import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import EmailImg from 'assets/images/email.png';
import PhoneImg from 'assets/images/phone.png';

import styles from './styles';

class PatientContactComponent extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    email: PropTypes.string,
    tel: PropTypes.string,
    emergencyFirstName: PropTypes.string,
    emergencyLastName: PropTypes.string,
    emergencyPhone: PropTypes.string,
  }

  static defaultProps = {
    email: '',
    tel: '',
    emergencyFirstName: '',
    emergencyLastName: '',
    emergencyPhone: '',
  };


  handleRedirect = () => {
  };

  render() {
    const {
      classes,
      literals,
      email,
      tel,
      emergencyFirstName,
      emergencyLastName,
      emergencyPhone,
    } = this.props;

    return (
      <Grid container direction='column' spacing={16}>
        <Grid container item justify='space-between' alignItems='center'>
          <Grid item>
            <Typography noWrap className={classes.label}>
              {literals.email}
            </Typography>
            <Typography noWrap className={classes.text}>
              {email}
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
              {tel}
            </Typography>
          </Grid>
          <Grid item>
            <img src={PhoneImg} alt='email_icon' />
          </Grid>
        </Grid>
        <Grid item>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item>
          <Typography noWrap className={classes.emergency}>
            {literals.emergencycontact}
          </Typography>
        </Grid>
        <Grid container item justify='space-between' alignItems='center'>
          <Grid item>
            <Typography noWrap className={classes.label}>
              {emergencyFirstName}
              {' '}
              {emergencyLastName}
            </Typography>
            <Typography noWrap className={classes.text}>
              {emergencyPhone}
            </Typography>
          </Grid>
          <Grid item>
            <img src={PhoneImg} alt='email_icon' />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(PatientContactComponent);
