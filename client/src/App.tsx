import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Material-UI & Style
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import './App.css';

// Context
import { AuthProvider } from './context/useAuthContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { SchedulerProvider } from './context/useSchedulerContext';

// Components
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Scheduler from './pages/Scheduler/Scheduler';
import Subscription from './pages/Subscription';
import Onboarding from './pages/Onboarding/Onboarding';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import EventMaker from './components/EventMaker/EventMaker';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SchedulerProvider>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="/subscription" component={Subscription} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/new-event-type" component={EventMaker} />
                <Route exact path="/:username/:time">
                  <Scheduler />
                </Route>
                <Route exact path="/onboarding">
                  <Onboarding />
                </Route>
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SchedulerProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
