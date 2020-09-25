import axios from "axios";
const ENDPOINT = `https://jsonplaceholder.typicode.com/`;

export const fetchProducts = async () => {
  const data = (await axios.get(`${ENDPOINT}photos`)).data;
  return data;
};
