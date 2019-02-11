import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PatientInfo from 'components/PatientInfo';
import PatientContact from 'components/PatientContact';
import PatientProgress from 'components/PatientProgress';
import DiagnosticsTable from 'components/DiagnosticsTable';

import styles from './styles';

/**
 * @name PatientsProfileMedicalPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class PatientsProfileMedicalPage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  componentDidUpdate() {
  }

  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  render() {
    const {
      literals,
      classes,
      match,
    } = this.props;

    const patientsId = match.params.patientsId;

    return (
      <div className='ProfilePage'>
        <Grid container justify='flex-end'>
          <Grid item>
            {/* <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/profile/professional')}>
              <AddCircleOutlined fontSize='large' className={classes.leftIcon} />
              {literals.newdiagnosis}
            </Button> */}
            <Button variant='contained' color='secondary' className={classes.button} onClick={this.handleRedirect(`/patients/profile/${patientsId}`)}>
              {literals.personalprofile}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.patientInfo}>
          <PatientInfo />
        </Grid>
        <Grid container>
          <Grid item lg={3} md={4} sm={6} xs={12} className={classes.contactInfo}>
            <PatientContact />
          </Grid>
          <Grid item lg={9} md={8} xs={12} className={classes.boxSection} container justify='flex-end'>
            <Grid container item spacing={32} direction='column' md={11} xs={12}>
              <Grid item container>
                <PatientProgress />
              </Grid>
              <Grid item container>
                <Typography className={classes.tableName}>
                  {literals.past}
                </Typography>
                <Grid item container className={classes.borderBox}>
                  <DiagnosticsTable search={false} photoShow={false} entires={false} direct={false} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PatientsProfileMedicalPage);
