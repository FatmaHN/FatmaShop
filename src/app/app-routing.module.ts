import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { category } from './models/category.model';
/*import { BeautyComponent } from './products/beauty/beauty.component';
import { ChildrenclothesComponent } from './products/childrenclothes/childrenclothes.component';
import { WoamnclothesComponent } from './products/woamnclothes/woamnclothes.component';
import { ComputerhardwareComponent }from './products/computerhardware/computerhardware.component';
import { HomeapplianceComponent } from './products/homeappliance/homeappliance.component';
import { EducationComponent } from './products/education/education.component';
import { ManfashionComponent } from './products/manfashion/manfashion.component';
import { KitchenequipmentComponent } from './products/kitchenequipment/kitchenequipment.component';*/
import { ContactComponent } from './components/contact/contact.component';
import { ProductspageComponent } from './components/productspage/productspage.component';
import { CartComponent } from './components/cart/cart.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'category',component:CategoryComponent},
  {path:'contact',component:ContactComponent},
  {path:'product/:id',component:ProductspageComponent},
  /*{path:'mode femme',component:WoamnclothesComponent},
  {path:'beauty',component:BeautyComponent},
  {path:'childrenclothes',component:ChildrenclothesComponent},
  {path:'education',component:EducationComponent},
  {path:'kitchenequipment',component:KitchenequipmentComponent},
  {path:'manfashion',component:ManfashionComponent},
  {path:'computerhardware',component:ComputerhardwareComponent},
  {path:'Homeappliance',component:HomeapplianceComponent},*/
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
