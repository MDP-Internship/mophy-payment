export const request = (url, method, data = false) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const options = {
    headers,
    method,
  };

  if (data) {
    options.body = data;
  }

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .catch(() => "invalid");
};
