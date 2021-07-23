import { FetchOptions } from '../../interface/FetchOptions';

const getScheduledAppointments = async (userId: string): Promise<any> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/appointment/${userId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getScheduledAppointments;
