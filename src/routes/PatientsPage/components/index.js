import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Grid from '@material-ui/core/Grid';
import Pagination from 'components/Pagination';
import PatientTable from 'components/PatientTable';

import { DownloadIcon } from 'components/Icons';

import {
  ROUTE_PATIENTS_NEW_PAGE,
} from 'routes';

import styles from './styles';

/**
 * @name PatientsPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class PatientsPage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
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
    } = this.props;

    return (
      <div className='PatientsPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect(ROUTE_PATIENTS_NEW_PAGE)}>
              <AddCircleOutlined fontSize='large' className={classes.addIcon} />
              {literals.newpatient}
            </Button>
            <Button variant='contained' color='secondary' className={classes.button}>
              <DownloadIcon className={classes.downIcon} />
              {literals.downloaddata}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.PatientTable} alignItems='center'>
          <PatientTable />
        </Grid>
        <Grid container className={classes.pagination} justify='center'>
          <Grid item>
            <Pagination />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PatientsPage);
