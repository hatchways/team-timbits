import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(4),
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4),
  },
  button: {
    background: 'linear-gradient(90deg, rgba(247,105,0,1) 0%, rgba(247,134,0,1) 100%)',
    color: 'white',
  },
}));

export default useStyles;
