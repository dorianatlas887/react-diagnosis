const styles = theme => ({
  grayHeader: {
    backgroundColor: theme.palette.lightSilver.main,
    padding: '10px 40px',
  },
  filter: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  select: {
    marginLeft: theme.spacing.unit,
    minWidth: 120,
    fontSize: 14,
    padding: '5px',
    border: '1px solid #000',
  },
  selectFactory: {
    marginLeft: theme.spacing.unit,
  },
  selectText: {
    fontSize: 16,
  },
  count: {
    marginTop: theme.spacing.unit * 3,
  },
  entires: {
    fontSize: 12,
    color: theme.palette.darkGray.main,
  },
  tableSection: {
    marginTop: theme.spacing.unit * 3,
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
  },
  gray: {
    color: theme.palette.gray.main,
  },
  avatar: {
    verticalAlign: 'middle',
    marginRight: theme.spacing.unit,
    width: 32,
  },
  statusActive: {
    color: theme.palette.green.main,
  },
  link: {
    color: 'red',
    textDecoration: 'underline',
    textTransform: 'none',
  },
});

export default styles;
