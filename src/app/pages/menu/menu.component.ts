import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private service: OrderDetailsService) {}
  foodMenu: any;
  ngOnInit(): void {
    this.foodMenu = this.service.foodDetails;
  }
}
