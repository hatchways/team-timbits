import { AuthApiData } from "../../interface/AuthApiData";
import { FetchOptions } from "../../interface/FetchOptions";

const updateUserAvailability =  async (hours: string, days: string): Promise<AuthApiData> => {
    const fetchOptions: FetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };
    return await fetch(`/api/user/availability/${hours}/${days}`, fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
            error: { message: 'Error: Url is not found.' }
        }));
}

export default updateUserAvailability;