import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '90vh',
  },
  mdWrapper: {
    height: '45rem',
    width: '65rem',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  headerText: {
    fontWeight: 700,
    fontSize: '1.5rem',
    height: '5rem',
  },
  border: {
    borderColor: 'hsl(230,30%,90%)',
  },
}));

export default useStyles;
