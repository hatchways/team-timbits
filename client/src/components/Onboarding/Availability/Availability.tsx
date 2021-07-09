import React, { useState } from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

export default function Availability(): JSX.Element {
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

  const handleDays = (e: { target: { name: any; checked: any } }) => {
    setDays({ ...days, [e.target.name]: e.target.checked });
  };

  const handleHours = (e: { target: { name: any; value: any } }) => {
    setHours({ ...hours, [e.target.name]: e.target.value });
  };

  function renderCheckBoxes(days: { [x: string]: any }) {
    return Object.keys(days).map((day) => {
      return (
        <FormControlLabel
          id={day + '-checkbox-field'}
          key={day}
          control={<Checkbox checked={days[day]} onChange={handleDays} name={day} />}
          label={day + 's'}
          labelPlacement="bottom"
        />
      );
    });
  }

  return (
    <React.Fragment>
      <div>
        <div>Available Hours: </div>
        <div>
          <TextField
            id="start-hours-field"
            value={hours}
            variant="outlined"
            type="time"
            name="start"
            onChange={handleHours}
          />
          <span>-</span>
          <TextField
            id="end-hours-field"
            value={hours}
            variant="outlined"
            type="time"
            name="end"
            onChange={handleHours}
          />
        </div>
      </div>

      <div>
        <div>Available Days: </div>
        <FormGroup row>{renderCheckBoxes(days)}</FormGroup>
      </div>
    </React.Fragment>
  );
}
