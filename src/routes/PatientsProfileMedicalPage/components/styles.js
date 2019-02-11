const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 25,
  },
  patientInfo: {
    marginTop: theme.spacing.unit * 4,
  },
  contactInfo: {
    marginTop: theme.spacing.unit * 4,
  },
  label: {
    fontWeight: 'bold',
    color: theme.palette.gray.main,
    fontSize: '1.4rem',
    lineHeight: 1.6,
  },
  text: {
    fontSize: '1.4rem',
    color: theme.palette.darkGray.main,
  },
  boxSection: {
    marginTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing.unit * 2,
    },
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
});

export default styles;
