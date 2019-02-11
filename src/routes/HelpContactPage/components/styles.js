const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit * 2,
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
    [theme.breakpoints.up('md')]: {
      paddingLeft: 30,
    },
  },
  label: {
    paddingBottom: theme.spacing.unit,
    fontSize: '1.4rem',
    color: theme.palette.gray.main,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    fontSize: 16,
    padding: '5px 10px',
    marginBottom: theme.spacing.unit,
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    fontSize: 16,
    padding: '5px 10px',
    height: '200px',
    boxSizing: 'border-box',
  },
  save: {
    marginTop: theme.spacing.unit * 4,
  },
});

export default styles;
