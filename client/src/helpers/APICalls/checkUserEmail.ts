import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const checkUserEmail = async (email: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/auth/email/${email}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Error: CheckUserEmail - Unable to connect to server. Please try again. ' },
    }));
};

export default checkUserEmail;
