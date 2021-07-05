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
}));

export default useStyles;
