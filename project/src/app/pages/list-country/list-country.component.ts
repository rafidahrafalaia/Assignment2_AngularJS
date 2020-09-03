import { Component, OnInit } from '@angular/core';
import{Country} from '../../country';
import{CountryService} from '../../country.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { ListCountryComponent } from './pages/list-country/list-country.component';
@Component({
  selector: 'app-root',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent {
  country:Country[];
 
  constructor(private countryService:CountryService, private route: Router){

  }
  ngOnInit(){
    // this.nama="1";
    this.getCountrys()
  }


  getCountrys():void{
    this.countryService.getCountry().subscribe((country)=>{
      console.log('country',country)
      this.country=country
    });
  } 



//   deleteAppartement(id):void{
//     // const id=this.route.snapshot.paramMap.get("id"); 
//     this.appartementsService.deleteAppartementbyId(id).subscribe((appartements)=>{ 
//       this.appartementsService.getAppartements().subscribe((appartements)=>{
//       console.log('appartements',appartements)
//       this.appartements=appartements 
//       });
//       // console.log('appartements',appartements)
//       // this.appartements=appartements
//     });
//   }
  
//   addAppartement():void{
//     console.log("newAppartement",this.name,this.description)
//     this.appartementsService.addAppartement({name:this.name, description:this.description}).subscribe((appartements)=>{ 
//       this.appartementsService.getAppartements().subscribe((appartements)=>{
//       console.log('appartements',appartements)
//       this.appartements=appartements 
//       });
//     });
// }
}