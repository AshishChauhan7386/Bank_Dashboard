import { Component, OnInit } from '@angular/core';
import { AddtocartService } from 'src/app/service/addtocart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addtocartdata: any = [];


constructor(public cartdata:AddtocartService){
this.addtocartdata.push(cartdata)

}
ngOnInit(): void {
  this.cartdata.cartData$.subscribe((data: any) => {
    this.addtocartdata = data;
   
  });
  
}

get indexarray(): number {
  return this.addtocartdata.length;
}


}
