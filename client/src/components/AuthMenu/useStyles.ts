import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    fontWeight: 700,
    fontSize: '0.9rem',
    color: 'black',
    '&:hover': {
      background: 'none',
    },
  },
  logo: {
    width: '2.5rem',
    borderRadius: '100%',
    marginRight: '1rem',
  },
}));

export default useStyles;
