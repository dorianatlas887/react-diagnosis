const styles = theme => ({
  emailInfo: {
    marginBottom: theme.spacing.unit * 2,
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
  emergency: {
    fontSize: '1.6rem',
    color: theme.palette.darkGray.main,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#E2E2E2',
    marginLeft: -16,
    marginRight: -16,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

export default styles;
