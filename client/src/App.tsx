import { theme } from './themes/theme';
import { AuthProvider } from './context/useAuthContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Onboarding from './pages/Onboarding/Onboarding';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/onboarding">
                <Onboarding />
              </Route>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;