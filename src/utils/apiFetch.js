import { API_BASE_URL, HEADERS } from 'constants/apiConf';

/**
 * @name transformGetParams
 * Transforms an object param into a key/value string
 *
 * @param {object} params
 *
 * @return {String}
 */
function transformGetParams(params) {
  let paramsString = '?';

  Object
    .keys(params)
    .map((param, index) => {
      paramsString += (index > 0) ? '&' : '';
      paramsString += `${param}=${params[param]}`;

      return param;
    });

  return paramsString;
}

/**
 * @name apiFetch
 * Sends a request with the required headers to API
 *
 * @param {string} method           HTTP Method (GET, POST, PUT, PATCH, etc)
 * @param {object} url              Object with an endPoint attribute (required)
 * @param {(string|object)} params  Request params. If it's an object, it will be stringified before doing the request.
 *
 * @return {string|object}          Returns the body of the request, trying to parse it as JSON first. If an error ocurrs during parsing, the raw body is returned as a string.
 */
export default async function apiFetch(method, url, params) {
  const CONFIG = {
    method,
    headers: new Headers({ ...HEADERS }),
    credentials: 'include',
  };

  let URL = `${API_BASE_URL}/${url.endPoint}`;

  if (params) {
    if (typeof params === 'object') {
      switch (method) {
        case 'GET':
        case 'DELETE':
          URL += transformGetParams(params);
          break;

        case 'POST':
        case 'PUT':
        default:
          CONFIG.body = JSON.stringify(params);
          break;
      }
    }
  }

  const response = await (await fetch(URL, CONFIG)).text();

  try {
    return JSON.parse(response);
  } catch (error) {
    return response;
  }
}
