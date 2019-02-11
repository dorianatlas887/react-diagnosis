import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Pagination from 'components/Pagination';
import DiagnosticsTable from 'components/DiagnosticsTable';
import DiagnosisDetail from 'components/DiagnosisDetail';

import { DownloadIcon } from 'components/Icons';

import ProfileImg from 'assets/test/ProfileMedium.png';

import styles from './styles';

/**
 * @name DiagnosticsDetailPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class DiagnosticsDetailPage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

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
    } = this.props;

    return (
      <div className='DiagnosticsDetailPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/diagnostics/search')}>
              <AddCircleOutlined fontSize='large' className={classes.leftIcon} />
              {literals.newdiagnosis}
            </Button>
            <Button variant='contained' color='secondary' className={classes.button}>
              <DownloadIcon className={classes.downIcon} />
              {literals.printdialogsis}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.mainSection}>
          <Grid item md={5} xs={12} className={classes.leftSection}>
            <DiagnosticsTable full={false} entires={false} photoShow={false} pointShow={false} />
            <Grid container className={classes.pagination} justify='center'>
              <Grid item>
                <Pagination />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} xs={12} className={classes.rightSection}>
            <Grid container spacing={24} className={classes.patientInfo}>
              <Grid item>
                <img src={ProfileImg} alt='profile_img' />
              </Grid>
              <Grid item>
                <Typography className={classes.name}>
                  Aarusha Badour
                </Typography>
                <Typography className={classes.date}>
                  Feb 3 2018
                </Typography>
              </Grid>
            </Grid>
            <DiagnosisDetail />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DiagnosticsDetailPage);
