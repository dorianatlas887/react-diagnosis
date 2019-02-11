import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import PatientInfo from 'components/PatientInfo';
import PatientProgress from 'components/PatientProgress';
import DiagnosticsTable from 'components/DiagnosticsTable';
import DiagnosisDetail from 'components/DiagnosisDetail';

import { DownloadIcon } from 'components/Icons';

import styles from './styles';

/**
 * @name PatientsProfileDiagnosisPageComponents
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class PatientsProfileDiagnosisPageComponents extends Component {
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
              <DownloadIcon className={classes.downIcon} />
              {literals.printdiagnosis}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.patientInfo}>
          <PatientInfo />
        </Grid>
        <Grid container className={classes.mainSection}>
          <Grid item md={5} xs={12} className={classes.leftSection}>
            <Grid container direction='column' spacing={32}>
              <Grid item>
                <PatientProgress editable={false} />
              </Grid>
              <Grid item>
                <Typography className={classes.tableName}>
                  {literals.past}
                </Typography>
                <Grid container className={classes.borderBox}>
                  <DiagnosticsTable search={false} entires={false} photoShow={false} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} xs={12} className={classes.rightSection}>
            <DiagnosisDetail />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PatientsProfileDiagnosisPageComponents);
