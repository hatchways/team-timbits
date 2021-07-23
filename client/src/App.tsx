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
//import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Scheduler from './pages/Scheduler/Scheduler';

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
                  <Route exact path="/onboarding" component={Onboarding} />
                  <Route exact path="/dashboard" component={Dashboard} />
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
