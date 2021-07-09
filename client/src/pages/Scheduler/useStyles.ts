import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '58.406rem',
  },
  paper: {
    width: 'calc(100% / 1.3)',
    transition: 'width 1s',
  },
  paperExpand: {
    width: 'calc(100% / 0.8)!important',
    transition: 'width 1s',
  },
  height: {
    height: '100%',
  },
  gridItem: {
    transition: 'all 1s',
  },
  right: {
    borderRight: '1px solid hsl(0, 0%, 80%)',
  },
  bottom: {
    borderBottom: '1px solid hsl(0, 0%, 75%)',
  },
}));

export default useStyles;
