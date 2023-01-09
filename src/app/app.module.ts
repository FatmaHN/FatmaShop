import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
//import { ChildrenclothesComponent } from './products/childrenclothes/childrenclothes.component';
//import { WoamnclothesComponent } from './products/woamnclothes/woamnclothes.component';
//import { BeautyComponent } from './products/beauty/beauty.component';
//import { KitchenequipmentComponent } from './products/kitchenequipment/kitchenequipment.component';
//import{ComputerhardwareComponent}from './products/computerhardware/computerhardware.component';
//import { HomeapplianceComponent } from './products/homeappliance/homeappliance.component';
//import { EducationComponent } from './products/education/education.component';
//import { ManfashionComponent } from './products/manfashion/manfashion.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductspageComponent } from './components/productspage/productspage.component';
//import { FormeComponent } from './components/forme/forme.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    CategoryComponent,
    HomeComponent,
    //ChildrenclothesComponent,
    //WoamnclothesComponent,
    //BeautyComponent,
    //KitchenequipmentComponent,
    //ManfashionComponent,
    //EducationComponent,
    //HomeapplianceComponent,
    //ComputerhardwareComponent,
    ContactComponent,
    CartComponent,
    ProductspageComponent,
    //FormeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
