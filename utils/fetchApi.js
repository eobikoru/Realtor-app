import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {

    headers: {
        'X-RapidAPI-Key': '8c13c6532bmsh33ea620b33094aap1b68b5jsnc23f1c68b9a3',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });
    
  return data;
}