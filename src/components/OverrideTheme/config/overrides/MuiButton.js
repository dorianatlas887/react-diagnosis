export default {
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 16,
    boxShadow: 'none',
    borderRadius: 0,
    minWidth: 160,
    lineHeight: '25px',
  },
  containedPrimary: {
    border: '1px solid #B12534',
    boxShadow: 'none',
    '&:hover': {
      color: '#B12534',
      border: '1px solid #B12534',
    },
    '&$disabled': {
      backgroundColor: 'rgba(177, 37, 52, 0.3)',
      color: '#FFFFFF',
    },
  },
  containedSecondary: {
    border: '1px solid #333333',
    boxShadow: 'none',
    '&:hover': {
      color: '#333333',
      border: '1px solid #333333',
    },
    '&$disabled': {
      backgroundColor: 'rgba(51, 51, 51, 0.3)',
      color: '#FFFFFF',
    },
  },
  text: {
    border: '1px solid #D8D8D8',
    backgroundColor: '#D8D8D8',
    color: '#7E7E7E',
    '&:hover': {
      background: '#FFFFFF',
      border: '1px solid #7E7E7E',
    },
    '&$disabled': {
      backgroundColor: 'rgba(216, 216, 216, 0.3)',
      color: '#FFFFFF',
    },
  },
  disabled: {
    border: 0,
  },
};
