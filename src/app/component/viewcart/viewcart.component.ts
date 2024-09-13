import { Component, OnInit } from '@angular/core';
import { AddtocartService } from 'src/app/service/addtocart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css'],
})
export class ViewcartComponent {
  addtocartdata: any = [];
  constructor(public dataservice: AddtocartService) {
    this.addtocartdata.push(dataservice);
  }

  ngOnInit() {
    this.dataservice.cartData$.subscribe((data: any) => {
      this.addtocartdata = data;
    });
  }
}
