import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class FactorySelectComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    literals: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    factory: PropTypes.object.isRequired,
  }

  handleRedirect = (path) => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  handleChange = (e) => {
    const {
      handleChange,
    } = this.props;

    handleChange(e.target.value);
  }

  render() {
    const {
      classes,
      literals,
      factory,
    } = this.props;

    return (
      <select className={classes.select} onChange={this.handleChange}>
        <option>{literals.factory}</option>
        {factory.factories.map((object, index) => (
          <option key={index} value={object.id}>{object.name}</option>
        ))}
      </select>
    );
  }
}

export default withStyles(styles)(FactorySelectComponent);
