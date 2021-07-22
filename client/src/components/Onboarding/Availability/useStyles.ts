import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formItemsWrapper: {
    width: '100%',
    height: '100%',
    borderTop: '2px solid lightgrey',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    borderRadius: 6,
    height: '60vh',
    width: '95vh',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkboxWrap: {
    border: '1.5px solid lightgrey',
    borderRadius: '2px',
  },
});

export default useStyles;
