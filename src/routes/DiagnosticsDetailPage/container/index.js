import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DiagnosticsDetailPageComponents from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.diagnosticsDetailPage,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps)(DiagnosticsDetailPageComponents));
