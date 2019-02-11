const MuiTableCell = {
  root: {
    borderTop: '1px solid #E7E7E7',
    borderBottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    '&:last-child': {
      paddingRight: 40,
      paddingLeft: 10,
    },
    '&:first-child': {
      paddingRight: 10,
      paddingLeft: 40,
    },
  },
  paddingNone: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    '&:last-child': {
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 40,
      paddingLeft: 10,
    },
    '&:first-child': {
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 10,
      paddingLeft: 40,
    },
  },
  paddingDense: {
    height: 32,
    '&:last-child': {
      paddingRight: 10,
      paddingLeft: 10,
    },
    '&:first-child': {
      paddingRight: 10,
      paddingLeft: 10,
    },
  },
};

export default MuiTableCell;
