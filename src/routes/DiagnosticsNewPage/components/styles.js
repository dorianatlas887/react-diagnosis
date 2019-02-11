const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  mainSection: {
    marginTop: theme.spacing.unit * 4,
  },
  borderBox: {
    border: '1px solid #333',
  },
  tableName: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: theme.palette.darkGray.main,
    marginBottom: theme.spacing.unit,
  },
  leftSection: {
    [theme.breakpoints.up('md')]: {
      paddingRight: 24,
      borderRight: '1px solid #D6D6D6',
    },
  },
  rightSection: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 24,
    },
  },
  addSection: {
    minHeight: 600,
  },
  flowSection: {
    width: 'calc(100% - 232px)',
  },
  checkboxSection: {
    marginTop: 16,
  },
  title: {
    fontSize: '2.2rem',
    color: theme.palette.darkGray.main,
  },
  label: {
    fontSize: '1.5rem',
    color: '#9B9B9B',
    fontWeight: 400,
  },
  description: {
    fontSize: '1.5rem',
    color: '#7E7E7E',
    fontWeight: 'bold',
  },
  buttonSection: {
    marginTop: 16,
  },
  photoButton: {
    minWidth: 230,
    fontSize: '1.4rem',
    justifyContent: 'space-between',
    padding: '10px 30px',
  },
  textareaSection: {
    marginTop: 16,
  },
  textarea: {
    width: '100%',
    minHeight: 270,
    padding: 20,
    fontSize: '1.4rem',
  },
  newSection: {
    marginTop: 16,
  },
  addIcon: {
    cursor: 'pointer',
  },
  newText: {
    fontSize: '1.6rem',
    color: theme.palette.darkGray.main,
    marginLeft: 8,
    cursor: 'pointer',
  },
  inputText: {
    fontSize: '1.4rem',
    color: theme.palette.gray.main,
  },
  imageIcon: {
    marginLeft: 8,
    cursor: 'pointer',
  },
  inputSection: {
    width: 'calc(100% - 120px)',
  },
  input: {
    width: '100%',
    color: '#4A4A4A',
    height: 32,
    boxSizing: 'border-box',
    fontSize: '1.4rem',
    padding: '5px 10px',
  },
  questionNum: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#F2F2F2',
    fontWeight: 'bold',
    fontSize: '2.4rem',
    marginRight: 16,
    color: theme.palette.red.main,
  },
  questionSection: {
    width: 'calc(100% - 60px)',
  },
  question: {
    fontSize: '2.2rem',
    color: theme.palette.darkGray.main,
  },
  iconSection: {
    marginTop: 24,
  },
  grayIconBox: {
    width: 85,
    height: 85,
    border: '1px solid #333333',
    marginRight: 16,
    cursor: 'pointer',
  },
  redIconBox: {
    width: 85,
    height: 85,
    border: '1px solid #B12534',
    cursor: 'pointer',
  },
  iconText: {
    fontSize: '1.4rem',
    marginTop: 4,
  },
  divider: {
    marginTop: 10,
    marginBottom: 16,
  },
  conditionText: {
    color: '#4A4A4A',
    fontSize: '1.4rem',
  },
});

export default styles;

export const diagnosisStyle = theme => ({
  grayHeader: {
    backgroundColor: theme.palette.lightSilver.main,
    padding: '10px 40px',
  },
  tableContainer: {
    paddingTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3,
  },
  label: {
    color: theme.palette.gray.main,
    fontSize: '1.4rem',
  },
  text: {
    color: theme.palette.darkGray.main,
    fontSize: '1.4rem',
  },
  bodySection: {
    width: 180,
  },
  details: {
    width: 'calc(100% - 180px)',
  },
  fullImage: {
    width: '100%',
  },
  pointHeader: {
    backgroundColor: theme.palette.darkGray.main,
    color: theme.palette.white.main,
    fontSize: '1.2rem',
    paddingTop: 5,
    paddingBottom: 5,
  },
  pointBox: {
    width: 120,
    height: 55,
    border: '1px solid #333',
  },
  point: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    color: theme.palette.darkGray.main,
    marginLeft: theme.spacing.unit,
  },
  blackBack: {
    backgroundColor: theme.palette.black.main,
    color: theme.palette.white.main,
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  questionNum: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#F2F2F2',
    fontWeight: 'bold',
    fontSize: '1.4rem',
    color: theme.palette.red.main,
  },
  questionText: {
    fontSize: '1.4rem',
    color: theme.palette.gray.main,
  },
  answer: {
    paddingBottom: 15,
  },
  bottomSection: {
    marginTop: 40,
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 25,
  },
  downIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 15,
  },
});
