export default {
  session: {
    user: {},
    authenticated: false,
    checked: true,
  },
  global: {
    loading: false,
  },
  login: {
    status: false,
    error: '',
  },
  signup: {
    error: '',
    success: '',
  },
  header: {
    open: false,
  },
  patients: {
    patientsList: [],
  },
  diagnosis: {
    trees: [],
    loadedTree: false,
    nodes: [],
    diagnosis: {
      id: 'string',
      employee_id: 'string',
      steps: [],
      currentStep: 0,
      currentType: 'tree',
      status: {
        id: 'string',
        name: 'string',
      },
      prescription: [],
    },
    questions: [
      'Did the worker loss of consciousness?',
      'Is the worker bleeding?',
      'Does the worker show deformity that suggest fracture at any body region?',
      'Do you consider the accident can be managed at the factory?',
      'Did the worker need to move to hospital?',
      'Could the worker continue working normally?',
      'Do you consider the accident casual, deliberate or aggression?',
    ],
  },
  factory: {
    factories: [],
    loaded: false,
  },
  updateProfile: {
    success: false,
    message: '',
  },
};
