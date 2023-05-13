const URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
  const params = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });
  return fetch(`${URL}${name}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchCountries };
