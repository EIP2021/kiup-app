import qs from 'querystringify';

import isObjectEmpty from './isObjectEmpty';

function RequestException(status, message) {
  this.status = status;
  this.message = message;
}

const fetcher = async ({
  url,
  method,
  token,
  payload = {},
  parameters = {},
}) => {
  const isPayload = !isObjectEmpty(payload);
  const isParams = !isObjectEmpty(parameters);
  const uri = isParams ? url + qs.stringify(parameters, true) : url;
  const response = await fetch(uri, {
    headers: {
      Accept: 'application/json',
      ...(isPayload && { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    method,
    ...(isPayload && { body: JSON.stringify(payload) }),
  });
  const json = await response.json();
  if (response.status < 200 || response.status >= 300) {
    throw new RequestException(
      response.status,
      Object.prototype.hasOwnProperty.call(json, 'message')
        ? json.message
        : response.statusText
    );
  }
  return json;
};

export default fetcher;
