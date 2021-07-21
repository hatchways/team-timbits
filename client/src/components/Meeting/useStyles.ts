import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  newEventButton: {
    borderRadius: theme.shape.borderRadius,
    borderColor: 'rgba(247,105,0,1)',
    color: 'rgba(247,105,0,1)',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(247,105,0,.1)',
      borderColor: 'rgba(247,105,0,1)',
      color: 'rgba(247,105,0,1)',
    },
  },
  copyLinkButton: {
    borderRadius: theme.shape.borderRadius,
    borderColor: 'rgba(247,105,0,1)',
    color: 'rgba(247,105,0,1)',
    '&:hover': {
      backgroundColor: 'rgba(247,105,0,.1)',
      borderColor: 'rgba(247,105,0,1)',
      color: 'rgba(247,105,0,1)',
    },
  },
  meetingCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    boxShadow: 'rgb(0 0 0 / 0.15) 0px 2px 12px',
    '&:hover': {
      boxShadow: 'rgb(0 0 0 / 0.30) 0px 2px 12px',
    },
    position: 'relative',
  },
  cardStylingBar: {
    height: theme.spacing(1),
    backgroundColor: '#FF7000',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  profileSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  cardFooter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  meetingContainer: {},
  title: {
    fontWeight: 700,
    fontSize: '1rem',
    color: 'black',
    textTransform: 'capitalize',
  },
  divider: {
    margin: theme.spacing(2),
  },
}));

export default useStyles;
