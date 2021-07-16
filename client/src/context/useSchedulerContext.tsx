import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';

import moment from 'moment-timezone';

// schedule is meant to store availability from the google calendar api
// availableDays is meant to store the days and hours available as set by the user from the onboard page

interface ISchedulerContext {
  selectedDay: Date | undefined;
  updateSelectedDayContext: (day: Date | undefined) => void;
  timezone: string | undefined;
  updateTimezoneContext: (tz: string) => void;
  schedule: Array<Date> | undefined;
  updateScheduleContext: (calendar: Array<Date> | undefined) => void;
  availability: Record<string, Array<string>>;
  updateAvailabilityContext: (hours: Record<string, Array<string>>) => void;
  modal: boolean;
  updateModalContext: (open: boolean) => void;
  meeting: string;
  updateMeetingContext: (time: string) => void;
}

export const SchedulerContext = createContext<ISchedulerContext>({
  selectedDay: undefined,
  updateSelectedDayContext: () => null,
  timezone: undefined,
  updateTimezoneContext: () => null,
  schedule: [],
  updateScheduleContext: () => null,
  availability: {
    Sunday: [],
    Saturday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  },
  updateAvailabilityContext: () => null,
  modal: false,
  updateModalContext: () => null,
  meeting: '',
  updateMeetingContext: () => null,
});

export const SchedulerProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [timezone, setTimezone] = useState<string | undefined>('');
  const [schedule, setSchedule] = useState<Array<Date> | undefined>([]);
  const [availability, setAvailability] = useState<Record<string, Array<string>>>({
    Sunday: [],
    Saturday: [],
    Monday: ['placeholder', 'placeholder'],
    Tuesday: ['placeholder', 'placeholder'],
    Wednesday: ['placeholder', 'placeholder'],
    Thursday: ['placeholder', 'placeholder'],
    Friday: ['placeholder', 'placeholder'],
  });
  const [modal, setModal] = useState<boolean>(false);
  const [meeting, setMeeting] = useState<string>('');

  const updateSelectedDayContext = useCallback((day: Date | undefined) => {
    setSelectedDay(day);
  }, []);

  const updateTimezoneContext = useCallback((tz: string | undefined) => {
    tz ? setTimezone(tz) : setTimezone(moment.tz.guess());
  }, []);

  // Update this to fetch information from the google api
  const updateScheduleContext = useCallback((calendar: Array<Date> | undefined) => {
    setSchedule(calendar);
  }, []);

  const updateAvailabilityContext = useCallback((hours: Record<string, Array<string>>) => {
    setAvailability(hours);
  }, []);

  const updateModalContext = useCallback((open: boolean) => {
    setModal(open);
  }, []);

  const updateMeetingContext = useCallback((time: string) => {
    setMeeting(time);
  }, []);

  useEffect(() => {
    updateTimezoneContext(undefined);
  }, [updateTimezoneContext]);

  return (
    <SchedulerContext.Provider
      value={{
        selectedDay,
        updateSelectedDayContext,
        timezone,
        updateTimezoneContext,
        schedule,
        updateScheduleContext,
        availability,
        updateAvailabilityContext,
        modal,
        updateModalContext,
        meeting,
        updateMeetingContext,
      }}
    >
      {children}
    </SchedulerContext.Provider>
  );
};

export function useScheduler(): ISchedulerContext {
  return useContext(SchedulerContext);
}
