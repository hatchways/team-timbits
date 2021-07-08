import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function ConnectedPage({ btnText, handleConfirmSubmit, email }) {
  return (
    <div>
      <h3>
        Here's how CalendApp will work with <span>{email}</span>:
      </h3>
      <Divider />
      <div>
        1. We will check "<span>{email}</span>" for conflicts
      </div>
      <Divider />
      <div>
        2. We will add event to "<span>{email}</span>"
      </div>
      <Divider />
      <Button text={btnText} submitForm={handleConfirmSubmit} />
    </div>
  );
}

ConnectedPage.propTypes = {
  email: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  handleConfirmSubmit: PropTypes.func.isRequired,
};

export default ConnectedPage;