import { Divider } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { User } from '../../../interface/User';

interface Props {
  loggedInUser: User;
}

function Confirm({ loggedInUser }: Props) {
  return (
    <div>
      <h3>
        <Typography>
          Here how CalendApp will work with <span>{loggedInUser.email}</span>
        </Typography>
      </h3>
      <Divider />
      <div>
        <Typography>
          1. We will check <span>{loggedInUser.email}</span> for conflicts
        </Typography>
      </div>
      <Divider />
      <div>
        <Typography>
          2. We will add event to <span>{loggedInUser.email}</span>
        </Typography>
      </div>
      <Divider />
    </div>
  );
}

export default Confirm;
