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
import ProfileAvatar from 'assets/test/Profile.png';

import {
  ROUTE_PROFILE_PAGE,
} from 'routes';

import styles from './styles';

/**
 * @name ProfileEditPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class ProfileEditPage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    updateProfileActions: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    userInfo: {
      imageurl: '',
      first_name: '',
      last_name: '',
      full_name: '',
      national_id: '',
      user_id: '',
      email: '',
      tel: '',
      address: '',
      number: '',
      country: '',
      region: '',
      pc: '',
      worker_id: '',
      position: '',
      factory: '',
      start_date: '',
      tree_version: '',
    },
    formValid: true,
  };

  componentDidMount() {
    const {
      user,
    } = this.props;

    this.setState({
      userInfo: {
        ...user,
      },
    });
  }

  handleUpdate = () => {
    const {
      updateProfileActions,
      history,
    } = this.props;

    const {
      userInfo,
    } = this.state;

    updateProfileActions.updateProfileAction(userInfo);
    history.push(ROUTE_PROFILE_PAGE);
  }

  handleInputChange = field => (e) => {
    const {
      userInfo,
    } = this.state;

    this.setState({
      userInfo: {
        ...userInfo,
        [field]: e.target.value,
      },
    }, this.validateForm(field));
  }

  validateForm = field => () => {
    const {
      userInfo,
    } = this.state;

    return this.setState({
      formValid: (userInfo[field] !== ''),
    });
  }

  render() {
    const {
      literals,
      classes,
    } = this.props;

    const {
      userInfo,
      formValid,
    } = this.state;

    return (
      <div className='ProfileEditPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button disabled={!formValid} variant='contained' color='primary' className={classes.button} onClick={this.handleUpdate}>
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
                          <input type='text' className={classes.input} value={userInfo.first_name} onChange={this.handleInputChange('first_name')} />
                        </Grid>
                        <Grid item xs={7}>
                          <Typography noWrap className={classes.label}>
                            {literals.lastname}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.last_name} onChange={this.handleInputChange('last_name')} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={5}>
                          <Typography noWrap className={classes.label}>
                            {literals.nationalid}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.national_id} onChange={this.handleInputChange('national_id')} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={9}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.address} onChange={this.handleInputChange('address')} />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.number} onChange={this.handleInputChange('number')} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.country}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.country} onChange={this.handleInputChange('country')} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.region}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.region} onChange={this.handleInputChange('region')} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography noWrap className={classes.label}>
                            {literals.pc}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.pc} onChange={this.handleInputChange('pc')} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.email}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.email} onChange={this.handleInputChange('email')} />
                        </Grid>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.telephone}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.tel} onChange={this.handleInputChange('tel')} />
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
                          <input type='text' className={classes.input} value={userInfo.worker_id} onChange={this.handleInputChange('worker_id')} />
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
                          <input type='text' className={classes.input} value={userInfo.factory} onChange={this.handleInputChange('factory')} />
                        </Grid>
                        <Grid item xs={5}>
                          <Typography noWrap className={classes.label}>
                            {literals.position}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.position} onChange={this.handleInputChange('position')} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} container spacing={16} justify='flex-start'>
                        <Grid item xs={6}>
                          <Typography noWrap className={classes.label}>
                            {literals.startdate}
                          </Typography>
                          <input type='text' className={classes.input} value={userInfo.start_date} onChange={this.handleInputChange('start_date')} />
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
            <Button disabled={!formValid} variant='contained' color='primary' className={classes.button} onClick={this.handleUpdate}>
              {literals.save}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileEditPage);
