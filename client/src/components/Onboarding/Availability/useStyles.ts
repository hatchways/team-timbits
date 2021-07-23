import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formItem: {
    display: 'flex',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 700,
    fontSize: '1.1rem',
  },
  checkboxText: {
    fontWeight: 700,
    fontSize: '0.8rem',
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
  boxes: {
    paddingTop: '10px',
    paddingBottom: '10px',
    borderColor: 'hsl(230,30%,85%)',
  },
  saturdayBorder: {
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  sundayBorder: {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
});

export default useStyles;
