import React from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import moment from 'moment-timezone';

interface InfoProps {
  username: string;
  time: string;
  selectedDay: Date | undefined;
  mdWidth: boolean;
  smWidth: boolean;
  timezone: string;
}

function Info({ username, time, selectedDay, timezone, mdWidth, smWidth }: InfoProps): JSX.Element {
  const classes = useStyles();
  const weekday = moment(selectedDay).format('dddd');
  const day = moment(selectedDay).format('MMMM DD yy');

  return (
    <Grid item md={4} xs={12} className={`${mdWidth ? classes.mdScreen : classes.xsScreen}`}>
      <Box mt={mdWidth ? 9 : 3} ml={mdWidth ? 6 : 0}>
        <Typography className={`${mdWidth ? classes.mdUsername : classes.xsUsername}`}>
          {!smWidth && selectedDay ? weekday : username}
        </Typography>
        <Typography className={`${mdWidth ? classes.mdTime : classes.xsTime}`}>
          {!smWidth && selectedDay ? day : `${time} minute meeting`}
        </Typography>
        <Box className={`${mdWidth ? classes.mdBox : classes.xsBox}`}>
          {!smWidth && selectedDay ? (
            <Typography className={classes.meetingLength}>{timezone}</Typography>
          ) : (
            <>
              <AccessTimeIcon style={{ float: 'left', fontSize: '1.5rem' }} />
              <Typography className={classes.meetingLength}> {time} min</Typography>
            </>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

export default Info;
