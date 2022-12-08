import { Component, OnInit } from '@angular/core';
import { Detailsmanfashion } from 'src/app/services/manfashion/detailsmanfashion';
@Component({
  selector: 'app-manfashion',
  templateUrl: './manfashion.component.html',
  styleUrls: ['./manfashion.component.scss']
})
export class ManfashionComponent implements OnInit {

  constructor(private services:Detailsmanfashion) { }
  manData:any;
  ngOnInit(): void {
    this.manData=this.services.ManDetails;
  }

}
