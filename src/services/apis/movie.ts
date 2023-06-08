import { restTransport } from '../../utils/api'

/**
 * This function exports an asynchronous function that retrieves a list of data using a REST transport.
 * @param {any} params - The `params` parameter is an object that contains any query parameters that
 * need to be included in the GET request. These parameters are typically used to filter or sort the
 * data that is returned by the API.
 * @returns The `list` function is returning the result of an asynchronous HTTP GET request made using
 * the `restTransport()` function with the provided `params` object as query parameters. The returned
 * value is a Promise that will resolve to the response data from the server.
 */
export const list = async (params: any) => {
  return await restTransport().get('', params)
}
