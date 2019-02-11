import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DiagnosisDetailComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.diagnosisDetailComponent,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(DiagnosisDetailComponent));
