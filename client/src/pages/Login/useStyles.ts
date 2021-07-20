import { makeStyles } from '@material-ui/core/styles';

/* color1: #F76900, color2: #F78600 */
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '90vh',
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
