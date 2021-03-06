import axios from "axios";
console.log(process.env);

const proxy = process.env.NODE_ENV === 'development' 
? 'https://cors-anywhere.herokuapp.com/' 
: '';

const api = axios.create({
  baseURL: `${proxy}https://swapi.dev/api`,
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
