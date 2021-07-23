<<<<<<< HEAD
import { Box, Button, Divider, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';

// Context
import { useAuth } from '../../../context/useAuthContext';
import { useSettings } from '../../../context/useSettingsContext';

// Component
import Availability from '../Availability/Availability';

function Confirm(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  const { loggedInUser } = useAuth();
  const { updateViewContext, updateHeaderTextContext, updateProgressContext } = useSettings();

  const handleSubmit = () => {
    updateHeaderTextContext('Set your availability');
    updateProgressContext(75);
    updateViewContext(<Availability />);
  };

  const skipSetup = () => {
    history.push('/dashboard');
  };

  return (
    <>
      <Box mt={5} mb={2} mx={10} display="flex" alignItems="left" flexDirection="column">
        <Typography className={classes.headerText}>
          Here is how CalendApp will work with {loggedInUser?.email}:
        </Typography>
        <br />
        <br />
        <Divider />
      </Box>
      <Box mx={10} mt={3} mb={2}>
        <Box mx={6}>
          <Typography className={classes.rules}>
            1. We will check <span style={{ fontWeight: 700 }}>{loggedInUser?.email}</span> for conflicts
          </Typography>
        </Box>
        <br />
        <br />
        <Divider />
      </Box>
      <Box mx={10} mt={3}>
        <Box mx={6}>
          <Typography className={classes.rules}>
            2. We will add event to <span style={{ fontWeight: 700 }}>{loggedInUser?.email}</span>
          </Typography>
        </Box>
        <br />
        <br />
        <Divider />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" mt={8}>
        <Button onClick={() => handleSubmit()} type="submit" className={classes.button}>
          Continue
        </Button>
        <br />
        <Button onClick={() => skipSetup()} disableRipple={true} className={classes.altButton}>
          Set up later
        </Button>
      </Box>
    </>
=======
import { Box, Divider } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { User } from '../../../interface/User';
import AppLogo from '../../AppLogo';
import ProgressBar from '../ProgressBar';
import useStyles from './useStyles';

interface Props {
  loggedInUser: User;
}
function Confirm({ loggedInUser }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Box mt={5} className={classes.root}>
      <AppLogo />
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
>>>>>>> origin/main
  );
}

export default Confirm;
