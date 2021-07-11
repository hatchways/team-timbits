import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '75vh',
  },
  pageHeight: {
    minHeight: 'inherit',
    justifyContent: 'center',
  },
  right: {
    borderRight: '1px solid hsl(0, 0%, 75%)',
  },
  bottom: {
    borderBottom: '1px solid hsl(0, 0%, 75%)',
  },
}));

export default useStyles;
