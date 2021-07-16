import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Confirm(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

  const mdWidth = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <CssBaseline />
      <Box mt={mdWidth ? 9 : 3} ml={mdWidth ? 6 : 0}>
        <Typography
          style={
            mdWidth
              ? { fontWeight: 'bold', fontSize: '1.5rem' }
              : { fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }
          }
        >
          Enter Details
        </Typography>
        <Box
          mt={mdWidth ? 0 : 4}
          mb={mdWidth ? 0 : 8}
          style={mdWidth ? {} : { display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Box mt={mdWidth ? 3 : 1}>
            <Typography className={classes.text}>Name</Typography>
            <TextField id="outlined-basic" variant="outlined" className={classes.textField} />
          </Box>
          <Box mt={1}>
            <Typography className={classes.text}>Email</Typography>
            <TextField id="outlined-basic" variant="outlined" className={classes.textField} />
          </Box>
          <br />
          <Button className={classes.backButton}>Schedule Event</Button>
        </Box>
      </Box>
    </>
  );
}

export default Confirm;
