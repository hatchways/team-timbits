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
    lineHeight: '2rem',
  },
  xsUsername: {
    fontSize: '1rem',
    fontWeight: 300,
    opacity: '0.75',
    color: 'gray',
    lineHeight: '1.5rem',
    textAlign: 'center',
  },
  mdTime: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  xsTime: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    textAlign: 'center',
  },
  mdBox: {
    height: '1.5rem',
    marginTop: '0.8rem',
  },
  xsBox: {
    height: '2.5rem',
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
  },
  meetingLength: {
    float: 'left',
    paddingTop: '1px',
    marginLeft: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
}));

export default useStyles;
