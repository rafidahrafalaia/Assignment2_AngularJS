import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './country';

@Injectable({
    providedIn:'root'
})
export class CountryService{
    private BASE_URL='https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/country';
    constructor(private http: HttpClient){

    }
    getCountry(){
        return this.http.get<Country[]>(`${this.BASE_URL}`)
    }

    getCountrybyId(id){
        return this.http.get<Country>(`${this.BASE_URL}/${id}`)
    }
    deleteCountrybyId(id){
        return this.http.delete<Country>(`${this.BASE_URL}/${id}`)
    }
    addCountry(country){
        return this.http.post<Country[]>(`${this.BASE_URL}`, country)
    }
}