import { Component, OnInit } from '@angular/core';
import { Detailwoamnclothes } from "src/app/services/woamn/detailwoamnclothes";
@Component({
  selector: 'app-woamnclothes',
  templateUrl: './woamnclothes.component.html',
  styleUrls: ['./woamnclothes.component.scss']
})
export class WoamnclothesComponent implements OnInit {

  constructor(private services:Detailwoamnclothes) { }
woamncloData:any;
  ngOnInit(): void {
    this.woamncloData=this.services.WomanDetails;
  }

}
