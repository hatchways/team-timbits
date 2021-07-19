import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    width: '15rem',
    height: '3.5rem',
    border: '1px solid hsl(0, 0%, 75%)',
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: 300,
    '&:hover': {
      background: 'none',
      borderColor: 'darkOrange',
    },
  },
  text: {
    textAlign: 'left',
    color: 'gray',
    fontWeight: 700,
  },
  icon: {
    textAlign: 'right',
    marginTop: '0.2rem',
    paddingRight: '1rem',
  },
  textCenter: {
    width: '15rem',
    textAlign: 'center',
  },
  textNormal: {
    textAlign: 'left',
  },
  none: {
    display: 'none',
  },
  block: {
    display: 'inline-block',
  },
  backButton: {
    fontSize: '1.5rem',
    border: '1px solid darkOrange',
    background: 'snow',
    borderRadius: '100%',
    paddingLeft: '5px',
    marginRight: '10px',
    color: 'darkOrange',
  },
}));

export default useStyles;
