import { Event, EventApiData } from '../../interface/Event';
import { FetchOptions } from '../../interface/FetchOptions';

const createEvent = async ({ name, description, url, duration }: Event): Promise<EventApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, duration, url }),
    credentials: 'include',
  };
  return await fetch(`/meeting/create`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createEvent;
