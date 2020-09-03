import { Component, OnInit } from '@angular/core';
import{Country} from '../../country';
import{CountryService} from '../../country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-country',
  templateUrl: './home-country.component.html',
  styleUrls: ['./home-country.component.css']
})
export class HomeCountryComponent implements OnInit {

  countrySortPopulation:Country[];
  countrySortArea:Country[];
  constructor(private countryService:CountryService, private route: Router){

  }
  ngOnInit(){
    // this.nama="1";
    this.getCountrys()
  }

  
  getCountrys():void{
    this.countryService.getCountry().subscribe((country)=>{
      console.log('country',country)
      this.countrySortPopulation=country.sort((a,b) => b.population - a.population).slice(0,3);
      this.countrySortArea=country.sort((a,b) => b.area - a.area).slice(0,3);
      // this.country=country
    });
  } 


}
