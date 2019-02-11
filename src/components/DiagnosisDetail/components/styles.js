const styles = theme => ({
  grayHeader: {
    backgroundColor: theme.palette.lightSilver.main,
    padding: '10px 40px',
  },
  tableContainer: {
    paddingTop: theme.spacing.unit * 3,
    borderTop: '1px solid #333333',
  },
  label: {
    color: theme.palette.gray.main,
    fontSize: '1.4rem',
  },
  text: {
    color: theme.palette.darkGray.main,
    fontSize: '1.4rem',
  },
  pointHeader: {
    backgroundColor: theme.palette.darkGray.main,
    color: theme.palette.white.main,
    fontSize: '1.2rem',
    paddingTop: 5,
    paddingBottom: 5,
  },
  pointBox: {
    width: 120,
    height: 55,
    border: '1px solid #333',
  },
  point: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    color: theme.palette.darkGray.main,
    marginLeft: theme.spacing.unit,
  },
  blackBack: {
    backgroundColor: theme.palette.black.main,
    color: theme.palette.white.main,
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  questionNum: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#F2F2F2',
    fontWeight: 'bold',
    fontSize: '1.4rem',
    color: theme.palette.red.main,
  },
  questionText: {
    fontSize: '1.4rem',
    color: theme.palette.gray.main,
  },
  answer: {
    paddingBottom: 15,
  },
  fullImage: {
    width: '100%',
  },
});

export default styles;
