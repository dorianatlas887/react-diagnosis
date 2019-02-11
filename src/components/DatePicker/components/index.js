import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CalenderImg from 'assets/images/calendar.png';

import './styles.css';
import styles from './styles';

class DatePickerComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
  }

  state = {
    startDate: null,
  };

  handleRedirect = () => {
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const {
      classes,
      placeholder,
    } = this.props;

    const { startDate } = this.state;

    return (
      <div className={classes.container}>
        <div className={classes.searchIcon}>
          <img src={CalenderImg} alt='calender_icon' />
        </div>
        <DatePicker
          placeholderText={placeholder}
          className={classes.search}
          selected={startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DatePickerComponent);
