import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Search from 'components/Search';
import { CheckIcon } from 'components/Icons';

import ProfileImg from 'assets/test/ProfileMedium.png';

import styles from './styles';

/**
 * @name DiagnosticsSearchPageComponents
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class DiagnosticsSearchPageComponents extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    patients: PropTypes.array.isRequired,
    initPatients: PropTypes.func.isRequired,
  };

  state = {
    selectedId: 0,
    selected: false,
  };

  componentDidMount() {
    const {
      initPatients,
    } = this.props;

    initPatients();
  }

  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  handleSelect = arrayId => () => {
    this.setState(
      {
        selectedId: arrayId,
        selected: true,
      },
    );
  }

  render() {
    const {
      literals,
      classes,
      patients,
    } = this.props;

    const {
      selectedId,
      selected,
    } = this.state;

    return (
      <div className='DiagnosticsSearchPage'>
        <Grid container justify='center'>
          <Grid item lg={8} md={9} sm={10} xs={11} container direction='column'>
            {selected && (
              <Grid item className={classes.textBox}>
                <Typography className={classes.searchText}>
                  {literals.diagnosetext}
                </Typography>
              </Grid>
            )}
            {selected && (
              <Grid item className={classes.selectedBox} container justify='space-between' alignItems='center'>
                <Grid item>
                  <Grid container spacing={16} alignItems='center'>
                    <Grid item>
                      <img src={ProfileImg} alt='profile_img' />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.name}>
                        {patients[selectedId].first_name}
                        {' '}
                        {patients[selectedId].last_name}
                      </Typography>
                      <Typography className={classes.date}>
                        Last visit: Feb 3 2018
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect(`/diagnostics/new/${patients[selectedId].id}`)}>
                    {literals.diagnose}
                  </Button>
                </Grid>
              </Grid>
            )}
            <Grid item className={classes.textBox}>
              {!selected ? (
                <Typography className={classes.searchText}>
                  {literals.searchtext}
                </Typography>
              ) : (
                <Typography className={classes.searchText}>
                  {literals.othertext}
                </Typography>
              )}
            </Grid>
            <Grid item className={classes.searchBox}>
              <Search placeholder={literals.search} />
            </Grid>
            {patients.map((patient, index) => (
              <Grid key={index} item className={classes.resultBox} container justify='space-between' alignItems='center'>
                <Grid item>
                  <Grid container spacing={16} alignItems='center'>
                    <Grid item>
                      <img src={ProfileImg} alt='profile_img' />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.name}>
                        {patient.first_name}
                        {' '}
                        {patient.last_name}
                      </Typography>
                      <Typography className={classes.date}>
                        Last visit: Feb 3 2018
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='primary' className={classes.button} onClick={this.handleSelect(index)}>
                    <CheckIcon className={classes.checkIcon} />
                    {literals.select}
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DiagnosticsSearchPageComponents);
