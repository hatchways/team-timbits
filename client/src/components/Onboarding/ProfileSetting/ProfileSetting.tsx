import { TextField, Divider, Typography, MenuItem, Grid } from '@material-ui/core';
import React from 'react';
import moment from 'moment-timezone';
import { Component } from 'react';
//import useStyles from './useStyles';

export class ProfileSetting extends Component {
  continue(e?: any) {
    this.props.nextStep();
  }
  props: any;
  setState: any;
  render() {
    const { values, handleChange } = this.props;
    const names = moment.tz.names();
    const { zoneName } = this.setState('EST');

    return (
      <React.Fragment>
        <Grid container>
          <TextField name="url" label="URL" onChange={handleChange('url')} defaultValue={values.url} />
          <Divider orientation="vertical" />
          <Typography variant="h6"></Typography>
          <Typography variant="h6">Select your timezone:</Typography>
          <TextField
            id="standard-select-currency"
            name="timezone"
            select
            label="Select"
            value={zoneName}
            onChange={handleChange('timezone')}
            helperText="Please select your utc time"
          >
            {names.map((option) => (
              <MenuItem key={option} value={option}>
                <Typography component={'div'} variant="h5">
                  UTC Time: {option} ({moment.tz(option).format('HH:mm')})
                </Typography>
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ProfileSetting;
