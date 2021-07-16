import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mdScreen: {
    borderRight: '1px solid hsl(0, 0%, 80%)',
  },
  xsScreen: {
    borderBottom: '1px solid hsl(0, 0%, 75%)',
  },
  mdUsername: {
    fontSize: '1.2rem',
    fontWeight: 300,
    opacity: '0.75',
    color: 'gray',
  },
  xsUsername: {
    fontSize: '1rem',
    fontWeight: 300,
    opacity: '0.75',
    color: 'gray',
    textAlign: 'center',
  },
  mdTime: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  xsTime: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    textAlign: 'center',
  },
  mdBox: {
    height: '1.5rem',
  },
  xsBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  meetingLength: {
    fontWeight: 'bold',
    fontSize: '1rem',
    paddingLeft: '0.5rem',
    height: 'auto',
  },
  none: {
    display: 'none',
  },
  absolute: {
    position: 'absolute',
  },
  backButton: {
    fontSize: '1.5rem',
    border: '1px solid darkOrange',
    background: 'snow',
    borderRadius: '100%',
    paddingLeft: '5px',
    color: 'darkOrange',
    '&:hover': {
      color: 'snow',
      background: 'darkOrange',
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
