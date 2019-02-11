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
import DatePicker from 'components/DatePicker';

import HeaderAvatar from 'assets/test/header_avatar.png';

import styles from './styles';

class DiagnosticsTableComponent extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    full: PropTypes.bool,
    search: PropTypes.bool,
    entires: PropTypes.bool,
    photoShow: PropTypes.bool,
    pointShow: PropTypes.bool,
    direct: PropTypes.bool,
  }

  static defaultProps = {
    full: true,
    search: true,
    entires: true,
    photoShow: true,
    pointShow: true,
    direct: true,
  };

  handleRedirect = () => {
  };

  render() {
    const {
      classes,
      literals,
      match,
      full,
      search,
      entires,
      photoShow,
      pointShow,
      direct,
    } = this.props;

    let patientId;

    if (!direct) {
      patientId = match.params.patientsId;
    }

    let id = 0;

    function createData(name, date, point) {
      id += 1;
      return {
        id,
        name,
        date,
        point,
      };
    }

    const rows = [
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
      createData('Naina Johar  -  Upper extremity', '(Feb 3 2018)', '18'),
    ];

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
              <Grid item>
                <Typography noWrap className={classes.selectText}>
                  {literals.filterby}
                  :
                </Typography>
              </Grid>
              <Grid item>
                <select className={classes.select}>
                  <option>{literals.rate}</option>
                  <option value={1}>Active</option>
                  <option value={2}>Withdrwan</option>
                </select>
              </Grid>
              <Grid item className={classes.datePicker}>
                <DatePicker placeholder={literals.fromdate} />
              </Grid>
              <Grid item className={classes.datePicker}>
                <DatePicker placeholder={literals.todate} />
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
              <Table padding={full ? 'default' : 'dense'}>
                <colgroup>
                  <col width='44%' />
                  <col width='18%' />
                  {pointShow && (
                    <col width='18%' />
                  )}
                  <col width='20%' />
                </colgroup>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell component='th' scope='row'>
                          <Typography noWrap>
                            {photoShow && (
                              <img className={classes.avatar} src={HeaderAvatar} alt='header_avatar' />
                            )}
                            {row.name}
                          </Typography>
                        </TableCell>
                        <TableCell numeric>
                          <Typography noWrap className={classes.gray}>
                            {row.date}
                          </Typography>
                        </TableCell>
                        {pointShow && (
                          <TableCell numeric>
                            <Typography noWrap className={classes.gray}>
                              {row.point}
                              {' '}
                              {literals.points}
                            </Typography>
                          </TableCell>
                        )}
                        <TableCell numeric>
                          <Link to={direct ? `/diagnostics/detail/${row.id}` : `/patients/profile/${patientId}/diagnosis/${row.id}`}>
                            <Typography noWrap className={classes.link}>
                              {pointShow ? literals.seediagnosis : literals.diagnosis}
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

export default withStyles(styles)(DiagnosticsTableComponent);
