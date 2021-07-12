import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const updateUser = async (url: string, timezone: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/api/user/${url}/${timezone}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Error: Url is not found.' },
    }));
};

export default updateUser;