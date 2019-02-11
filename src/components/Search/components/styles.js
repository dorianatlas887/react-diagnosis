import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  search: {
    position: 'relative',
    border: '1px solid #000',
    width: '100%',
    backgroundColor: fade(theme.palette.white.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.white.main, 0.25),
    },
    boxSizing: 'border-box',
  },
  searchIcon: {
    width: theme.spacing.unit * 4,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    cursor: 'pointer',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    transition: theme.transitions.create('width'),
    fontSize: 16,
    width: '100%',
  },
});

export default styles;
