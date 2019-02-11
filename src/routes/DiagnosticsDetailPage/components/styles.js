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
  mainSection: {
    marginTop: theme.spacing.unit * 4,
  },
  leftSection: {
    [theme.breakpoints.up('md')]: {
      paddingRight: 24,
      borderRight: '1px solid #D6D6D6',
    },
  },
  pagination: {
    marginTop: theme.spacing.unit * 2,
  },
  rightSection: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 24,
    },
  },
  patientInfo: {
    marginBottom: theme.spacing.unit * 1,
  },
  name: {
    fontSize: '1.8rem',
    color: theme.palette.black.main,
  },
  date: {
    fontSize: '1.2rem',
    color: theme.palette.gray.main,
  },
});

export default styles;
