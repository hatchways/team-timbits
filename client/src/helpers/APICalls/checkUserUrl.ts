import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const checkUserUrl = async (url: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/api/user/${url}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Error: Url is not found.' },
    }));
};

export default checkUserUrl;
