import React, { Component } from 'react';
import ProfileSetting from '../../components/Onboarding/ProfileSetting/ProfileSetting';

export class Onboarding extends Component {
  state = {
    step: 1,
    url: String,
    timezone: String,
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Previous step.
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle fields change
  handleChange = (input: any) => (e: { target: { value: any } }) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { url, timezone } = this.state;
    const values = { url, timezone };

    switch (step) {
      case 1:
        return <ProfileSetting nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
      case 2:
        return <h1>Confirm</h1>;
      case 3:
        return <h1>Availability</h1>;
    }
  }
}

export default Onboarding;
