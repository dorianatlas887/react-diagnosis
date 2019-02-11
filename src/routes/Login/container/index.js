import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadingAction } from 'store/globalState/global';
import LoginComponents from '../components';
import fetchloginAction from '../modules/actions';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.login,
    loginError: state.login.error,
    userLang: state.i18n.language,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: bindActionCreators(fetchloginAction, dispatch),
    showLoading: bindActionCreators(loadingAction, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponents));
