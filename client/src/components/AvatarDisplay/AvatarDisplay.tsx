import Avatar from '@material-ui/core/Avatar';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  loggedIn: boolean;
}

const AvatarDisplay = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  return <Avatar alt="Profile Image" src={`https://robohash.org/${loggedInUser?.email}.png`} />;
};

export default AvatarDisplay;
