import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = (theme: any) => ({
  root: {
    flex: '0 0 40%',
    alignSelf: 'center',
    height: '0.5rem',
    borderRadius: '5px',
  },
  colorPrimary: {
    backgroundColor: '#ccc',
  },
  barColorPrimary: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
  },
});

function ProgressBar(props) {
  const { activeStep } = props;

  return (
      <LinearProgress variant="determinate" value={activeStep} />
  )
};


export default ProgressBar;