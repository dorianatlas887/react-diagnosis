import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientsProfilePageComponents from '../components';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.patientsProfilePage,
    user: state.session.user,
    patients: state.patients.patientsList,
  };
}

export default withRouter(connect(mapStateToProps)(PatientsProfilePageComponents));
