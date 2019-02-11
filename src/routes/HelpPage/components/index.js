import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Pagination from 'components/Pagination';
import Search from 'components/Search';

import { EmailIcon, VideoIcon } from 'components/Icons';

import styles from './styles';

/**
 * @name HelpPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class HelpPage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
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
      literals,
      classes,
    } = this.props;

    let id = 0;

    function createData(question) {
      id += 1;
      return {
        id,
        question,
      };
    }

    const rows = [
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
      createData('Lorem ipsum dolor sit amet consectetuer adipiscing?'),
    ];

    return (
      <div className='HelpPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/help/contact')}>
              <EmailIcon className={classes.emailIcon} />
              {literals.contactform}
            </Button>
            <Button variant='contained' color='primary' className={classes.button}>
              <VideoIcon className={classes.videoIcon} />
              {literals.videoconference}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.searchBar}>
          <Grid item md={5} lg={4} xs={12}>
            <Search placeholder={literals.search} />
          </Grid>
        </Grid>
        <Grid container justify='flex-end' className={classes.count}>
          <Grid item>
            <Typography noWrap className={classes.entires}>
              451
              {literals.entires}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.tableContainer}>
              <Table className={classes.table} padding='dense'>
                <colgroup>
                  <col width='80%' />
                  <col width='20%' />
                </colgroup>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell component='th' scope='row'>
                          <Typography noWrap>
                            {row.question}
                          </Typography>
                        </TableCell>
                        <TableCell numeric>
                          <Link to={`/help/question/${row.id}`}>
                            <Typography noWrap className={classes.link}>
                              {literals.see}
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
        <Grid container className={classes.pagination} justify='center'>
          <Grid item>
            <Pagination />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HelpPage);
