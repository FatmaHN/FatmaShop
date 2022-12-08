import { Component, OnInit } from '@angular/core';
import { DetailChildrens } from "src/app/services/childrens/detail-childrens";
@Component({
  selector: 'app-childrenclothes',
  templateUrl: './childrenclothes.component.html',
  styleUrls: ['./childrenclothes.component.scss']
})
export class ChildrenclothesComponent implements OnInit {

  constructor(private services:DetailChildrens) { }
  childrensData:any;
  ngOnInit(): void {
    this.childrensData=this.services.childrenDetails;
  }

}
