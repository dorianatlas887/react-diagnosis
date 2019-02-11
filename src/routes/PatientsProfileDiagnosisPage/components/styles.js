const styles = theme => ({
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
  patientInfo: {
    marginTop: theme.spacing.unit * 4,
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
});

export default styles;
