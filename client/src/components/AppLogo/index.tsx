import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import appLogo from '../../assets/applogo.png';

const AppLogo = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.applogo}>
      <img src={appLogo}></img>
    </Box>
  );
};

export default AppLogo;
