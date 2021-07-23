import { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import { TextField, Checkbox, Box, Button, Typography } from '@material-ui/core';
import useStyles from './useStyles';

// Context
import { useSettings } from '../../../context/useSettingsContext';

const Availability = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { updateUnavailableContext, updateHoursContext, updateSettings } = useSettings();

  const [days, setDays] = useState<Record<string, boolean>>({
    Sunday: false,
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
  });

  const handleBoxChange = (event: ChangeEvent<{ name: string }>) => {
    const selectedDay = event.target.name;
    setDays({ ...days, [selectedDay]: !days[selectedDay] });
  };

  const renderCheckBoxes = () => {
    return Object.keys(days).map((day) => (
      <Box
        key={day}
        borderTop={1}
        borderLeft={1}
        borderBottom={1}
        borderRight={day === 'Saturday' ? 1 : 0}
        width={110}
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={`${classes.boxes} ${day === 'Sunday' ? classes.sundayBorder : classes.boxes} ${
          day === 'Saturday' ? classes.saturdayBorder : classes.boxes
        }`}
      >
        <Checkbox
          name={day}
          checked={days[day]}
          onChange={handleBoxChange}
          style={days[day] ? { color: 'darkOrange' } : { color: 'grey' }}
        />
        <Typography className={classes.checkboxText} style={days[day] ? { color: 'black' } : { color: 'grey' }}>
          {day}
        </Typography>
      </Box>
    ));
  };

  const handleSubmit = (startTime?: string, endTime?: string) => {
    const daysUnavailble = [];
    for (const day in days) {
      if (!days[day]) daysUnavailble.push(day);
    }
    updateUnavailableContext(daysUnavailble);
    updateHoursContext([startTime ?? '', endTime ?? '']);
    updateSettings(true);
    history.push('/dashboard');
  };

  return (
    <>
      <Formik
        initialValues={{
          startTime: '08:00',
          endTime: '17:00',
        }}
        onSubmit={(values) => {
          handleSubmit(values.startTime, values.endTime);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <Box mt={5} mx={10} display="flex">
              <Typography className={classes.headerText}>Available Hours:</Typography>
            </Box>
            <br />
            <Box mx={10} mb={5} className={classes.formItem}>
              <TextField
                defaultValue={values.startTime}
                name="start"
                variant="outlined"
                id="time"
                type="time"
                InputProps={{
                  style: { fontSize: '1rem', fontWeight: 700 },
                }}
                onChange={handleChange}
              />
              <Typography style={{ fontSize: '2rem', marginLeft: '3rem', marginRight: '3rem' }}>-</Typography>
              <TextField
                defaultValue={values.endTime}
                onChange={handleChange}
                name="end"
                variant="outlined"
                id="time"
                type="time"
                InputProps={{
                  style: { fontSize: '1rem', fontWeight: 700 },
                }}
              />
            </Box>

            <Box mx={10}>
              <Typography className={classes.headerText}>Available Days:</Typography>
              <br />
              <Box display="flex">{renderCheckBoxes()}</Box>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="column" mt={8}>
              <Button type="submit" className={classes.button}>
                Finish
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Availability;
