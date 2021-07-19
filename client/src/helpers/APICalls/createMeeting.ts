import { AuthApiData } from '../../interface/AuthApiData';
import { Event, EventApiData } from '../../interface/Event';
import { FetchOptions } from '../../interface/FetchOptions';

const createEvent = async ({ eventName, eventDescription, eventUrl, eventDuration }: Event): Promise<EventApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: eventName, description: eventDescription, duration: eventDuration, url: eventUrl }),
    credentials: 'include',
  };
  return await fetch(`/meeting/create`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createEvent;
