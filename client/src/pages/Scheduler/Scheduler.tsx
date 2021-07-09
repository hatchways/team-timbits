import axios from 'axios';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';

// Material-UI and Style
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// Calendar Style
import 'react-calendar/dist/Calendar.css';

// Components
import Time from '../../components/Time/Time';

function Scheduler(): JSX.Element {
  // Local State
  const [size, setSize] = useState<GridSize>(6);
  const [open, setOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  // Material-UI & Style
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  // Retrieve desired meeting length from url minus min
  const { username, time }: { username: string; time: string } = useParams();
  const withoutLetters = time.replace(/[A-z]/g, '');

  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <Grid container alignItems="center" justifyContent="center" className={classes.root}>
          <Paper elevation={16} className={checked ? classes.paperExpand : classes.paper}>
            <Grid container className={classes.height}>
              <Grid
                item
                lg={size}
                xs={12}
                className={`${matches ? classes.right : classes.bottom} ${classes.gridItem}`}
              >
                <Typography variant="h6">{username}</Typography>
                <Typography variant="h4">{withoutLetters} minute meeting</Typography>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccessTimeOutlinedIcon fontSize="medium" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6"> {withoutLetters} min</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={size} xs={6} className={`${classes.gridItem}`}>
                <Typography variant="h4">Select a Date & Time</Typography>
                <Calendar
                  value={selectedDay}
                  minDate={new Date()}
                  onClickDay={(value, event) => {
                    setSelectedDay(value);
                    setSize(4);
                    setChecked(true);
                  }}
                />
              </Grid>

              <Zoom in={checked} style={{ transitionDelay: checked ? '1s' : '0ms' }}>
                <Grid item lg={size} xs={6}>
                  <Typography>{selectedDay.toString().slice(0, 10).replace(/-/g, '')}</Typography>
                  {/* Map out the times available from what the user has set */}
                  <Button>
                    <FiberManualRecordIcon color="primary" fontSize="small" />
                    9:45
                  </Button>
                </Grid>
              </Zoom>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}

export default Scheduler;
