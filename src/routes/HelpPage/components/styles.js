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
  searchBar: {
    marginTop: theme.spacing.unit * 6,
  },
  count: {
    marginTop: theme.spacing.unit * 3,
  },
  entires: {
    fontSize: 12,
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
});

export default styles;
