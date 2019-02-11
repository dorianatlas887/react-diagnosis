import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import ProfileEditPageComponents from '../components';
import * as updateProfileActions from '../modules/actions';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.profilePage,
    user: state.session.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // updateProfileAction: payload => dispatch(updateProfileAction(payload)),
    updateProfileActions: bindActionCreators(updateProfileActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileEditPageComponents));
