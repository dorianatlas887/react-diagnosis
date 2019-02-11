const styles = theme => ({
  container: {
    position: 'relative',
    width: 120,
  },
  search: {
    border: '1px solid #000',
    width: '100%',
    fontSize: '1.4rem',
    paddingTop: 6,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: 6,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  searchIcon: {
    width: theme.spacing.unit * 4,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    zIndex: 1,
  },
});

export default styles;
