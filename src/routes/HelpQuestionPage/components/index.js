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
import Avatar from '@material-ui/core/Avatar';
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
class HelpQuestionPage extends Component {
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

        <Grid container className={classes.main}>
          <Grid item lg={5} md={6} xs={12} className={classes.left}>
            <Grid container className={classes.searchBar}>
              <Grid item xs={12}>
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
          </Grid>
          <Grid item lg={7} md={6} xs={12} className={classes.right}>
            <Grid container>
              <Grid item>
                <Grid container alignItems='center'>
                  <Avatar className={classes.mark}>
                    ?
                  </Avatar>
                  <Typography noWrap className={classes.title}>
                    Lorem ipsum dolor sit amet consectetuer adipiscing?
                  </Typography>
                </Grid>
                <Typography className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </Typography>
                <Typography className={classes.text}>
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                </Typography>
                <Typography className={classes.text}>
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                </Typography>
                <Typography className={classes.text}>
                  Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HelpQuestionPage);
