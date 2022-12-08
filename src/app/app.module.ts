import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ChildrenclothesComponent } from './products/childrenclothes/childrenclothes.component';
import { WoamnclothesComponent } from './products/woamnclothes/woamnclothes.component';
import { BeautyComponent } from './products/beauty/beauty.component';
import { KitchenequipmentComponent } from './products/kitchenequipment/kitchenequipment.component';
import{ComputerhardwareComponent}from './products/computerhardware/computerhardware.component';
import { HomeapplianceComponent } from './products/homeappliance/homeappliance.component';
import { EducationComponent } from './products/education/education.component';
import { ManfashionComponent } from './products/manfashion/manfashion.component';
import { ProductBuyComponent } from './product-buy/product-buy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    CategoryComponent,
    HomeComponent,
    ChildrenclothesComponent,
    WoamnclothesComponent,
    BeautyComponent,
    KitchenequipmentComponent,
    ManfashionComponent,
    EducationComponent,
    HomeapplianceComponent,
    ComputerhardwareComponent,
    ProductBuyComponent
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
