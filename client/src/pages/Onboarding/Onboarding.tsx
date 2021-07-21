import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormikHelpers } from 'formik';
import checkUserUrl from '../../helpers/APICalls/checkUserUrl';
import Confirm from '../../components/Onboarding/Confirm/Confirm';
import { useAuth } from '../../context/useAuthContext';
import ProfileSetting from '../../components/Onboarding/ProfileSetting/ProfileSetting';
import { useHistory } from 'react-router-dom';
import Availability from '../../components/Onboarding/Availability/Availability';
import updateUser from '../../helpers/APICalls/updateUser';
import checkUserAvailability from '../../helpers/APICalls/checkUserAvailability';
import updateUserAvailability from '../../helpers/APICalls/updateUserAvailability';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return [25, 50, 100];
}
const HandleProfileSubmit = (
  { url, timezone }: { url: string; timezone: string },
  { setSubmitting }: FormikHelpers<{ url: string; timezone: string }>,
) => {
  checkUserUrl(url).then((data) => {
    if (data.error) {
      setSubmitting(false);
    } else if (data.success) {
      updateUser(url, timezone);
    }
  });
};

const HandleAvailabilitySubmit = (
  { hours, days }: { hours: string; days: string },
  { setSubmitting }: FormikHelpers<{ hours: string; days: string }>,
) => {
  checkUserAvailability(hours, days).then((data) => {
    if (data.error) {
      setSubmitting(false);
    } else if (data.success) {
      updateUserAvailability(hours, days);
    }
  });
};

function GetStepContent(stepIndex: number) {
  const { loggedInUser } = useAuth();
  const history = useHistory();

  if (loggedInUser === undefined) return;
  if (!loggedInUser) {
    history.push('/login');
    return;
  }

  switch (stepIndex) {
    case 0:
      return <ProfileSetting handleSubmit={HandleProfileSubmit} />;
    case 1:
      return <Confirm loggedInUser={loggedInUser} />;
    case 2:
      return <Availability handleSubmit={HandleAvailabilitySubmit} />;
    default:
      return 'No more steps';
  }
}

export default function HorizontalLabelPositionBelowStepper(): JSX.Element {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container>
      {activeStep === steps.length ? (
        <Grid item>
          <Typography className={classes.instructions}>All steps completed</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </Grid>
      ) : (
        <Grid item>
          <Typography className={classes.instructions}>{GetStepContent(activeStep)}</Typography>
          <Grid item>
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
