import React, { useState } from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox, Box } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import ProgressBar from '../ProgressBar';
import useStyles from './useStyles';
import AppLogo from '../../AppLogo';

interface Props {
  handleSubmit: (
    {
      hours,
      days,
    }: {
      hours: string;
      days: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      hours: string;
      days: string;
    }>,
  ) => void;
}

const Availability = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();
  const [hours, setHours] = useState({ start: '9:00', end: '17:00' });
  const [days, setDays] = useState({
    Sunday: false,
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDays(event.target.value as any);
    setHours(event.target.value as any);
  };

  // eslint-disable-next-line
  function renderCheckBoxes(days: any) {
    return Object.keys(days).map((day) => {
      return (
        <Box key={day} className={classes.checkboxWrap}>
          <FormControlLabel
            id={day + '-checkbox-field'}
            key={day}
            value={day}
            control={<Checkbox checked={days[day]} onChange={handleChange} name={day} />}
            label={day + 's'}
            labelPlacement="bottom"
          />
        </Box>
      );
    });
  }

  return (
    <Box mt={6} className={classes.root}>
      <AppLogo />
      <Box className={classes.formWrapper}>
        <ProgressBar progressText={'Set your availability'} progressValue={100} />
        <Box className={classes.formItemsWrapper}>
          <Formik
            initialValues={{
              hours: '',
              days: '',
            }}
            isSubmitting={true}
            isValidating={true}
            validationSchema={Yup.object().shape({
              hours: Yup.string().required('Please choose your hours.'),
              days: Yup.object().required('Please select your days.'),
            })}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, touched, errors }) => (
              <form onSubmit={handleSubmit}>
                <Box mx={7} mt={2} ml={6}>
                  Available Hours:
                </Box>
                <Box mx={6} mt={1} ml={6} className={classes.formItem}>
                  <TextField
                    id="start-hours-field"
                    value={hours}
                    helperText={touched.hours ? errors.hours : ''}
                    error={touched.hours && Boolean(errors.hours)}
                    variant="outlined"
                    type="time"
                    name="start"
                    onChange={handleChange}
                  />
                  <span>-</span>
                  <TextField
                    id="end-hours-field"
                    value={hours}
                    helperText={touched.hours ? errors.hours : ''}
                    error={touched.hours && Boolean(errors.hours)}
                    variant="outlined"
                    type="time"
                    name="end"
                    onChange={handleChange}
                  />
                </Box>
                <Box mx={6} mt={2} ml={6}>
                  Available Days:
                </Box>
                <Box mx={2} mt={1} ml={6}>
                  <FormGroup row>{renderCheckBoxes(days)}</FormGroup>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Availability;
