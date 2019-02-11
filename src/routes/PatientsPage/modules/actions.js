// import apiFetch from 'utils/apiFetch';
// import {
//   loadingAction,
// } from 'store/globalState/global';

// action types
import {
  FETCH_PATIENTS,
  INIT_PATIENTS,
} from './types';

// action
export const fetchPatients = () => {
  return {
    type: FETCH_PATIENTS,
  };
};

// action
export const initPatients = () => {
  return {
    type: INIT_PATIENTS,
  };
};

// middleware
export const fetchPatientsAction = () => async (dispatch) => {
  // const url = 'request_password';
  // dispatch(loadingAction(true));
  // const res = await apiFetch('GET', { endPoint: url });
  // dispatch({ type: FETCH_PATIENTS, payload: res.data });
  // dispatch(loadingAction(false));

  let patientId = 0;

  function createData(firstName, lastName, factoryId) {
    patientId += 1;
    return {
      id: patientId.toString(),
      imageurl: 'string',
      first_name: firstName,
      last_name: lastName,
      national_id: '123456789',
      gender: 'Female',
      age: '25',
      email: 'aarusha2email.com',
      tel: '798645132985',
      emergency_contact: {
        name: 'Humayun',
        last_name: 'Azad',
        phone: '798645132985',
        mail: 'string',
      },
      address: 'Tejgoan Industrial Area',
      number: '1208',
      country: 'Bangladesh',
      region: 'Dhaka',
      pc: '123455',
      worker_id: '192837',
      position: 'Nurse',
      factory: factoryId,
      start_date: '12/11/2000',
      insourance_start_date: '12/11/2000',
      father_name: 'Humayun Azad',
      mother_name: 'Kajol Chopra',
      home_adress: 'Tejgoan Industrial Area',
      home_number: '1208',
      beneficiary_Name: 'Humayun Azad',
      beneficiary_id: 'Humayun Azad',
      beneficiary_address: 'Tejgoan Industrial Area',
      beneficiary_number: '1234',
      beneficiary_pc: '12345',
      beneficiary_region: 'Dhaka',
      beneficiary_tel: '192837',
    };
  }

  const res = [
    createData('Naina', 'Johar', 'Factory A'),
    createData('Kajol', 'Majeed', 'Factory A'),
    createData('Priyanka', 'Khan', 'Factory A'),
    createData('Anjali', 'Kapoor', 'Factory A'),
    createData('Anushka', 'Sharma', 'Factory A'),
    createData('Aarusha', 'Badour', 'Factory A'),
    createData('Anjali', 'Kapoor', 'Factory A'),
    createData('Araxi', 'Malhotra', 'Factory A'),
    createData('Kajol', 'Chopra', 'Factory A'),
    createData('Priyanka', 'Khan', 'Factory A'),
  ];

  dispatch({ type: FETCH_PATIENTS, payload: res });
};
