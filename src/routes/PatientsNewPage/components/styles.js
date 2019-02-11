const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  photoButton: {
    width: '100%',
    fontSize: '1.4rem',
    justifyContent: 'space-between',
    padding: '10px 30px',
  },
  label: {
    color: '#7E7E7E',
    fontSize: '1.4rem',
    lineHeight: 1.8,
  },
  text: {
    fontSize: '1.4rem',
    color: '#333333',
  },
  mainSection: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  name: {
    fontSize: '2.6rem',
    color: theme.palette.darkGray.main,
    paddingTop: 0,
    lineHeight: '36px',
  },
  national: {
    fontSize: '1.6rem',
    color: theme.palette.darkGray.main,
    marginTop: theme.spacing.unit * 4,
  },
  nationalSpan: {
    fontWeight: 'bold',
    color: theme.palette.gray.main,
  },
  status: {
    backgroundColor: theme.palette.green.main,
    padding: '8px 40px',
    borderRadius: 20,
    fontSize: '1.4rem',
    color: theme.palette.white.main,
  },
  boxSection: {
    marginTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
  infoBox: {
    border: '1px solid #333',
    marginTop: theme.spacing.unit,
  },
  infoTitle: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  edit: {
    marginLeft: theme.spacing.unit / 2,
    cursor: 'pointer',
  },
  boxLeft: {
    borderRight: '1px solid #333',
  },
  boxRight: {
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  input: {
    width: '100%',
    border: '1px solid #333',
    padding: '8px 10px',
    fontSize: '1.6rem',
    boxSizing: 'border-box',
  },
  emergencyText: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: theme.palette.darkGray.main,
  },
  emergency: {
    background: theme.palette.lightSilver.main,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 8,
  },
});

export default styles;
