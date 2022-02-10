const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const fetchApiExchanges = async () => {
  const fetchApi = await fetch(ENDPOINT);
  const response = await fetchApi.json();
  return response;
};

export default fetchApiExchanges;
