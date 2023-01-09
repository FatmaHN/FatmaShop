import { Injectable } from '@angular/core';
import { ProductspageComponent } from '../components/productspage/productspage.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ProductspageComponent[]=[];

  addTocart (product: ProductspageComponent) {
    this. items. push(product);
    
    }
    
    getItems() {
    return this. items;
    
    }

    itemsCount(){
      return this.items.length;
    }
    
    clearcart() {
    this.items = [];
    return this. items;
    
    }

  constructor() { }
}
