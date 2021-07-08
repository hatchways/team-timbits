import { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import handleFetchErrors from '../../helpers/utils';
import { Paper, Divider } from "@material-ui/core";
import ProfileSetting from "../../components/Onboarding/ProfileSetting/ProfileSetting";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import Availability from "../../components/Onboarding/Availability/Availability";
import Confirm from "../../components/Onboarding/Confirm/Confirm";
import { useAuth } from "../../context/useAuthContext";

interface Props {
  url: string,
  timezone: any,
  hours: string,
  days: string,
  type: string,
  activeStep: any,
}

const { loggedInUser } = useAuth();

const progressText = {
  profileSetting: {
    header: 'Welcome to CalendApp',
    btnText: 'Continue',
  },
  confirm: {
    header: 'Your Google Calendar is connected',
    btnText: 'Continue',
  },
  availability: {
    header: 'Set your availability',
    btnText: 'Done'
  }
};


function Onboarding({ url, timezone, hours, days, type, activeStep }: Props) {
  const [url, setURL] = useState('');
  const [timezone, setTimeZone] = useState('');
  const [hours, setHours] = useState({ start: '6:00', end: '21:00' })
  const [days, setDays] = useState({
    Sunday: false,
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
  });
}

let history = useHistory();

function getSteps(this: any, type: string) {
  if (type === 'profileSetting') {
    return (
      <ProfileSetting
        handleProfileSettingSubmit={handleProfileSettingSubmit}
        btnText={progressText[type].btnText}
        url={this.url}
        timezone={this.timezone}
        setUrl={this.setUrl}
        setTimeZone={this.setTimeZone}
      />
    );
  }
  if (type === 'confirm') {
    const email = loggedInUser?.email;
    return <Confirm btnText={progressText[type].btnText} handleConfirmSubmit={handleConfirmSubmit} email={email} /> //add email
  }
  if (type === 'availability') {
    return (
      <Availability
        submitForm={submitForm}
        hours={this.hours}
        btnText={progressText[type].btnText}
        setHours={this.setHours}
        days={this.days}
        setDays={this.setDays} 
      />
    );
  }
}

const handleConfirmSubmit = () => {
  history.push('/availability');
};

const handleProfileSettingSubmit = () => {
  if (url === '' || timezone === '') {
    return;
  }
  fetch(`/api/user/url?=${url}`) 
  .then(handleFetchErrors)
  .then((res) => res.json())
  .then((data) => {
    if (!data.isUnique) {
      return;
    }
    history.push('/confirm');
  })
  .catch((err) => {
    console.error(err);
  })
}

const submitForm = () => {
  const profileInfo = {
    url,
    timeZone,
    hours,
    days,
  };

  const sub = // CREATE A auth file;

  fetch(`/api/user/profile/${sub}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profileInfo),
  })
    .then(handleFetchErrors)
    .then((res) => {
      if (res.status !== 200) return;
      history.push('/dashboard');
    })
    .catch((err) => {
      console.error(err);
    });


    return (
      <Paper elevation={6} className={classes.paper}>
        <div className={classes.headRow}>
          <div className={classes.headContent}>
            <h2>{progressText.header}</h2>
            <ProgressBar activeStep={activeStep} />
          </div>
          <Divider className={classes.divider} />
        </div>
        {getSteps(type)}
      </Paper>
    );
    
};


Onboarding.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default (Onboarding);
