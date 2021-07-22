import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  buttonSelected: {
    color: 'darkOrange',
    borderBottom: '4px solid darkOrange',
    borderRadius: '0',
    fontWeight: 700,
    fontSize: '0.9rem',
    '&:hover': {
      background: 'none',
    },
  },
  buttonNotSelected: {
    color: 'black',
    borderBottom: '4px solid snow',
    borderRadius: '0',
    fontWeight: 700,
    fontSize: '0.9rem',
    '&:hover': {
      background: 'none',
      borderBottom: '4px solid darkOrange',
      color: 'darkOrange',
    },
  },
}));

export default useStyles;
