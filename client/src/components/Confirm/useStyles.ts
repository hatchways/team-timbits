import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  textField: {
    width: '15rem',
    marginTop: '0.5rem',
  },
  backButton: {
    fontSize: '1rem',
    border: '1px solid darkOrange',
    background: 'darkOrange',
    borderRadius: '5px',
    marginTop: '2rem',
    color: 'snow',
    '&:hover': {
      backgroundColor: 'darkOrange',
      color: 'snow',
    },
  },
}));

export default useStyles;
