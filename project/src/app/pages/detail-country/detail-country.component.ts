import { Component, OnInit } from '@angular/core';
import { Country } from '../../country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  country:Country;
  // country2:Country;
  
  constructor(private route: ActivatedRoute, private router: Router , private countryService:CountryService,private _location: Location){
    this.country=new Country();
    // this.country2=new Country();
  }

  ngOnInit(): void {
    // this.getCountry();
    // console.log(this.route)
     console.log( window.history.state);
     const  { country } = window.history.state;
     this.country = country;
  }
  backClicked() {
    this._location.back();
  }
  // getCountry():void{
  //   // const country=this.route.snapshot.paramMap.get("country");
  //   console.log() 
  //   // this.countryService.getCountrybyId(country).subscribe((country)=>{
  //   //   console.log('country',country)
  //   //   this.country=country
  //   // })
  // }
}
