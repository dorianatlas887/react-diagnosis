const styles = theme => ({
  name: {
    fontSize: '2.6rem',
    color: theme.palette.darkGray.main,
    paddingTop: 0,
    lineHeight: '36px',
    marginBottom: theme.spacing.unit * 4,
  },
  national: {
    fontSize: '1.6rem',
    color: theme.palette.darkGray.main,
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
});

export default styles;
