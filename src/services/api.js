import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.co/api",
});

export const api_key = "AIzaSyDCYW8Eisi_A9wLlf1NlOABfKowuLNw5Q4";

export const apiCustomSearch = axios.create({
  baseURL: `https://www.googleapis.com/customsearch/v1`,
});

export const getPersonImage = async (query) => {
  return axios.get(`https://www.googleapis.com/customsearch/v1
	?searchType=image
	&q=${query}
	&key=AIzaSyDCYW8Eisi_A9wLlf1NlOABfKowuLNw5Q4
	&cx=014613627884587479518%3Alj9bueunjtj`);
};

export default api;
