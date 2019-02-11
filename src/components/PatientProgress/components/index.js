import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';

import DeleteImg from 'assets/images/delete.png';
import EditImg from 'assets/images/red-edit.png';

import styles from './styles';

const HeadTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.lightSilver.main,
    color: theme.palette.gray.main,
    fontSize: '1.4rem',
    fontWeight: 'bold',
    padding: 10,
    height: 'auto',
    '&:last-child': {
      paddingTop: 10,
      paddingBottom: 10,
    },
    '&:first-child': {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
}))(TableCell);

class PatientProgressComponent extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    editable: PropTypes.bool,
  }

  static defaultProps = {
    editable: true,
  };

  state = {
    value: 0,
  };

  handleRedirect = () => {
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      literals,
      match,
      editable,
    } = this.props;

    const { value } = this.state;

    const patientId = match.params.patientsId;

    let id = 0;

    function createCondition(condition, date) {
      id += 1;
      return {
        id,
        condition,
        date,
      };
    }

    const conditionRows = [
      createCondition('Glaucoma', '(Feb 3 2018)'),
      createCondition('Glaucoma', '(Feb 3 2018)'),
      createCondition('Glaucoma', '(Feb 3 2018)'),
    ];

    id = 0;

    function createAllergy(allergy, medication) {
      id += 1;
      return {
        id,
        allergy,
        medication,
      };
    }
    const allergyRows = [
      createAllergy('Penicillin', 'Epinephrine'),
      createAllergy('Penicillin', 'Epinephrine'),
    ];

    id = 0;

    function createMedication(medication, many, often) {
      id += 1;
      return {
        id,
        medication,
        many,
        often,
      };
    }
    const medicationRows = [
      createMedication('Epinephrine', 'Everyday', '2'),
      createMedication('Epinephrine', 'Everyday', '2'),
    ];

    return (
      <React.Fragment>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label={literals.conditions} />
              <Tab label={literals.allergies} />
              <Tab label={literals.medications} />
            </Tabs>
          </Grid>
          {editable && value === 1 && (
            <Grid item>
              <Grid container alignItems='center'>
                <AddCircleOutlined />
                <Typography className={classes.new}>
                  {literals.newallergy}
                </Typography>
              </Grid>
            </Grid>
          )}
          {editable && value === 2 && (
            <Grid item>
              <Grid container alignItems='center'>
                <AddCircleOutlined />
                <Typography className={classes.new}>
                  {literals.newmedication}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid container className={classes.tableContainer}>
          {value === 0 && (
            <Table className={classes.table} padding='none'>
              <colgroup>
                <col width='30%' />
                <col width='25%' />
                <col width='25%' />
                {editable && (
                  <col width='20%' />
                )}
              </colgroup>
              <TableHead>
                <TableRow>
                  <HeadTableCell>{literals.allergy}</HeadTableCell>
                  <HeadTableCell>{literals.medication}</HeadTableCell>
                  <HeadTableCell />
                  {editable && (
                    <HeadTableCell />
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {conditionRows.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography noWrap>
                          {row.condition}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography noWrap className={classes.gray}>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell numeric>
                        <Link to={`/patients/profile/${patientId}/diagnosis/${row.id}`}>
                          <Typography noWrap className={classes.link}>
                            {literals.seediagnosis}
                          </Typography>
                        </Link>
                      </TableCell>
                      {editable && (
                        <TableCell numeric>
                          <img src={DeleteImg} alt='delete_icon' />
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
          {value === 1 && (
            <Table className={classes.table} padding='none'>
              <colgroup>
                <col width='35%' />
                <col width='35%' />
                {editable && (
                  <col width='30%' />
                )}
              </colgroup>
              <TableHead>
                <TableRow>
                  <HeadTableCell>{literals.allergy}</HeadTableCell>
                  <HeadTableCell>{literals.medication}</HeadTableCell>
                  {editable && (
                    <HeadTableCell />
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {allergyRows.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography noWrap>
                          {row.allergy}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography noWrap>
                          {row.medication}
                        </Typography>
                      </TableCell>
                      {editable && (
                        <TableCell numeric>
                          <img src={EditImg} alt='edit_icon' />
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
          {value === 2 && (
            <Table className={classes.table} padding='none'>
              <colgroup>
                <col width='30%' />
                <col width='25%' />
                <col width='25%' />
                {editable && (
                  <col width='20%' />
                )}
              </colgroup>
              <TableHead>
                <TableRow>
                  <HeadTableCell>{literals.medication}</HeadTableCell>
                  <HeadTableCell>{literals.howoften}</HeadTableCell>
                  <HeadTableCell>{literals.howmany}</HeadTableCell>
                  {editable && (
                    <HeadTableCell />
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {medicationRows.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography noWrap>
                          {row.medication}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography noWrap>
                          {row.often}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography noWrap>
                          {row.many}
                        </Typography>
                      </TableCell>
                      {editable && (
                        <TableCell numeric>
                          <img src={EditImg} alt='edit_icon' />
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PatientProgressComponent);
