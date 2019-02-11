import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientInfoComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.patientInfoComponent,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(PatientInfoComponent));
