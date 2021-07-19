import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    justifyContent: 'center',
    height: '20%',
    textAlign: 'center',
  },
  planCardContainer: {
    margin: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planCard: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  planContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    margin: theme.spacing(1),
    height: '55%',
  },
  planDetails: {
    padding: theme.spacing(4),
    height: '20%',
  },
  upgradeButton: {
    backgroundColor: '#F76C00',
    '&:hover': {
      backgroundColor: '#de6100',
    },
  },
}));

export default useStyles;
