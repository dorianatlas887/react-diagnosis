const styles = theme => ({
  selectedBox: {
    border: '1px solid #333333',
    marginBottom: theme.spacing.unit * 7,
    padding: '15px 25px',
  },
  textBox: {
    marginBottom: theme.spacing.unit * 3,
  },
  searchText: {
    fontSize: '2.2rem',
    color: theme.palette.darkGray.main,
  },
  searchBox: {
    marginBottom: theme.spacing.unit * 3,
  },
  resultBox: {
    border: '1px solid #333333',
    marginBottom: theme.spacing.unit * 2,
    padding: '15px 25px',
  },
  name: {
    fontSize: '1.8rem',
    color: theme.palette.black.main,
  },
  date: {
    fontSize: '1.2rem',
    color: theme.palette.gray.main,
  },
  button: {
    width: 110,
    minWidth: 110,
  },
  checkIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 15,
    stroke: 'currentColor',
    strokeWidth: 3,
    strokeLinecap: 'round',
  },
});

export default styles;
