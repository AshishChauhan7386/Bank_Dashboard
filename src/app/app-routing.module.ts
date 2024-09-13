import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './component/addtocart/addtocart.component';
import { ViewcartComponent } from './component/viewcart/viewcart.component';
import { BilldetailsComponent } from './component/billdetails/billdetails.component';
import { HttpclientComponent } from './component2/httpclient/httpclient.component';
import { ViewcustomerComponent } from './component2/viewcustomer/viewcustomer.component';
import { EditcustomerComponent } from './component2/editcustomer/editcustomer.component';
import { ActiveuserComponent } from './component2/activeuser/activeuser.component';
import { DeactiveuserComponent } from './component2/deactiveuser/deactiveuser.component';
import { AddblanceComponent } from './component2/addblance/addblance.component';
import { RemovebalanceComponent } from './component2/removebalance/removebalance.component';
import { EditamountComponent } from './component2/editamount/editamount.component';
import { AddbanaceroutingComponent } from './component2/addbanacerouting/addbanacerouting.component';
import { CutbanaceroutiComponent } from './component2/cutbanacerouti/cutbanacerouti.component';
import { DashboardComponent } from './component2/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path:"",
  //   component:AddtocartComponent
  // },
  // {
  //   path:"cartdetails",
  //   component:ViewcartComponent
  // },
  // {
  //   path:"viewbilldetails",
  //   component:BilldetailsComponent
  // }
  {
path:"",
component:DashboardComponent
  },
  {
    path: 'adduser',
    component: HttpclientComponent,
  },
  {
    path: 'viewcustomer',
    component: ViewcustomerComponent,
  },
  {
    path: 'editcustomer/:id',
    component: EditcustomerComponent,
  },
  {
    path: 'activeuser',
    component: ActiveuserComponent,
  },
  {
    path: 'deactiveuser',
    component: DeactiveuserComponent,
  },
  {
    path: 'addbalance',
    component: AddblanceComponent,
  },
  {
    path: 'removebalance',
    component: EditamountComponent,
  },
  {
    path: 'balanceadd/:id',
    component: AddbanaceroutingComponent,
  },
  {
    path: 'balancecut/:id',
    component: CutbanaceroutiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
