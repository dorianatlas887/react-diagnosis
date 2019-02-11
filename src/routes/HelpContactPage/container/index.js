import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HelpContactPageComponents from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.helpPage,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps)(HelpContactPageComponents));
