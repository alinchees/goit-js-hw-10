const urlApi = 'https://restcountries.com/v3.1/name/';
export class fetchCountriesApi {
    name = null;
    len = 0;
    fetchCountries(){
        if (!this.len) {
            return fetch(`${urlApi}${this.name}`).then(response =>{ 
                return '';
        })
    }
        else{
             return fetch(`${urlApi}${this.name}`).then(response =>{ 
                if (!response.ok) {
                throw new Error(response.status);
            }
                return response.json();
            
        })
        }
       
    }
}