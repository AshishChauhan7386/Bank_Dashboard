import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  private apiUrl = 'http://localhost:3000/AccountHolderDetails';

  constructor(private http: HttpClient) {}
  currendata: any;
  postData(data: any): Observable<any> {
    this.currendata = data;
    return this.http.post(this.apiUrl, data);
  }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getcurrentdata(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deletecustomerdata(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  private dataSubject = new Subject<void>();

  data$ = this.dataSubject.asObservable();

  refreshData() {
    this.dataSubject.next();
  }
  updateCustomerData(customerData: any, id: string) {
    const url = `${this.apiUrl}/${id}`;

    return this.http.put(url, customerData);
  }
}
