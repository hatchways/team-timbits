export interface Event {
  name: string;
  description: string;
  url: string;
  duration: string;
}

export interface EventApiDataSuccess {
  eventId: string;
}

export interface EventApiData {
  error?: { message: string };
  success?: EventApiDataSuccess;
}
