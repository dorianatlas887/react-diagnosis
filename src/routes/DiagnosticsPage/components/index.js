import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Grid from '@material-ui/core/Grid';
import Pagination from 'components/Pagination';
import DiagnosticsTable from 'components/DiagnosticsTable';

import styles from './styles';

/**
 * @name DiagnosticsPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class DiagnosticsPage extends Component {
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
      <div className='DiagnosticsPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/diagnostics/search')}>
              <AddCircleOutlined fontSize='large' className={classes.leftIcon} />
              {literals.newdiagnosis}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.table}>
          <DiagnosticsTable />
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

export default withStyles(styles)(DiagnosticsPage);
