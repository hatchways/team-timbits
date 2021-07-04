import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
