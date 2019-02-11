import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import styles from './styles';

class PaginationComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  handleRedirect = () => {
  };

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.pagination}>
        <KeyboardArrowLeft fontSize='large' className={classes.arrow} />
        <Typography
          noWrap
          className={classes.page}
        >
        1
        </Typography>
        <KeyboardArrowRight fontSize='large' className={classes.arrow} />
      </div>
    );
  }
}

export default withStyles(styles)(PaginationComponent);
