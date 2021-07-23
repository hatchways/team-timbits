import { useState, useContext, createContext, FunctionComponent, useCallback, useEffect } from 'react';
import Profile from '../components/Onboarding/Profile/Profile';
import axios from 'axios';

import { useAuth } from './useAuthContext';

interface ISettingsContext {
  userTimezone?: string;
  updateUserTimezoneContext: (tz?: string) => void;
  url?: string;
  updateUrlContext: (url?: string) => void;
  unavailable?: Array<string>;
  updateUnavailableContext: (weekdays: Array<string>) => void;
  hours?: Array<string>;
  updateHoursContext: (hours: Array<string>) => void;
  view?: JSX.Element;
  updateViewContext: (view: JSX.Element) => void;
  progress?: number;
  updateProgressContext: (progress: number) => void;
  headerText?: string;
  updateHeaderTextContext: (text: string) => void;
  setDefault: (tz: string | undefined, url: string) => void;
  updateDatabase: () => void;
  settings: boolean;
  updateSettings: (bool: boolean) => void;
  updateSettingsContext: (weekdays: Array<string>, hours: Array<string>, url?: string, timezone?: string) => void;
}

export const SettingsContext = createContext<ISettingsContext>({
  userTimezone: undefined,
  updateUserTimezoneContext: () => null,
  url: undefined,
  updateUrlContext: () => null,
  unavailable: [],
  updateUnavailableContext: () => null,
  hours: [],
  updateHoursContext: () => null,
  view: <Profile />,
  updateViewContext: () => null,
  progress: 25,
  updateProgressContext: () => null,
  headerText: 'Welcome to CalendApp!',
  updateHeaderTextContext: () => null,
  setDefault: () => null,
  updateDatabase: () => null,
  settings: false,
  updateSettings: () => null,
  updateSettingsContext: () => null,
});

export const SettingsProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [userTimezone, setUserTimezone] = useState<string | undefined>('');
  const [url, setUrl] = useState<string | undefined>('');
  const [unavailable, setUnavailable] = useState<Array<string>>([]);
  const [hours, setHours] = useState<Array<string>>([]);
  const [view, setView] = useState<JSX.Element>(<Profile />);
  const [progress, setProgress] = useState<number>(25);
  const [headerText, setHeaderText] = useState<string>('Welcome to CalendApp!');
  const [settings, setSettings] = useState<boolean>(false);

  const updateUserTimezoneContext = (tz?: string) => setUserTimezone(tz);
  const updateUrlContext = (url?: string) => setUrl(url);
  const updateUnavailableContext = (weekdays: Array<string>) => setUnavailable(weekdays);
  const updateHoursContext = (hours: Array<string>) => setHours(hours);
  const updateViewContext = (view: JSX.Element) => setView(view);
  const updateProgressContext = (progress: number) => setProgress(progress);
  const updateHeaderTextContext = (text: string) => setHeaderText(text);
  const updateSettings = (bool: boolean) => setSettings(bool);

  const { loggedInUser } = useAuth();

  const setDefault = (tz?: string, url?: string) => {
    setUserTimezone(tz);
    setUrl(url);
    setUnavailable([]);
    setHours([]);
    setSettings(true);
  };

  const updateDatabase = () => {
    setSettings(false);
    axios.post(
      '/profile/save',
      { id: loggedInUser?.mongoId, url, timezone: userTimezone, hours, unavailable },
      { withCredentials: true },
    );
  };

  const updateSettingsContext = useCallback(
    (weekdays: Array<string>, hours: Array<string>, url?: string, timezone?: string) => {
      setUrl(url);
      setUnavailable(weekdays);
      setHours(hours);
      setUserTimezone(timezone);
    },
    [],
  );

  useEffect(() => {
    axios
      .get('/profile', { params: { id: loggedInUser?.mongoId }, withCredentials: true })
      .then((res) => updateSettingsContext(res.data[0].days, res.data[0].hours, res.data[0].url, res.data[0].timezone));
  }, [updateSettingsContext, loggedInUser]);

  return (
    <SettingsContext.Provider
      value={{
        userTimezone,
        updateUserTimezoneContext,
        url,
        updateUrlContext,
        unavailable,
        updateUnavailableContext,
        hours,
        updateHoursContext,
        view,
        updateViewContext,
        progress,
        updateProgressContext,
        headerText,
        updateHeaderTextContext,
        setDefault,
        updateDatabase,
        settings,
        updateSettings,
        updateSettingsContext,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettings(): ISettingsContext {
  return useContext(SettingsContext);
}
