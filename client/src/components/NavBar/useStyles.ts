import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: '5rem',
    marginBottom: '0.5vh',
    backgroundColor: 'white!important',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  navbar: {
    height: 'calc(100% - 0.5vh)',
    minHeight: '4em',
    border: '0.5vh',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    padding: '1rem',
    marginLeft: '10rem',
  },
  navButtons: {
    marginRight: '0px!important',
  },
  navLinks: {
    textDecoration: 'none!important',
    float: 'right',
    marginRight: '3rem!important',
    fontWeight: 700,
    fontSize: '0.9rem',
  },
}));

export default useStyles;
