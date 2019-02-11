import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientProgressComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.patientProgressComponent,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(PatientProgressComponent));
