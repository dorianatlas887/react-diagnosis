import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import OverrideThemeProps from './config';

function OverrideTheme(props) {
  const { children } = props;
  const propsTheme = createMuiTheme({
    ...OverrideThemeProps,
  });
  return (
    <MuiThemeProvider theme={propsTheme}>{children}</MuiThemeProvider>
  );
}

OverrideTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OverrideTheme;
