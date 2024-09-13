import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/service2/httpservice.service';
interface accountHolder {
  customerName: string;
  customerAccountNumber: number | null | string;
  customerIFSCCode: string;
  customerAddress: string;
  customerMobileNumber: number | null;
  customerAadharNumber: number | null;
  Active: string;
  AccontBalance: number | null;
}
@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
})
export class HttpclientComponent {
  customerForm: FormGroup;

  customerData: accountHolder = {
    customerName: '',
    customerAccountNumber: null,
    customerIFSCCode: '',
    customerAddress: '',
    customerMobileNumber: null,
    customerAadharNumber: null,
    Active: '',
    AccontBalance: null,
  };
  selectedData: accountHolder | null = null;
  gethttp: any;
  shareData: any;
  constructor(
    private formBuilder: FormBuilder,
    private httpservice: HttpserviceService
  ) {
    this.customerForm = this.formBuilder.group({
      customername: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-z ]*$'),
        ],
      ],

      customeraddress: ['', [Validators.required, Validators.minLength(7)]],
      customermobilenumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      customeraccountblance: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(4),
        ],
      ],

      customeraadharcardnumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(12),
          Validators.maxLength(12),
        ],
      ],
    });

    this.httpservice.getData().subscribe(
      (data) => {},

      (err) => {}
    );
  }

  customername: any[] = [];
  customeradded(customerData: any) {
    if (this.customerForm.valid) {
      this.customerData.AccontBalance = customerData.customeraccountblance;

      this.customerData.customerName = customerData.customername;

      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      this.customerData.customerAccountNumber = `3969010000${randomDigits}`;

      this.customerData.customerIFSCCode = 'BDN1BOB123';
      this.customerData.Active = 'Activate';
      this.customerData.customerAddress = customerData.customeraddress;
      this.customerData.customerMobileNumber =
        customerData.customermobilenumber;
      this.customerData.customerAadharNumber =
        customerData.customeraadharcardnumber;

      this.customerForm.reset();
      this.httpservice.postData(this.customerData).subscribe(
        (res) => {
          console.log(res);
          setTimeout(() => {
            alert('SuccessFully Added..');
          }, 1000);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
