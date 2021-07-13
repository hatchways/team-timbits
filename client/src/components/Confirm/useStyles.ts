import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  mdWrapper: {
    backgroundColor: 'snow',
    width: '100%',
    height: '38rem',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
}));

export default useStyles;
