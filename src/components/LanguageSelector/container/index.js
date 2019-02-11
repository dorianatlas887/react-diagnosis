import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LanguageSelectorComponents from '../components';
import { setPlatformLanguageAction } from '../modules/actions';

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: bindActionCreators(setPlatformLanguageAction, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LanguageSelectorComponents);
