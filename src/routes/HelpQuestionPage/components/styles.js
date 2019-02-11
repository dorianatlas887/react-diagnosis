const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  emailIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 17,
  },
  videoIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 18,
  },
  main: {
    marginTop: theme.spacing.unit * 5,
  },
  left: {
    paddingTop: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      paddingRight: 30,
      borderRight: '1px solid #E7E7E7',
    },
  },
  searchBar: {
  },
  count: {
    marginTop: theme.spacing.unit * 3,
  },
  entires: {
    fontSize: '1.2rem',
    color: theme.palette.darkGray.main,
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
    marginTop: theme.spacing.unit / 2,
  },
  table: {
  },
  link: {
    color: 'red',
    textDecoration: 'underline',
    textTransform: 'none',
  },
  pagination: {
    marginTop: theme.spacing.unit * 2,
  },
  right: {
    paddingTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit,
      paddingLeft: 30,
    },
  },
  title: {
    fontSize: '1.6rem',
    color: theme.palette.darkGray.main,
  },
  mark: {
    backgroundColor: '#f2f2f2',
    marginRight: theme.spacing.unit,
    fontWeight: 'bold',
    color: theme.palette.red.main,
  },
  text: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    fontSize: '1.4rem',
    color: theme.palette.gray.main,
  },
});

export default styles;
