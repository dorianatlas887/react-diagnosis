const styles = theme => ({
  section: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: '30px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '50px 0',
    },
    [theme.breakpoints.up('md')]: {
      padding: '60px 0',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '60px 0',
    },
  },
  sectionShift: {
    marginLeft: theme.customSize.leftMenuWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  },
  center: {
    maxWidth: 1420,
  },
});

export default styles;
