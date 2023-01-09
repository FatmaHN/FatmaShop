import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private CartService:CartService) { }

  ngOnInit(): void {
  }
  itemCount(){
    return this.CartService.itemsCount();
  }

}
