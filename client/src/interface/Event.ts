export interface Event {
  eventName: string;
  eventDescription: string;
  eventUrl: string;
  eventDuration: string;
}

export interface EventApiDataSuccess {
  eventId: string;
}

export interface EventApiData {
  error?: { message: string };
  success?: EventApiDataSuccess;
}
