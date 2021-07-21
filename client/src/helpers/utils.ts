function handleFetchErrors(response: { ok: any; statusText: string | undefined; }) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export default handleFetchErrors;