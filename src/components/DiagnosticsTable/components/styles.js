const styles = theme => ({
  grayHeader: {
    backgroundColor: theme.palette.lightSilver.main,
    padding: '10px 40px',
  },
  select: {
    minWidth: 120,
    fontSize: 14,
    padding: '5px',
    border: '1px solid #000',
  },
  selectText: {
    fontSize: 16,
  },
  datePicker: {
    width: 'auto',
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
  link: {
    color: 'red',
    textDecoration: 'underline',
    textTransform: 'none',
  },
});

export default styles;
