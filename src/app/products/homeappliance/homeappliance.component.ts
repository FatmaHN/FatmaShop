import { Component, OnInit } from '@angular/core';
import { Detailshomeappliance } from 'src/app/services/homeappliance/detailshomeappliance';

@Component({
  selector: 'app-homeappliance',
  templateUrl: './homeappliance.component.html',
  styleUrls: ['./homeappliance.component.scss']
})
export class HomeapplianceComponent implements OnInit {

  constructor(private services:Detailshomeappliance) { }
  homeData:any;
  ngOnInit(): void {
    this.homeData=this.services.homeDetails;
  }

}
