import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Material-UI & Style
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import './App.css';

// Context
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

// Components
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Scheduler from './pages/Scheduler/Scheduler';
import GoogleConnect from './components/GoogleConnect/GoogleConnect';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/google" component={GoogleConnect} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/:username/:time">
                  <Scheduler />
                </Route>
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
