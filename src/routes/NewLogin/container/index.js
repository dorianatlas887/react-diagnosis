import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadingAction } from 'store/globalState/global';
import NewLoginComponents from '../components';
import * as loginActions from '../modules/actions';

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
    loginActions: bindActionCreators(loginActions, dispatch),
    showLoading: bindActionCreators(loadingAction, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewLoginComponents));
