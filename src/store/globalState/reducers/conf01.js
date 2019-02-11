import { routerReducer as router } from 'react-router-redux';
import { sessionReducer as session } from 'redux-react-session';
import i18n from 'components/LanguageSelector/modules';
import { reducer as idle } from 'modules/idleMonitor';
import login from 'routes/NewLogin/modules';
import signup from 'routes/Signup/modules';
import header from 'components/Header/modules';
import factory from 'components/FactorySelect/modules';
import patients from 'routes/PatientsPage/modules';
import diagnosis from 'routes/DiagnosticsNewPage/modules';
import updateProfile from 'routes/ProfileEditPage/modules';
import global from '../global';

export default {
  router,
  session,
  i18n,
  idle,
  login,
  signup,
  global,
  header,
  patients,
  diagnosis,
  factory,
  updateProfile,
};
