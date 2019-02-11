import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { routes, ROUTE_NEW_LOGIN } from 'routes';
import withWidth from '@material-ui/core/withWidth';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import history from 'store/history';
import Loading from 'components/Loading';
import Header from 'components/Header';
import LeftMenu from 'components/LeftMenu';
import { browserFlagsDefault, calculateBrowserFlags } from 'utils/browser';

import styles from './styles';

class App extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    sessionChecked: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    width: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
  }

  state = {
    browser: browserFlagsDefault,
  };

  componentDidMount() {
    this.setBrowserFlags();
  }

  componentDidUpdate({ width: prevWidth }) {
    const {
      width,
    } = this.props;

    if (width !== prevWidth) {
      this.setBrowserFlags();
    }
  }

  /**
   * @name setBrowserFlags
   * Updates browser flags depending on the with of the user browser.
   */
  setBrowserFlags = () => {
    const { width } = this.props;

    const browser = calculateBrowserFlags(width);

    this.setState({
      browser,
    });
  }

  render() {
    const {
      isAuthenticated,
      sessionChecked,
      loading,
      classes,
      header,
    } = this.props;

    const {
      browser,
    } = this.state;

    return (
      <React.Fragment>
        <Loading hide={!loading} />

        <ConnectedRouter history={history}>
          <Switch>
            {sessionChecked && routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={() => ((route.ignoreSession || isAuthenticated) ? (
                  <React.Fragment>
                    {route.header && (
                      <React.Fragment>
                        <Header />
                        <LeftMenu />
                        <section className={classNames(classes.section, header.open && classes.sectionShift)}>
                          <Grid container justify='center'>
                            <Grid item xs={11} md={10} lg={10} className={classes.center}>
                              <route.component route={history} browser={browser} />
                            </Grid>
                          </Grid>
                        </section>
                      </React.Fragment>
                    )}
                    {!route.header && (
                      <section>
                        <route.component route={history} browser={browser} />
                      </section>
                    )}
                  </React.Fragment>
                ) : (
                  <Redirect to={{
                    pathname: ROUTE_NEW_LOGIN,
                    state: { from: window.location.pathname },
                  }}
                  />
                ))}
              />
            ))}
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withWidth()(App));
