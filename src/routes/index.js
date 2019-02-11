import NotFound from './NotFound';
import MainPage from './MainPage';
import Login from './Login';
import NewLogin from './NewLogin';
import Signup from './Signup';

import PatientsPage from './PatientsPage';
import PatientsNewPage from './PatientsNewPage';
import PatientsProfilePage from './PatientsProfilePage';
import PatientsProfileEditPage from './PatientsProfileEditPage';
import PatientsProfileMedicalPage from './PatientsProfileMedicalPage';
import PatientsProfileDiagnosisPage from './PatientsProfileDiagnosisPage';

import DiagnosticsPage from './DiagnosticsPage';
import DiagnosticsDetailPage from './DiagnosticsDetailPage';
import DiagnosticsSearchPage from './DiagnosticsSearchPage';
import DiagnosticsNewPage from './DiagnosticsNewPage';
import DiagnosticsSavePage from './DiagnosticsSavePage';

import ProfilePage from './ProfilePage';
import ProfileProPage from './ProfileProPage';
import ProfileEditPage from './ProfileEditPage';

import HelpPage from './HelpPage';
import HelpQuestionPage from './HelpQuestionPage';
import HelpContactPage from './HelpContactPage';

export const BASEROUTE = '/';

export const ROUTE_MAIN_PAGE = '/main';

export const ROUTE_PATIENTS_PAGE = '/patients';
export const ROUTE_PATIENTS_NEW_PAGE = '/patients/new';
export const ROUTE_PATIENTS_PROFILE_PAGE = '/patients/profile/:patientsId';
export const ROUTE_PATIENTS_PROFILE_EDIT_PAGE = '/patients/profile/edit/:patientsId';
export const ROUTE_PATIENTS_PROFILE_MEDICAL_PAGE = '/patients/profile/medical/:patientsId';
export const ROUTE_PATIENTS_PROFILE_DIAGNOSIS_PAGE = '/patients/profile/:patientsId/diagnosis/:diagnosisId';

export const ROUTE_DIAGNOSTICS_PAGE = '/diagnostics';
export const ROUTE_DIAGNOSTICS_DETAIL_PAGE = '/diagnostics/detail/:diagnosisId';
export const ROUTE_DIAGNOSTICS_SEARCH_PAGE = '/diagnostics/search';
export const ROUTE_DIAGNOSTICS_NEW_PAGE = '/diagnostics/new/:patientsId';
export const ROUTE_DIAGNOSTICS_SAVE_PAGE = '/diagnostics/save';

export const ROUTE_PROFILE_PAGE = '/profile';
export const ROUTE_PROFILE_PRO_PAGE = '/profile/professional';
export const ROUTE_PROFILE_EDIT_PAGE = '/profile/edit';

export const ROUTE_HELP_PAGE = '/help';
export const ROUTE_HELP_QUESTION_PAGE = '/help/question/:questionId';
export const ROUTE_HELP_CONTACT_PAGE = '/help/contact';

export const ROUTE_LOGIN = '/login';
export const ROUTE_NEW_LOGIN = '/newlogin';
export const ROUTE_LOGOUT = '/logout';
export const ROUTE_SIGNUP = '/signup';

export const routes = [
  {
    path: BASEROUTE,
    component: MainPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_LOGIN,
    component: Login,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_NEW_LOGIN,
    component: NewLogin,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_SIGNUP,
    component: Signup,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_PATIENTS_PAGE,
    component: PatientsPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PATIENTS_NEW_PAGE,
    component: PatientsNewPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PATIENTS_PROFILE_PAGE,
    component: PatientsProfilePage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PATIENTS_PROFILE_EDIT_PAGE,
    component: PatientsProfileEditPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PATIENTS_PROFILE_MEDICAL_PAGE,
    component: PatientsProfileMedicalPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PATIENTS_PROFILE_DIAGNOSIS_PAGE,
    component: PatientsProfileDiagnosisPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_DIAGNOSTICS_PAGE,
    component: DiagnosticsPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_DIAGNOSTICS_DETAIL_PAGE,
    component: DiagnosticsDetailPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_DIAGNOSTICS_SEARCH_PAGE,
    component: DiagnosticsSearchPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_DIAGNOSTICS_NEW_PAGE,
    component: DiagnosticsNewPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_DIAGNOSTICS_SAVE_PAGE,
    component: DiagnosticsSavePage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PROFILE_PAGE,
    component: ProfilePage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PROFILE_PRO_PAGE,
    component: ProfileProPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_PROFILE_EDIT_PAGE,
    component: ProfileEditPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_HELP_PAGE,
    component: HelpPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_HELP_QUESTION_PAGE,
    component: HelpQuestionPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_HELP_CONTACT_PAGE,
    component: HelpContactPage,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    component: NotFound,
    header: false,
  },
];
