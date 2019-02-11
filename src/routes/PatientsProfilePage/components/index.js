import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PatientInfo from 'components/PatientInfo';
import PatientContact from 'components/PatientContact';

import EditImg from 'assets/images/edit.png';
import BasicImg from 'assets/images/basic.png';
import WorkerImg from 'assets/images/worker.png';
import OtherImg from 'assets/images/other.png';
import SecurityImg from 'assets/images/security.png';

import styles from './styles';

/**
 * @name PatientsProfilePage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class PatientsProfilePage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    patients: PropTypes.array.isRequired,
  };

  state = {
    patient: {
      id: '',
      imageurl: '',
      first_name: '',
      last_name: '',
      national_id: '',
      gender: '',
      age: '',
      email: '',
      tel: '',
      emergency_contact: {
        name: '',
        last_name: '',
        phone: '',
        mail: '',
      },
      address: '',
      number: '',
      country: '',
      region: '',
      pc: '',
      worker_id: '',
      position: '',
      factory: '',
      start_date: '',
      insourance_start_date: '',
      father_name: '',
      mother_name: '',
      home_adress: '',
      home_number: '',
      beneficiary_Name: '',
      beneficiary_id: '',
      beneficiary_address: '',
      beneficiary_number: '',
      beneficiary_pc: '',
      beneficiary_region: '',
      beneficiary_tel: '',
    },
  };

  componentDidMount() {
    // function to fetch patients if not exist
    const {
      match,
      patients,
    } = this.props;

    const patient = patients.find(object => (
      object.id === match.params.patientsId
    ));

    this.setState({
      patient,
    });
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

    const {
      patient,
    } = this.state;

    const patientsId = match.params.patientsId;

    return (
      <div className='ProfilePage'>
        <Grid container justify='flex-end'>
          <Grid item>
            {/* <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/profile/professional')}>
              <AddCircleOutlined fontSize='large' className={classes.leftIcon} />
              {literals.newdiagnosis}
            </Button> */}
            <Button variant='contained' color='secondary' className={classes.button} onClick={this.handleRedirect(`/patients/profile/medical/${patientsId}`)}>
              {literals.medicalprofile}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.patientInfo}>
          <PatientInfo firstName={patient.first_name} lastName={patient.last_name} nationalId={patient.national_id} gender={patient.gender} age={patient.age} />
        </Grid>
        <Grid container>
          <Grid item lg={3} md={4} sm={6} xs={12} className={classes.contactInfo}>
            <PatientContact email={patient.email} tel={patient.tel} emergencyFirstName={patient.emergency_contact.name} emergencyLastName={patient.emergency_contact.last_name} emergencyPhone={patient.emergency_contact.phone} />
          </Grid>
          <Grid item lg={9} md={8} xs={12} className={classes.boxSection}>
            <Grid container justify='flex-end' spacing={32} direction='row'>
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.basicinfo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={BasicImg} alt='basic_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.address}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.number}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.country}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.country}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.region}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.region}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.pc}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.pc}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.workerinfo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={WorkerImg} alt='worker_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.workerid}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.worker_id}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.position}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.position}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.factory}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.factory}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.startdate}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.start_date}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.insurancestartdate}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.insourance_start_date}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.otherinfo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={OtherImg} alt='other_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.fathersname}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.father_name}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.mothersname}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.mother_name}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.homeaddress}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.home_adress}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.home_number}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.beneficiary}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={SecurityImg} alt='security_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.name}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.beneficiary_Name}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.id}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.beneficiary_id}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.beneficiary_address}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.beneficiary_number}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.pc}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.beneficiary_pc}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.region}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.beneficiary_region}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.tel}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            {patient.beneficiary_tel}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PatientsProfilePage);
