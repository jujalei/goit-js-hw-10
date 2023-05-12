export const URL = 'https://restcountries.com/v3.1/name/';
export const fieldFilter = '?fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${URL}${name}${fieldFilter}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
