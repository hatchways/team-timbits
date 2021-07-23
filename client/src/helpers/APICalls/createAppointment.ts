import { FetchOptions } from '../../interface/FetchOptions';

const createAppointment = async ({ name, email, time, url }: any): Promise<any> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, time, url }),
    credentials: 'include',
  };
  return await fetch(`/appointment/`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createAppointment;
