import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchLogoutAction } from 'routes/NewLogin/modules/actions';
import HeaderComponent from '../components';
import * as headerActions from '../modules/actions';


function mapStateToProps(state) {
  return {
    header: state.header,
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.mainpage,
    user: state.session.user,
  };
}

const mapDispatchToProps = dispatch => ({
  headerActions: bindActionCreators(headerActions, dispatch),
  logoutAction: () => dispatch(fetchLogoutAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));
