import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtocartComponent } from './component/addtocart/addtocart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewcartComponent } from './component/viewcart/viewcart.component';
import { HeaderComponent } from './component/header/header.component';
import { BilldetailsComponent } from './component/billdetails/billdetails.component';
import { HttpclientComponent } from './component2/httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { Header2Component } from './component2/header2/header2.component';
import { ViewcustomerComponent } from './component2/viewcustomer/viewcustomer.component';
import { EditcustomerComponent } from './component2/editcustomer/editcustomer.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActiveuserComponent } from './component2/activeuser/activeuser.component';
import { DeactiveuserComponent } from './component2/deactiveuser/deactiveuser.component';
import { AddblanceComponent } from './component2/addblance/addblance.component';
import { EditamountComponent } from './component2/editamount/editamount.component';
import { RemovebalanceComponent } from './component2/removebalance/removebalance.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddbanaceroutingComponent } from './component2/addbanacerouting/addbanacerouting.component';
import { CutbanaceroutiComponent } from './component2/cutbanacerouti/cutbanacerouti.component';
import { DashboardComponent } from './component2/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtocartComponent,
    ViewcartComponent,
    HeaderComponent,
    BilldetailsComponent,
    HttpclientComponent,
    Header2Component,
    ViewcustomerComponent,
    EditcustomerComponent,
    ActiveuserComponent,
    DeactiveuserComponent,
    AddblanceComponent,
    EditamountComponent,
    RemovebalanceComponent,
    AddbanaceroutingComponent,
    CutbanaceroutiComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
