import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Material-UI & Style
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import './App.css';

// Context
import { AuthProvider } from './context/useAuthContext';
import { SettingsProvider } from './context/useSettingsContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { SchedulerProvider } from './context/useSchedulerContext';

// Components
import Login from './pages/Login/Login';
import Onboarding from './pages/Onboarding/Onboarding';
import Dashboard from './pages/Dashboard/Dashboard';
import Scheduler from './pages/Scheduler/Scheduler';
import Subscription from './pages/Subscription';
import ProtectedRoute from './components/ProtectedRoute';
import EventMaker from './components/EventMaker/EventMaker';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SettingsProvider>
              <SchedulerProvider>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route path="/subscription" component={Subscription} />
                  <Route exact path="/onboarding" component={Onboarding} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/new-event-type" component={EventMaker} />
                  <Route exact path="/:username/:time" component={Scheduler} />
                  <Route path="*">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              </SchedulerProvider>
            </SettingsProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
