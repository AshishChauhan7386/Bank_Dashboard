import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AddtocartService} from 'src/app/service/addtocart.service';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent implements OnInit{
  addtocartdata: any = [];
  total:any;
 
constructor(public datarecive:AddtocartService){
  this.calculateTotalPrice()
 
}
ngOnInit() {
  this.datarecive.cartData$.subscribe((data: any) => {
    this.addtocartdata = data;
    
  });
  
  this.calculateTotalPrice()
  console.log(this.addtocartdata)

}
deleteitem(product:any){
  const index = this.addtocartdata.findIndex((item: any) => item === product);

  if (index !== -1) {
    this.addtocartdata.splice(index, 1);
    this.calculateTotalPrice();
  }
}

calculateTotalPrice() {
 
  this.total = this.addtocartdata.reduce((total:any, item:any) => total + item.price, 0);
}

}
