import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BodyPartComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.bodyPartComponent,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(BodyPartComponent));
