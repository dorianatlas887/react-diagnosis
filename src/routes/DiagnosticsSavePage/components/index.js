import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import SaveImg from 'assets/images/saveImg.png';

import styles from './styles';

/**
 * @name DiagnosticsSavePageComponents
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class DiagnosticsSavePageComponents extends Component {
  static propTypes = {
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
      classes,
    } = this.props;

    return (
      <div className='DiagnosticsSavePage'>
        <Grid container className={classes.container} direction='column'>
          <Grid item container justify='center'>
            <Typography className={classes.title}>
              Diagnosis saved
            </Typography>
          </Grid>
          <Grid item container justify='center'>
            <Typography className={classes.text}>
              Configuration completed.
            </Typography>
          </Grid>
          <Grid item container justify='center'>
            <img src={SaveImg} alt='SaveImg' />
          </Grid>
        </Grid>
        <Grid container justify='flex-end' className={classes.buttonSection}>
          <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/diagnostics')}>
            FINISH
          </Button>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DiagnosticsSavePageComponents);
