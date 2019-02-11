import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ProfileAvatar from 'assets/test/ProfileLarge.png';

import styles from './styles';

class PatientInfoComponent extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    nationalId: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.string,
  }

  static defaultProps = {
    firstName: '',
    lastName: '',
    nationalId: '',
    gender: '',
    age: '',
  };

  handleRedirect = () => {
  };

  render() {
    const {
      classes,
      literals,
      firstName,
      lastName,
      nationalId,
      gender,
      age,
    } = this.props;

    return (
      <Grid container spacing={32}>
        <Grid item>
          <img className={classes.avatar} src={ProfileAvatar} alt='profile_avatar' />
        </Grid>
        <Grid item>
          <Typography noWrap className={classes.name}>
            {firstName}
            {' '}
            {lastName}
          </Typography>
          <Grid container direction='column' spacing={8}>
            <Grid item>
              <Typography noWrap className={classes.national}>
                <span className={classes.nationalSpan}>{literals.nationalid}</span>
                {' '}
                {nationalId}
              </Typography>
            </Grid>
            <Grid item>
              <Typography noWrap>
                <span className={classes.nationalSpan}>{literals.gender}</span>
                {' '}
                {gender}
              </Typography>
            </Grid>
            <Grid item>
              <Typography noWrap>
                <span className={classes.nationalSpan}>{literals.age}</span>
                {' '}
                {age}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography noWrap className={classes.status}>
            Active
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(PatientInfoComponent);
