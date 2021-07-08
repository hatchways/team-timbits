import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

interface Props {
  url: string,
  setUrl: string,
  setTimeZone: string,
  btnText: string,
  handleProfileSettingSubmit: any,
}

function ProfileSetting({ url, setUrl, setTimeZone, btnText, handleProfileSettingSubmit }: Props) {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={4}>
        <div>Create Your CalendApp URL: </div>
      </Grid>

      <Grid item xs={8}>
        <TextField
          id="url-field"
          variant="outlined"
          value={url}
          //onChange={}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" component="div">
                calendapp.com/
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={4}>
        <div>Select your time zone: </div>
      </Grid>

      <Grid item xs={8}>
        <Autocomplete
          id="timezone-field"
          options={moment.tz.names()}
          getOptionLabel={(option) => option + ' (EST' + moment.tz(option).format('Z') + ')'}
          renderInput={(params) => <TextField {...params} label="Type a city or zone" variant="outlined" />}
          onChange={(e, v) => (v)}
        />
      </Grid>
      <div>
        {/* <OnboardingButton  progressText={btnText} submitForm={handleProfileSettingSubmit} /> */}
      </div>
    </Grid>
  );
}

ProfileSetting.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  setTimeZone: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  handleProfileSubmit: PropTypes.func.isRequired,
};

export default (ProfileSetting);
