import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  headerText: {
    fontWeight: 700,
    fontSize: '1rem',
  },
  button: {
    background: 'linear-gradient(45deg, tomato 5%, darkOrange 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white!important',
    height: '3.5rem',
    width: '10rem',
    padding: '0 30px',
    fontSize: '1rem',
  },
  altButton: {
    background: 'none',
    border: 0,
    color: 'grey',
    height: '3.5rem',
    width: '10rem',
    padding: '0 30px',
    fontSize: '1rem',
    fontWeight: 300,
    '&:hover': {
      background: 'none',
      color: 'black',
    },
  },
});

export default useStyles;
