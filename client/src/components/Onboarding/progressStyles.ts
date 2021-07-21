import makeStyles from '@material-ui/core/styles/makeStyles';

const progressStyles = makeStyles(() => ({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    display: 'flex',
  },
  headerItem: {
    margin: '35px 25px',
  },
}));

export default progressStyles;
