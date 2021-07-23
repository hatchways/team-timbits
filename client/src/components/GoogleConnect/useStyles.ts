import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
  googleButton: {
    background: 'linear-gradient(90deg, rgba(247,105,0,1) 0%, rgba(247,134,0,1) 100%)',
    color: '#FFF',
    width: '190px',
    borderRadius: '5px',
    border: 'thin solid #888',
    boxShadow: '1px 1px 1px grey',
    whiteSpace: 'nowrap',
  },
  mdWrapper: {
    height: '35rem',
    width: '35rem',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  header: {
    fontWeight: 700,
    fontSize: '1.8rem',
    marginTop: '4rem',
    marginBottom: '2.5rem',
  },
  text: {
    fontWeight: 300,
    fontSize: '0.9rem',
    lineHeight: '1.5rem',
    color: 'hsl(0,0%,50%)',
    textAlign: 'center',
  },
  googleAuth: {
    marginTop: '4.5rem',
    background: 'linear-gradient(45deg, tomato 5%, darkOrange 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white!important',
    height: '3.5rem',
    padding: '0 30px',
    fontSize: '1rem',
  },
  googleLogo: {
    height: '1.5rem',
    paddingRight: '15px',
  },
}));

export default useStyles;
