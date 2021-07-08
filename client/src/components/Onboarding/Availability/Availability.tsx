import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';

interface Props {
    setHours: string,
    hours: Array<string>,
    setDays: string,
    days: Array<string>,
    submitForm: any,
}

const checkbox = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))((props) => <Checkbox color="default" {...props} />);

function Availability({ setHours, hours, setDays, days, submitForm }: Props) {
  const handleDays = (e: { target: { name: any; checked: any; }; }) => {
    //setDays({ ...days, [e.target.name]: e.target.checked });
  };

  const handleHours = (e: { target: { name: any; value: any; }; }) => {
    //setHours({ ...hours, [e.target.name]: e.target.value });
  };

  function renderCheckBoxes(days: { [x: string]: any; }) {
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
        <FormGroup row>
          {renderCheckBoxes(days)}
        </FormGroup>
      </div>
    </React.Fragment>
  );
}

Availability.propTypes = {
  setHours: PropTypes.func.isRequired,
  hours: PropTypes.object.isRequired,
  setDays: PropTypes.func.isRequired,
  days: PropTypes.object.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default (Availability);