import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';

const AppLogo = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.applogo}>
      <img src={logo}></img>
    </Box>
  );
};

export default AppLogo;
