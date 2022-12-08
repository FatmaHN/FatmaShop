import { Component, OnInit } from '@angular/core';
import { Detailskitchenequipment } from 'src/app/services/kitchenequipment/detailskitchenequipment';

@Component({
  selector: 'app-kitchenequipment',
  templateUrl: './kitchenequipment.component.html',
  styleUrls: ['./kitchenequipment.component.scss']
})
export class KitchenequipmentComponent implements OnInit {

  constructor(private services:Detailskitchenequipment) { }
  kitchenData:any;
  ngOnInit(): void {
    this.kitchenData=this.services.KitchenDetails;
  }

}
