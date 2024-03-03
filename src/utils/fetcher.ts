export const fetcher = async (
  url: string,
  payload?: {
    title?: string;
    description?: string;
    complete: boolean;
  }
) => {
  const options = {
    method: payload ? 'POST' : 'GET',
    ...(payload && { body: JSON.stringify(payload) }),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, options).then((res) => res.json());
};
