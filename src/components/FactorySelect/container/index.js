import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FactorySelectComponent from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.factorySelectComponent,
    factory: state.factory,
  };
}

export default withRouter(connect(mapStateToProps)(FactorySelectComponent));
