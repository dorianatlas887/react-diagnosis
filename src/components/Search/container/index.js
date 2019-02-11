import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPatientsAction } from 'routes/PatientsPage/modules/actions';
import SearchComponent from '../components';

function mapDispatchToProps(dispatch) {
  return {
    fetchPatientsAction: bindActionCreators(fetchPatientsAction, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SearchComponent);
