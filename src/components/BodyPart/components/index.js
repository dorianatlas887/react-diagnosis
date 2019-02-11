import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

import { XIcon } from 'components/Icons';

import styles from './styles';

const CustomTableCell = withStyles(() => ({
  root: {
    position: 'relative',
    padding: 0,
    height: 55,
    width: 25,
    border: '8px solid rgba(147, 149, 152, 1)',
    color: '#4d4d4d',
    '&:last-child': {
      padding: 0,
      height: 55,
      width: 18,
    },
    '&:first-child': {
      padding: 0,
      height: 55,
      width: 18,
    },
  },
  paddingNone: {
    position: 'relative',
    padding: 0,
    height: 55,
    width: 25,
    '&:last-child': {
      padding: 0,
      height: 55,
      width: 18,
    },
    '&:first-child': {
      padding: 0,
      height: 55,
      width: 18,
    },
  },
  paddingDense: {
    padding: 0,
    height: 90,
    width: 40,
    fontSize: '3rem',
    cursor: 'pointer',
    '&:last-child': {
      padding: 0,
      height: 90,
      width: 40,
    },
    '&:first-child': {
      padding: 0,
      height: 90,
      width: 40,
    },
  },
}))(TableCell);

const CustomGrid = withStyles(() => ({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: -8,
    left: -8,
    border: '8px solid rgba(255, 255, 255, 0)',
    boxSizing: 'content-box',
  },
}))(Grid);

class DiagnosisDetailComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    size: PropTypes.string,
    selectable: PropTypes.bool,
    focusId: PropTypes.number,
    selectedIds: PropTypes.array,
    handleSelect: PropTypes.func,
  }

  static defaultProps = {
    size: 'normal',
    selectable: false,
    focusId: -1,
    selectedIds: [],
    handleSelect: null,
  };

  handleRedirect = () => {
  };

  handleClick = selectedId => () => {
    const {
      handleSelect,
      selectable,
    } = this.props;

    if (selectable) {
      handleSelect(selectedId);
    }
  }

  render() {
    const {
      classes,
      size,
      selectable,
      focusId,
      selectedIds,
    } = this.props;

    return (
      <React.Fragment>
        <Table className={classes.table} padding={size === 'normal' ? 'default' : 'dense'}>
          <TableBody>
            <TableRow>
              <CustomTableCell colSpan={2} className={classes.none} />
              <CustomTableCell colSpan={4} className={classNames(focusId !== -1 && (focusId === 0 ? classes.focusedCell : classes.disabledCell))}>
                <CustomGrid
                  container
                  justify='center'
                  alignItems='center'
                  className={classNames(selectable && classes.selectable, selectedIds[0] && classes.selectedIcon, focusId !== -1 ? (focusId === 0 && classes.focused) : classes.disabled)}
                  onClick={this.handleClick(0)}
                >
                  <XIcon />
                </CustomGrid>
              </CustomTableCell>
              <CustomTableCell colSpan={2} className={classes.none} />
            </TableRow>
            <TableRow>
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && classes.disabledCell)} />
              <CustomTableCell colSpan={4} rowSpan={2} className={classNames(focusId !== -1 && (focusId === 1 ? classes.focusedCell : classes.disabledCell))}>
                <CustomGrid
                  container
                  justify='center'
                  alignItems='center'
                  className={classNames(selectable && classes.selectable, selectedIds[1] && classes.selectedIcon, focusId !== -1 ? (focusId === 1 && classes.focused) : classes.disabled)}
                  onClick={this.handleClick(1)}
                >
                  <XIcon className={classes.xIcon} />
                </CustomGrid>
              </CustomTableCell>
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && (focusId === 2 ? classes.focusedCell : classes.disabledCell))}>
                <CustomGrid
                  container
                  justify='center'
                  alignItems='center'
                  className={classNames(selectable && classes.selectable, selectedIds[2] && classes.selectedIcon, focusId !== -1 ? (focusId === 2 && classes.focused) : classes.disabled)}
                  onClick={this.handleClick(2)}
                >
                  <XIcon className={classes.xIcon} />
                </CustomGrid>
              </CustomTableCell>
            </TableRow>
            <TableRow>
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && (focusId === 3 ? classes.focusedCell : classes.disabledCell))}>
                <CustomGrid
                  container
                  justify='center'
                  alignItems='center'
                  className={classNames(selectable && classes.selectable, selectedIds[3] && classes.selectedIcon, focusId !== -1 ? (focusId === 3 && classes.focused) : classes.disabled)}
                  onClick={this.handleClick(3)}
                >
                  <XIcon className={classes.xIcon} />
                </CustomGrid>
              </CustomTableCell>
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && classes.disabledCell)} />
            </TableRow>
            <TableRow>
              <CustomTableCell colSpan={2} className={classes.none} />
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && classes.disabledCell)} />
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && (focusId === 4 ? classes.focusedCell : classes.disabledCell))}>
                <CustomGrid
                  container
                  justify='center'
                  alignItems='center'
                  className={classNames(selectable && classes.selectable, selectedIds[4] && classes.selectedIcon, focusId !== -1 ? (focusId === 4 && classes.focused) : classes.disabled)}
                  onClick={this.handleClick(4)}
                >
                  <XIcon className={classes.xIcon} />
                </CustomGrid>
              </CustomTableCell>
              <CustomTableCell colSpan={2} className={classes.none} />
            </TableRow>
            <TableRow>
              <CustomTableCell colSpan={2} className={classes.none} />
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && (focusId === 5 ? classes.focusedCell : classes.disabledCell))}>
                <CustomGrid
                  container
                  justify='center'
                  alignItems='center'
                  className={classNames(selectable && classes.selectable, selectedIds[5] && classes.selectedIcon, focusId !== -1 ? (focusId === 5 && classes.focused) : classes.disabled)}
                  onClick={this.handleClick(5)}
                >
                  <XIcon className={classes.xIcon} />
                </CustomGrid>
              </CustomTableCell>
              <CustomTableCell colSpan={2} className={classNames(focusId !== -1 && classes.disabledCell)} />
              <CustomTableCell colSpan={2} className={classes.none} />
            </TableRow>
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DiagnosisDetailComponent);
