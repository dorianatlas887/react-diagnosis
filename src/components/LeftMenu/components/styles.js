const styles = theme => ({
  root: {
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: theme.customSize.leftMenuWidth,
    minHeight: '100vh',
    backgroundColor: theme.palette.darkGray.main,
    border: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 69,
    paddingLeft: 24,
    paddingRight: 24,
  },
  groupIcon: {
    marginRight: 12,
  },
  groupText: {
    color: theme.palette.white.main,
    fontSize: '2.8rem',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: theme.palette.silver.main,
  },
  list: {
    paddingTop: 30,
  },
  listItem: {
    paddingTop: 18,
    paddingBottom: 18,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  listText: {
    color: theme.palette.white.main,
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
});

export default styles;
