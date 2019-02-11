import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Search from 'components/Search';
import FactorySelect from 'components/FactorySelect';

import HeaderAvatar from 'assets/test/header_avatar.png';

import styles from './styles';

class PatientTableComponent extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    fetchPatientsAction: PropTypes.func.isRequired,
    patients: PropTypes.array.isRequired,
    full: PropTypes.bool,
    search: PropTypes.bool,
    entires: PropTypes.bool,
  }

  static defaultProps = {
    full: true,
    search: true,
    entires: true,
  };

  componentDidMount() {
    const {
      fetchPatientsAction,
    } = this.props;

    fetchPatientsAction();
  }

  handleChange = (value) => {
    console.log(value);
  };

  render() {
    const {
      patients,
    } = this.props;

    const {
      classes,
      literals,
      full,
      search,
      entires,
    } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={search ? 24 : 0} alignItems='center' className={search ? classes.header : classes.grayHeader}>
          {search && (
            <Grid item lg={full ? 4 : 12} md={full ? 5 : 12} xs={12}>
              <Search placeholder={literals.search} />
            </Grid>
          )}
          <Grid item lg={full && search ? 8 : 12} md={full && search ? 7 : 12} xs={12}>
            <Grid container spacing={8} alignItems='center'>
              <Grid item className={classes.filter}>
                <Typography noWrap className={classes.selectText}>
                  {literals.filterby}
                  :
                </Typography>
                <select className={classes.select}>
                  <option>{literals.status}</option>
                  <option value={1}>Active</option>
                  <option value={2}>Withdrwan</option>
                </select>
                <div className={classes.selectFactory}>
                  <FactorySelect handleChange={this.handleChange} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {entires && (
          <Grid container justify='flex-end' className={classes.count}>
            <Grid item>
              <Typography noWrap className={classes.entires}>
                451
                {literals.entires}
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid container className={entires || !search ? classes.default : classes.tableSection}>
          <Grid item xs={12}>
            <div className={classes.tableContainer}>
              <Table>
                <colgroup>
                  <col width='35%' />
                  <col width='20%' />
                  <col width='25%' />
                  <col width='20%' />
                </colgroup>
                <TableBody>
                  {patients.map((row) => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell component='th' scope='row'>
                          <Typography noWrap>
                            <img className={classes.avatar} src={HeaderAvatar} alt='header_avatar' />
                            {row.first_name}
                            {' '}
                            {row.last_name}
                          </Typography>
                        </TableCell>
                        <TableCell numeric>
                          <Typography
                            noWrap
                            className={classes.statusActive}
                          >
                            Active
                          </Typography>
                        </TableCell>
                        <TableCell numeric>
                          <Typography noWrap>
                            {row.factory}
                          </Typography>
                        </TableCell>
                        <TableCell numeric>
                          <Link to={`/patients/profile/${row.id}`}>
                            <Typography noWrap className={classes.link}>
                              {literals.profile}
                            </Typography>
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PatientTableComponent);
