import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { HomeCountryComponent } from './pages/home-country/home-country.component';
import { ListCountryComponent } from './pages/list-country/list-country.component';
import {FormsModule} from '@angular/forms';
import {RouterLink,Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

const routes:Routes=[
  { path:"", redirectTo:"/home", pathMatch:"full"},
  { path:"country", component:ListCountryComponent},
  { path:"home", component:HomeCountryComponent},
  { path:"detail/:id", component:DetailCountryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetailCountryComponent,
    HomeCountryComponent,
    ListCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
