import { CircularProgress } from '@material-ui/core';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
}

const ProtectedRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const { loggedInUser } = useAuth();
  //if loading
  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
