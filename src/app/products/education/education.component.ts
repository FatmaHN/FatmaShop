import { Component, OnInit } from '@angular/core';
import { Detailseducation } from 'src/app/services/education/detailseducation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private services:Detailseducation) { }
  educationData:any;
  ngOnInit(): void {
    this.educationData=this.services.educationDetails;
  }

}
