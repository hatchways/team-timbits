import React, { useState } from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { Formik, FormikHelpers, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

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
    }>
  ) => void;
}

const Availability = ({ handleSubmit }: Props): JSX.Element => {
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
        <FormControlLabel
          id={day + '-checkbox-field'}
          key={day}
          value={day}
          control={<Checkbox checked={days[day]} onChange={handleChange} name={day} />}
          label={day + 's'}
          labelPlacement="bottom"
        />
      );
    });
  }

  return (
    <Formik
     initalValues={{
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
      {({handleSubmit, handleChange, values, touched, errors}: any) => (
        <form onSubmit={handleSubmit}>
          <div>
        <div>Available Hours: </div>
        <div>
          <TextField
            id="start-hours-field"
            value={values.hours}
            helperText={touched.hours ? errors.hours : ''}
            error={ touched.hours && Boolean(errors.hours)}
            variant="outlined"
            type="time"
            name="start"
            onChange={handleChange}
          />
          <span>-</span>
          <TextField
            id="end-hours-field"
            value={values.hours}
            variant="outlined"
            type="time"
            name="end"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <div>Available Days: </div>
        <FormGroup row>{renderCheckBoxes(values.days)}</FormGroup>
      </div>
        </form>
      )}
      </Formik>
    );
      }

  export default Availability;
