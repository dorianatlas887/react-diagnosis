import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LeftMenuComponent from '../components';

function mapStateToProps(state) {
  return {
    header: state.header,
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.leftMenu,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(LeftMenuComponent));
