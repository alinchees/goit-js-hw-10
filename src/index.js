
import './css/styles.css';

import templatesCountry from './countries.hbs';
import Notiflix from 'notiflix';
import Debounce from 'lodash.debounce';
import templatesInfoCountry from './infoCountries.hbs';
import {fetchCountriesApi} from './fetchCountries';

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;
const fetchCouApi = new fetchCountriesApi();
const nameCountries = elem => {
    fetchCouApi.name = elem.target.value.trim();
    fetchCouApi.len = elem.target.value.length;
    fetchCouApi.fetchCountries()
    .then(data => { 
  
           if(data.length > 10 ){
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            return;
        } 
            listEl.innerHTML = templatesCountry(data);
            if (data.length === 1) {
                listEl.classList.add('is-hiden');
                countryInfo.classList.remove('is-hiden');
                countryInfo.innerHTML = templatesInfoCountry(data);
                return;
            }
            listEl.classList.remove('is-hiden');
            countryInfo.classList.add('is-hiden');
    })
    .catch(err =>{
         Notiflix.Notify.failure("Oops, there is no country with that name");
    }      
    );
}

inputEl.addEventListener('input', Debounce(nameCountries,DEBOUNCE_DELAY));