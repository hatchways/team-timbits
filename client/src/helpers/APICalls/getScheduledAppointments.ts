import { FetchOptions } from '../../interface/FetchOptions';

const getScheduledAppointments = async (mongoId: any): Promise<any> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/appointment/${mongoId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getScheduledAppointments;
