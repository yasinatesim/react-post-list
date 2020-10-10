import axios from 'axios';

/**
 * This function is makes a request and returns the data
 * @param {String} url - Request URL
 */
export default async function getData(url) {
  const { data } = await axios.get(url);

  let arr = [];
  if (Array.isArray(data)) {
    arr = [...data];
    return arr;
  }

  return data;
}
