import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientsPageComponents from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.patientsPage,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps)(PatientsPageComponents));
