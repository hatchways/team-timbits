import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    height: '2.5rem',
    borderRadius: '100%',
    marginRight: '1rem',
  },
  name: {
    fontWeight: 700,
    fontSize: '0.9rem',
  },
  link: {
    fontWeight: 300,
    fontSize: '0.9rem',
    color: 'hsl(0,0%,60%)',
  },
  button: {
    marginLeft: 'auto',
    border: '2px solid darkOrange',
    fontSize: '1rem',
    fontWeight: 700,
    color: 'darkOrange',
    padding: '0.4rem 1.2rem 0.4rem 1.2rem',
    '&:hover': {
      background: 'darkOrange',
      color: 'ghostwhite',
    },
  },
  eventBox: {
    borderRadius: '5px',
    width: '23rem',
    background: 'snow',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  meetingLength: {
    fontWeight: 700,
    fontSize: '1.5rem',
  },
  meetingType: {
    color: 'hsl(0,0%,60%)',
  },
  hover: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  time: {
    fontWeight: 700,
    paddingLeft: '10px',
  },
  guideButton: {
    fontWeight: 700,
    fontSize: '1rem',
    color: 'snow',
    background: 'linear-gradient(45deg, tomato 5%, darkOrange 90%)',
    padding: '15px 30px',
    borderRadius: '30px',
  },
});

export default useStyles;
