import { refs } from './refs.js';

export default class MarkupList {
  constructor() {
    this.markup = '';
  }

  createMarkupList(data) {
    for (let i = 0; i < data.length; i++) {
      this.markup += `<li class="list_item">
            <img width="25px" height="25px" src="${data[i].flags.svg}">
            <p class="textCountry" >${data[i].name.common}</p>
          </li>`;
    }
    this.renderList();
  }

  clearMarkup() {
    this.markup = '';
  }

  deleteMarkup() {
    refs.countryList.innerHTML = '';
  }

  renderCountryInfo(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const lang = `${[data[i].languages].map(item => {
        return Object.values(item).join(', ');
      })}`;

      this.markup += `<li class="card_item">
        <div class="name-icon">
            <img class="icon" width="30px" height="30px" src="${data[i].flags.svg}">
              <p class="cardName" >${data[i].name.common}</p>
              </div>
            <p class="cardText" ><b>Capital</b>: ${data[i].capital}</p>
             <p class="cardText" ><b>Population</b>: ${data[i].population}</p>
              <p class="cardText" ><b>Languages</b>: ${lang}</p>
          </li>`;
    }

    this.renderList();
  }

  renderList() {
    refs.countryList.innerHTML = this.markup;
    this.clearMarkup();
  }
}
