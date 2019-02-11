import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import BodyPart from 'components/BodyPart';

import ConditionImg from 'assets/images/condition.png';
import MedicationImg from 'assets/images/medication.png';
import HospitalImg from 'assets/images/hospital.png';
import HeartImg from 'assets/images/heart.png';

import FirstImg from 'assets/test/photo1.png';
import SecondImg from 'assets/test/photo2.png';

import styles from './styles';


class DiagnosisDetailComponent extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  }

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleRedirect = () => {
  };

  render() {
    const {
      classes,
      literals,
    } = this.props;

    const { value } = this.state;

    return (
      <React.Fragment>
        <Grid container>
          <Grid item>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label={literals.diagnosis} />
              <Tab label={literals.questionnaire} />
              <Tab label={literals.photos} />
            </Tabs>
          </Grid>
        </Grid>
        <Grid container className={classes.tableContainer}>
          {value === 0 && (
            <Grid item container direction='column' spacing={24}>
              <Grid item container direction='row' spacing={24}>
                <Grid item xs={3}>
                  <BodyPart />
                </Grid>
                <Grid item className={classes.details} xs={9} container spacing={24} direction='column'>
                  <Grid item container justify='space-between'>
                    <Grid item>
                      <Grid container direction='column'>
                        <Grid item className={classes.pointHeader} container justify='center'>
                          {literals.total}
                        </Grid>
                        <Grid item className={classes.pointBox} container justify='center' alignItems='center'>
                          <img src={HeartImg} alt='HeartImg' />
                          <Typography className={classes.point}>
                            55
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={24}>
                        <Grid item>
                          <img src={ConditionImg} alt='ConditionImg' />
                        </Grid>
                        <Grid item>
                          <Typography className={classes.name}>
                            Aarusha Badour
                          </Typography>
                          <Typography className={classes.date}>
                            Feb 3 2018
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={24}>
                        <Grid item>
                          <img src={MedicationImg} alt='MedicationImg' />
                        </Grid>
                        <Grid item>
                          <Typography className={classes.name}>
                            Aarusha Badour
                          </Typography>
                          <Typography className={classes.date}>
                            Feb 3 2018
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={24}>
                        <Grid item>
                          <img src={HospitalImg} alt='HospitalImg' />
                        </Grid>
                        <Grid item>
                          <Typography className={classes.name}>
                            Aarusha Badour
                          </Typography>
                          <Typography className={classes.date}>
                            Feb 3 2018
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.label}>
                      {literals.comment}
                    </Typography>
                    <Typography className={classes.text}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Table className={classes.table}>
                  <colgroup>
                    <col width='70%' />
                    <col width='20%' />
                    <col width='10%' />
                  </colgroup>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>
                        {literals.trunk}
                      </CustomTableCell>
                      <CustomTableCell />
                      <CustomTableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <CustomTableCell>Post-traumatic arthritis with no previous history</CustomTableCell>
                      <CustomTableCell>Intensity 8</CustomTableCell>
                      <CustomTableCell>7</CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>Post-traumatic arthritis with no previous history</CustomTableCell>
                      <CustomTableCell>Intensity 8</CustomTableCell>
                      <CustomTableCell>7</CustomTableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <CustomTableCell>{literals.trunktotal}</CustomTableCell>
                      <CustomTableCell />
                      <CustomTableCell>32</CustomTableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </Grid>
              <Grid item>
                <Table className={classes.table}>
                  <colgroup>
                    <col width='70%' />
                    <col width='20%' />
                    <col width='10%' />
                  </colgroup>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>
                        {literals.upper}
                      </CustomTableCell>
                      <CustomTableCell />
                      <CustomTableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <CustomTableCell>Post-traumatic arthritis with no previous history</CustomTableCell>
                      <CustomTableCell>Intensity 8</CustomTableCell>
                      <CustomTableCell>7</CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>Post-traumatic arthritis with no previous history</CustomTableCell>
                      <CustomTableCell>Intensity 8</CustomTableCell>
                      <CustomTableCell>7</CustomTableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <CustomTableCell>{literals.uppertotal}</CustomTableCell>
                      <CustomTableCell />
                      <CustomTableCell>32</CustomTableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </Grid>
              <Grid item>
                <Table className={classes.table}>
                  <colgroup>
                    <col width='70%' />
                    <col width='20%' />
                    <col width='10%' />
                  </colgroup>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.blackBack}>{literals.total}</TableCell>
                      <TableCell className={classes.blackBack} />
                      <TableCell className={classes.blackBack}>56</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          )}
          {value === 1 && (
            <Table className={classes.table}>
              <colgroup>
                <col width='5%' />
                <col width='90%' />
              </colgroup>
              <TableBody>
                <TableRow>
                  <QuestionTableCell>
                    <Grid container className={classes.questionNum} alignItems='center' justify='center'>
                      1
                    </Grid>
                  </QuestionTableCell>
                  <QuestionTableCell>
                    <Typography className={classes.questionText}>
                      Did the worker loss of consciousness?
                    </Typography>
                  </QuestionTableCell>
                </TableRow>
                <TableRow>
                  <QuestionTableCell />
                  <QuestionTableCell>
                    <Typography className={classes.answer}>
                      No
                    </Typography>
                  </QuestionTableCell>
                </TableRow>
                <TableRow>
                  <QuestionTableCell>
                    <Grid container className={classes.questionNum} alignItems='center' justify='center'>
                      2
                    </Grid>
                  </QuestionTableCell>
                  <QuestionTableCell>
                    <Typography className={classes.questionText}>
                      Did the worker loss of consciousness?
                    </Typography>
                  </QuestionTableCell>
                </TableRow>
                <TableRow>
                  <QuestionTableCell />
                  <QuestionTableCell>
                    <Typography className={classes.answer}>
                      No
                    </Typography>
                  </QuestionTableCell>
                </TableRow>
                <TableRow>
                  <QuestionTableCell>
                    <Grid container className={classes.questionNum} alignItems='center' justify='center'>
                      3
                    </Grid>
                  </QuestionTableCell>
                  <QuestionTableCell>
                    <Typography className={classes.questionText}>
                      Did the worker loss of consciousness?
                    </Typography>
                  </QuestionTableCell>
                </TableRow>
                <TableRow>
                  <QuestionTableCell />
                  <QuestionTableCell>
                    <Typography className={classes.answer}>
                      Yes
                    </Typography>
                  </QuestionTableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
          {value === 2 && (
            <Grid container direction='column' spacing={24}>
              <Grid item>
                <img src={FirstImg} className={classes.fullImage} alt='PhotoImg' />
              </Grid>
              <Grid item>
                <img src={SecondImg} className={classes.fullImage} alt='PhotoImg' />
              </Grid>
            </Grid>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DiagnosisDetailComponent);


const CustomTableCell = withStyles(() => ({
  root: {
    color: '#4A4A4A',
    '&:last-child': {
      borderRight: '1px solid #4A4A4A',
    },
    '&:first-child': {
      borderLeft: '1px solid #4A4A4A',
    },
  },
  head: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    backgroundColor: '#C30933',
    color: '#fff',
  },
  footer: {
    padding: 10,
    fontSize: '1.6rem',
    fontWeight: 'bold',
    background: '#7E7E7E',
    color: '#fff',
  },
}))(TableCell);

const QuestionTableCell = withStyles(() => ({
  root: {
    border: 0,
    padding: 2,
    '&:first-child': {
      padding: 2,
      paddingLeft: 0,
    },
    paddingLeft: 5,
    '&:last-child': {
      padding: 2,
      paddingRight: 0,
    },
  },
}))(TableCell);
