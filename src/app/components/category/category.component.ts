import { Component, OnInit,Input } from '@angular/core';
import { DetailCategory } from "src/app/services/detail-category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private services:DetailCategory){ }
  ProductData:any;
  
  ngOnInit(): void {
    this.ProductData=this.services.ProductDetail;
  }

}
