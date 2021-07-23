import { Box, Typography, withStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './useStyles';

interface Props {
  progressValue: number;
  progressText: string;
}

const Progress = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: '30vh',
  },
  colorPrimary: {
    backgroundColor: '#f1f3f8',
  },
  bar: {
    backgroundColor: '#f76900',
    borderRadius: '5px',
  },
}))(LinearProgress);

const ProgressBar = ({ progressValue, progressText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.headerItem} variant="h6">
        {progressText}
      </Typography>
      <Progress className={classes.headerItem} variant="determinate" value={progressValue} />
    </Box>
  );
};

export default ProgressBar;
