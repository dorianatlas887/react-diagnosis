const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  mainSection: {
    marginTop: theme.spacing.unit * 4,
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
  infoBox: {
    border: '1px solid #333',
    marginTop: theme.spacing.unit,
  },
  infoTitle: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  edit: {
    fontSize: '1.4rem',
    marginLeft: theme.spacing.unit / 2,
    cursor: 'pointer',
  },
  boxLeft: {
    borderRight: '1px solid #333',
  },
  boxRight: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  infoSet: {
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6,
  },
});

export default styles;
