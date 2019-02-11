import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as newActions from 'routes/DiagnosticsNewPage/modules/actions';
import DiagnosticsNewPageComponents from '../components';

function mapStateToProps(state) {
  return {
    trees: state.diagnosis.trees,
    nodes: state.diagnosis.nodes,
    diagnosis: state.diagnosis.diagnosis,
    questions: state.diagnosis.questions,
    loadedTree: state.diagnosis.loadedTree,
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.diagnosticsNewPage,
    user: state.session.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newActions: bindActionCreators(newActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiagnosticsNewPageComponents));
