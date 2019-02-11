import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainLogo from 'assets/images/logo.png';

import './styles.css';

/**
 * @name MainPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class MainPage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    literals: PropTypes.object.isRequired,
  };

  state = {
    loaded: false,
  };

  componentDidUpdate({ user: prevUser }) {
    const {
      user,
    } = this.props;

    if (JSON.stringify(user) !== JSON.stringify(prevUser)) {
      this.setLoadedState(true);
    }
  }

  /**
   * @name setLoadedState
   * Sets loaded state
   *
   * @param {Boolean} loaded
   */
  setLoadedState = (loaded) => {
    this.setState({
      loaded,
    });
  }

  render() {
    const {
      literals,
    } = this.props;

    const {
      loaded,
    } = this.state;

    return (
      <div className='MainPage'>
        <img className='MainPage__logo' src={MainLogo} alt='logo' />

        {loaded && (
          <h1>
            {`${literals.wellcome}`}
          </h1>
        )}
      </div>
    );
  }
}

export default MainPage;
