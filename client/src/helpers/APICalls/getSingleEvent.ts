import { FetchOptions } from '../../interface/FetchOptions';

const getSingleEvent = async (url: string): Promise<any> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
    credentials: 'include',
  };
  return await fetch(`/meeting/single-event`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getSingleEvent;
