import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DiagnosticsPageComponents from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.diagnosticsPage,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps)(DiagnosticsPageComponents));
