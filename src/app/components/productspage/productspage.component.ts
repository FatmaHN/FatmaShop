import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DetailCategory} from'src/app/services/detail-category';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.scss']
})
export class ProductspageComponent implements OnInit {
  a=0;
  OnAdd(){this.a++;}
  OnSupp(){this.a--;}
  
  constructor(private param:ActivatedRoute, private service:DetailCategory ,private cartService:CartService ,) { }
  getProductId:any;
  productData:any;
  ngOnInit(): void {
    this.getProductId = this.param.snapshot.paramMap.get('id');
    console.log(this.getProductId,'getproduct');
    if(this.getProductId)
    {
       this.productData= this.service.ProductDetail.filter((value)=>{
       return value.id_col==this.getProductId;
      });
      console.log(this.productData,'menuData>>');
    }
  }
  addToCart(menuData: any){
    console.log(this.productData)
    this.cartService.addTocart(menuData);
    window.alert('Votre produit a été ajouté au panier !');
  }

}
