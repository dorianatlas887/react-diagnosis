import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientContactComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.patientContactComponent,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(PatientContactComponent));
