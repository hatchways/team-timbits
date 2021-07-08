import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  accAside: {
    fontSize: 14,
    color: 'black',
    fontWeight: 600,
    textAlign: 'center',
    marginRight: 15,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: {
    textDecoration: 'none',
    color: '#F78600',
    fontWeight: 600,
    fontSize: 14,
  },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    color: '#3a8dff',
    boxShadow: 'none',
    marginRight: 35,
  },
}));

export default useStyles;
