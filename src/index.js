import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { refs } from './js/refs.js';
import { fetchCountries } from './js/fetchCountries';
import MarkupList from './js/MarkupList.js';

const DEBOUNCE_DELAY = 300;

const markupList = new MarkupList();

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  markupList.deleteMarkup();

  let name = evt.target.value.trim();

  if (name === '') {
    deleteMarkup();
    return;
  }

  fetchCountries(name)
    .then(data => {
      checkAmountCountry(data);
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name.');
    });
}

function checkAmountCountry(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    markupList.deleteMarkup();
    return;
  }

  if (data.length === 1) {
    markupList.renderCountryInfo(data);
    return;
  } else {
    markupList.createMarkupList(data);
    return;
  }
}
