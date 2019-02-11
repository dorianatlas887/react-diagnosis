import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientsProfileDiagnosisPageComponents from '../components';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.patientsProfileDiagnosisPage,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps)(PatientsProfileDiagnosisPageComponents));
