const styles = () => ({
  table: {
    width: 'auto',
  },
  focused: {
    zIndex: 1,
    border: '8px solid black',
  },
  disabledCell: {
    borderColor: '#DCDCDD',
    opacity: 0.3,
  },
  none: {
    border: 0,
  },
  select: {
    border: '9px solid black',
  },
  selectable: {
    '&:hover': {
      zIndex: 1,
      border: '8px solid black',
    },
  },
  selectedIcon: {
    color: '#CE2632',
  },
});

export default styles;
