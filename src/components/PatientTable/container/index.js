import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchPatientsAction } from 'routes/PatientsPage/modules/actions';
import PatientTableComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.patientTableComponent,
    user: state.session.user,
    patients: state.patients.patientsList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPatientsAction: bindActionCreators(fetchPatientsAction, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientTableComponent));
