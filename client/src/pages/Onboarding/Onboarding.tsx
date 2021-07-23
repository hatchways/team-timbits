import { Box, CssBaseline, Container, Grid, LinearProgress, withStyles, Typography } from '@material-ui/core';
import useStyles from './useStyles';

// Context
import { useSettings } from '../../context/useSettingsContext';

import logo from '../../Images/logo.png';

const Progress = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: '20rem',
    marginTop: '1.1rem',
  },
  colorPrimary: {
    backgroundColor: '#f1f3f8',
  },
  bar: {
    backgroundColor: '#f76900',
    borderRadius: '5px',
  },
}))(LinearProgress);

function Onboarding(): JSX.Element {
  const classes = useStyles();

  const { view, progress, headerText } = useSettings();

  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={7}>
          <img src={logo} />
          <Box display="flex" flexDirection="column" className={classes.mdWrapper} mt={5}>
            <Box mt={8} pl={10} pb={3} borderBottom={2} className={classes.border}>
              <Grid container>
                <Grid item md={7}>
                  <Typography className={classes.headerText}>{headerText}</Typography>
                </Grid>
                <Grid item md={5}>
                  <Progress variant="determinate" value={progress} />
                </Grid>
              </Grid>
            </Box>
            {view}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Onboarding;
