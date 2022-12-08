import { Component, OnInit } from '@angular/core';
import { DetailBeauty } from 'src/app/services/beauty/detail-beauty';


@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit {

  constructor(private services:DetailBeauty) { }
beautyData:any;
  ngOnInit(): void {
    this.beautyData=this.services.BeautyDetails;
  }

}
