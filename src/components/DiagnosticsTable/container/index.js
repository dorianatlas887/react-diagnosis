import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DiagnosticsTableComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.diagnosticsTableComponent,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(DiagnosticsTableComponent));
