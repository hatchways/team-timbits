import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.react-calendar': {
      width: '350px',
      height: '21.875rem',
      maxWidth: '95%',
      fontFamily: 'Open Sans, sans-serif, Roboto',
      lineHeight: '1.125em',
      marginTop: '1rem',
    },
    '.react-calendar--doubleView': {
      width: '700px',
    },
    '.react-calendar--doubleView .react-calendar__viewContainer': {
      display: 'flex',
      margin: '-0.5em',
    },
    '.react-calendar--doubleView .react-calendar__viewContainer > *': {
      width: '50%',
      margin: '0.5em',
    },
    '.react-calendar, .react-calendar *, .react-calendar *:before, .react-calendar *:after': {
      boxSizing: 'border-box',
    },
    '.react-calendar button': {
      margin: 0,
      border: 0,
      outline: 'none',
    },
    '.react-calendar button:enabled:hover': {
      cursor: 'pointer',
    },
    '.react-calendar__navigation': {
      height: '44px',
      marginBottom: '1em',
    },
    '.react-calendar__navigation button': {
      minWidth: '44px',
      background: 'none',
      fontSize: '1rem',
      fontWeight: '300',
      color: 'gray',
      transition: '0.5s color',
    },
    '.react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus': {
      color: 'darkOrange',
      backgroundColor: 'snow',
    },
    '#root > div > div > div > div:nth-child(2) > div > div.react-calendar > div.react-calendar__navigation > button.react-calendar__navigation__arrow.react-calendar__navigation__next-button':
      {
        color: 'darkOrange',
        fontSize: '1.5rem',
      },
    '#root > div > div > div > div:nth-child(2) > div > div.react-calendar > div.react-calendar__navigation > button.react-calendar__navigation__arrow.react-calendar__navigation__prev-button':
      {
        color: 'darkOrange',
        fontSize: '1.5rem',
      },
    '.react-calendar__navigation button[disabled]': {
      backgroundColor: 'none',
      color: 'hsl(0, 0%, 75%)!important',
    },
    '.react-calendar__month-view__weekdays': {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '0.7rem',
    },
    'abbr[title]': {
      textDecoration: 'none',
    },
    '.react-calendar__month-view__weekdays__weekday': {
      padding: '0.5em',
    },
    '.react-calendar__month-view__weekNumbers': {
      fontWeight: 'bold',
    },
    '.react-calendar__month-view__weekNumbers .react-calendar__tile': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75em',
      padding: 'calc(0.75em / 0.75) calc(0.5em / 0.75)',
    },
    '.react-calendar__month-view__days': {
      height: '16rem',
    },
    '#root > div > div > div > div:nth-child(2) > div > div.react-calendar > div.react-calendar__viewContainer > div > div > button':
      {
        border: '4px solid snow',
        borderRadius: '0',
      },
    '#root > div > div > div > div:nth-child(2) > div > div.react-calendar > div.react-calendar__viewContainer > div > div > div > div.react-calendar__month-view__days > button':
      {
        border: '4px solid snow',
      },
    '.react-calendar__year-view .react-calendar__tile, .react-calendar__decade-view .react-calendar__tile, .react-calendar__century-view .react-calendar__tile':
      {
        padding: '2em 0.5em',
      },
    '.react-calendar__tile': {
      maxWidth: '100%',
      textAlign: 'center',
      padding: '0.75em 0.5em',
      background: 'hsl(223,73%,97%)',
      borderRadius: '30%',
    },
    '.react-calendar__tile:disabled': {
      backgroundColor: 'snow',
    },
    '.react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus': {
      backgroundColor: 'darkOrange',
      color: 'snow',
    },
    '.react-calendar__tile--now': {
      background: 'hsl(223,73%,97%)',
    },
    '.react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus': {
      background: 'darkOrange',
    },
    '.react-calendar__tile--hasActive': {
      background: 'darkOrange',
      color: 'snow',
    },
    '.react-calendar__tile--active': {
      background: 'darkOrange',
      color: 'snow',
    },
    '.MuiSelect-select:focus': {
      background: 'none',
    },
  },
  root: {
    minHeight: '100vh',
  },
  mdWrapper: {
    height: '38rem',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  smWrapper: {
    height: 'auto',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  xsWrapper: {
    height: '41.205rem',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: '2rem',
    width: '15rem',
  },
  none: {
    display: 'none',
  },
  block: {
    display: 'block',
  },
  invisible: {
    visibility: 'hidden',
  },
  hidden: {
    visibility: 'visible',
  },
  centerText: {
    textAlign: 'center',
  },
  normalText: {
    textAlign: 'inherit',
  },
  mdFlow: {
    height: '89%',
    overflow: 'scroll',
    overflowX: 'hidden',
  },
  smFlow: {
    height: '34rem',
    overflowX: 'hidden',
  },
  xsFlow: {
    height: '35rem',
    overflowX: 'hidden',
  },
}));

export default useStyles;
