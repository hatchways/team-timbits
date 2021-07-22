import { Box, Divider } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { User } from '../../../interface/User';
import ProgressBar from '../ProgressBar';
import useStyles from './useStyles';
import logo from '../../../Images/logo.png';

interface Props {
  loggedInUser: User;
}
function Confirm({ loggedInUser }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Box mt={5} className={classes.root}>
      <img src={logo} alt="logo" />
      <Box className={classes.formWrapper}>
        <ProgressBar progressText={'Your Google Calendar is connected!'} progressValue={50} />
        <Box className={classes.formItemsWrapper}>
          <Box mx={6} my={1} className={classes.formItem}>
            <Typography variant="h6" style={{ marginLeft: '-15px' }}>
              Here how CalendApp will work with <span>{loggedInUser.email}</span>
            </Typography>
          </Box>
          <Divider />
          <Box mx={8} mb={1} className={classes.formItem}>
            <Typography>
              1. We will check <span>{loggedInUser.email}</span> for conflicts
            </Typography>
          </Box>
          <Divider />
          <Box mx={8} mb={1} className={classes.formItem}>
            <Typography>
              2. We will add event to <span>{loggedInUser.email}</span>
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Box>
    </Box>
  );
}

export default Confirm;
