import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import WebcamImg from 'assets/images/webcam.png';
import UploadImg from 'assets/images/upload.png';
import BasicImg from 'assets/images/basic.png';
import WorkerImg from 'assets/images/worker.png';
import OtherImg from 'assets/images/other.png';
import SecurityImg from 'assets/images/security.png';
import ProfileAvatar from 'assets/test/Profile.png';

import styles from './styles';

/**
 * @name PatientsProfileEditPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class PatientsProfileEditPage extends Component {
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

    const patientId = match.params.patientsId;

    return (
      <div className='ProfileEditPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect(`/patients/profile/${patientId}`)}>
              {literals.save}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.mainSection}>
          <Grid item lg={4} md={5} sm={6} xs={12}>
            <Grid container direction='row' spacing={16}>
              <Grid item sm={10} xs={12}>
                <img className={classes.avatar} src={ProfileAvatar} alt='profile_avatar' />
              </Grid>
              <Grid item sm={10} xs={12}>
                <Typography noWrap className={classes.label}>
                  {literals.changepp}
                </Typography>
              </Grid>
              <Grid item sm={10} xs={12}>
                <Button variant='text' className={classes.photoButton}>
                  {literals.selectdoc}
                  <img src={UploadImg} alt='upload_icon' />
                </Button>
              </Grid>
              <Grid item sm={10} xs={12}>
                <Button variant='text' className={classes.photoButton}>
                  {literals.takephoto}
                  <img src={WebcamImg} alt='webcam_icon' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={8} md={7} xs={12} className={classes.boxSection}>
            <Grid container justify='flex-end' spacing={32} direction='row'>
              <Grid item xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.basicinfo}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={BasicImg} alt='basic_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='row'>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={5}>
                          <Typography noWrap className={classes.label}>
                            {literals.name}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={7}>
                          <Typography noWrap className={classes.label}>
                            {literals.lastname}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={5}>
                          <Typography noWrap className={classes.label}>
                            {literals.nationalid}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={9}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.country}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.region}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.pc}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.email}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.telephone}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.workerinfo}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={WorkerImg} alt='worker_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='row'>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.workerid}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.status}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={7}>
                          <Typography noWrap className={classes.label}>
                            {literals.factory}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={5}>
                          <Typography noWrap className={classes.label}>
                            {literals.position}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container>
                        <Grid item>
                          <Typography noWrap className={classes.emergencyText}>
                            {literals.emergencycontact}
                          </Typography>
                        </Grid>
                        <Grid item container justify='space-around' className={classes.emergency}>
                          <Grid item xs={5}>
                            <Typography noWrap className={classes.label}>
                              {literals.startdate}
                            </Typography>
                            <input type='text' className={classes.input} />
                          </Grid>
                          <Grid item xs={5}>
                            <Typography noWrap className={classes.label}>
                              {literals.insurancestartdate}
                            </Typography>
                            <input type='text' className={classes.input} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.otherinfo}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={OtherImg} alt='worker_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='row'>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.fathersname}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.mothersname}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={9}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={7}>
                          <Typography noWrap className={classes.label}>
                            {literals.name}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={5}>
                          <Typography noWrap className={classes.label}>
                            {literals.tel}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.securityinfo}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={SecurityImg} alt='worker_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='row'>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.name}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography noWrap className={classes.label}>
                            {literals.id}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={9}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.country}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.region}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.pc}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.email}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.telephone}
                          </Typography>
                          <input type='text' className={classes.input} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect(`/patients/profile/${patientId}`)}>
              {literals.save}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PatientsProfileEditPage);
