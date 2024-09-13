import { Component, OnInit } from '@angular/core';
import { AddtocartService } from 'src/app/service/addtocart.service';

interface Product {
  productName: string;
  price: number;
}

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent implements OnInit {
  productdata: Product[] = [];
  productname: string = '';
  productprice: | null = null
  Item: boolean = false;

  addtocartproductdata: Product[] = [];

  constructor(private addtodata: AddtocartService) {
    this.additem('Shirt', 199);
    this.additem('Jeans', 549);

    if (this.productdata.length >= 0) {
      this.Item = true;
    }
  }
  additem(productName: string, price: number) {
    this.productdata.push({ productName: productName, price: price });
  }

  onSubmit() {
    
    if (this.productname === '' || this.productprice === null) {
      alert('Please Enter The Details');
    } else {
      this.productdata.push({
        productName: this.productname,
        price:parseInt(this.productprice),
      });
      alert("SuccessFully Added..")
      this.productname = '';
      this.productprice = null;
      
    }
  }
  ngOnInit(): void {
 
  }
  addtocart(data: any) {
    this.addtocartproductdata.push(data);
  
    this.addtodata.sharedata = this.addtocartproductdata;

    this.addtodata.addCart(data);
    alert("Your Item SuccessFully ..")
    console.log(this.addtocartproductdata)
  }
}
