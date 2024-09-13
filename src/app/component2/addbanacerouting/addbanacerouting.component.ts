import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/service2/httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

interface accountHolder {
  customerName: string;
  customerIFSCCode: string;
  customerAddress: string;
  customerMobileNumber: number | null;
  customerAadharNumber: number | null;
  Active: string;
  customerAccountNumber: number | null;
  AccontBalance: number | null;
}
@Component({
  selector: 'app-addbanacerouting',
  templateUrl: './addbanacerouting.component.html',
  styleUrls: ['./addbanacerouting.component.css'],
})
export class AddbanaceroutingComponent implements OnInit {
  oldbal: any;
  customerForm: FormGroup;
  customerData: accountHolder = {
    customerName: '',
    customerIFSCCode: 'ABCBDN1234',
    customerAddress: '',
    customerMobileNumber: null,
    customerAadharNumber: null,
    Active: '123',
    AccontBalance: null,
    customerAccountNumber: null,
  };

  constructor(
    private formBuilder: FormBuilder,
    private httpservice: HttpserviceService,
    private router: ActivatedRoute,
    private routes: Router
  ) {
    this.customerForm = this.formBuilder.group({
      customerAccountNumber: ['', [Validators.required]],
      AccontBalance: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],

      AccontBalance2: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
    });
  }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    if (id) {
      this.httpservice.getcurrentdata(id).subscribe((result: any) => {
        this.customerData = result;
        this.customerForm.patchValue(this.customerData);
      });
    } else {
      console.error('Error');
    }
  }

  customeradded(customerData: any) {
    if (this.customerForm.valid) {
      this.customerData = { ...this.customerData, ...customerData };
      this.customerData.AccontBalance = this.addNumbers();
      const id = this.router.snapshot.params['id'];

      this.httpservice.updateCustomerData(this.customerData, id).subscribe(
        (res) => {
          console.log(res);
          setTimeout(() => {
            alert('SuccessFully Update..');
            this.routes.navigate(['/addbalance']);
          }, 1000);
        },
        (error) => {
          console.error(error);
        }
      );

      this.customerForm.reset();
    }
  }
  num1: any;
  num2: any;
  result: number = 0;

  addNumbers() {
    return +this.num1 + +this.num2;
  }
}
