import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalaccount: any;
  totalActiveAccounts: any;
  totaldeactivateaccount: any;
  totalBalance: any;
  totalactiveaccountbalance: any;
  totaldeactiveaccountbalance: any;
  data: any[];

  constructor(private http: HttpClient) {
    this.data = [];
  }

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:3000/AccountHolderDetails')
      .subscribe((data) => {
        this.data = data;
        this.totalaccount = data.length;
        

        this.totalActiveAccounts = this.data.filter((item) => {
          return item.Active === 'Activate';
        }).length;
        this.totaldeactivateaccount = this.data.filter((item) => {
          return item.Active !== 'Activate';
        }).length;

        this.totalBalance = this.data.reduce(
          (total, item) => total + parseFloat(item.AccontBalance),
          0
        );

        this.totalactiveaccountbalance = this.data
          .filter((item) => item.Active === 'Activate')
          .reduce((total, item) => total + parseFloat(item.AccontBalance), 0);

        this.totaldeactiveaccountbalance = this.data
          .filter((item) => item.Active !== 'Activate')
          .reduce((total, item) => total + parseFloat(item.AccontBalance), 0);
      });
  }
}
