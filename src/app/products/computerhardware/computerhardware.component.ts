import { Component, OnInit } from '@angular/core';
import { Detailscomputer } from 'src/app/services/computerhardware/detailscomputer';
@Component({
  selector: 'app-computerhardware',
  templateUrl: './computerhardware.component.html',
  styleUrls: ['./computerhardware.component.scss']
})
export class ComputerhardwareComponent implements OnInit {

  constructor(private services:Detailscomputer) { }
  ComputerData:any;
  ngOnInit(): void {
    this.ComputerData=this.services.ComputerDetails;
  }

}
