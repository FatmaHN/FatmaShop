import { Component, OnInit } from '@angular/core';
import { DetailCategory } from "src/app/services/detail-category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private services:DetailCategory){}
    categorieData!:any 

  ngOnInit(): void {
    
    this.categorieData=this.services.categorieDetails;
    //this.categorieData=this.services.categorieDetails;
    
  }

}
