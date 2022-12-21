import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService
  ) {}

  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if (this.getMenuId) {
      this.menuData = this.service.foodDetails.filter((item) => {
        return item.id == this.getMenuId;
      });
    }
  }
}
