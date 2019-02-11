import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import styles from './styles';

class SearchComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    fetchPatientsAction: PropTypes.func.isRequired,
  }

  handleRedirect = () => {
  };

  render() {
    const {
      classes,
      placeholder,
      fetchPatientsAction,
    } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon} onClick={fetchPatientsAction}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={placeholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchComponent);
