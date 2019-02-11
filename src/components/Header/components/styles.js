import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    boxShadow: 'none',
    overflow: 'hidden',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.customSize.leftMenuWidth,
    width: `calc(100% - ${theme.customSize.leftMenuWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    padding: 0,
    backgroundColor: theme.palette.lightSilver.main,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.8),
    },
  },
  menuIcon: {
    fontSize: '4.5rem',
  },
  avatar: {
    marginRight: theme.spacing.unit,
    cursor: 'pointer',
  },
  title: {
    display: 'block',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: theme.palette.lightBlack.main,
    cursor: 'pointer',
  },
  verticalDivider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: theme.palette.white.main,
    height: 'auto',
    margin: 0,
    border: 0,
    marginLeft: theme.spacing.unit * 3,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logout: {
    position: 'relative',
    padding: '0 20px',
    cursor: 'pointer',
    marginLeft: 0,
    width: 'auto',
  },
  logoutIcon: {
    fontSize: '4rem',
    color: theme.palette.lightBlack.main,
  },
  pathBar: {
    minHeight: 40,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    background: theme.palette.white.main,
    paddingLeft: 84,
    paddingRight: 84,
  },
  horizentalDivider: {
    backgroundColor: theme.palette.silver.main,
  },
});

export default styles;
