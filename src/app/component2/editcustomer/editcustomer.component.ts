import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/service2/httpservice.service';
import { ActivatedRoute, Router} from '@angular/router';


interface accountHolder {
  customerName: string;
  customerIFSCCode: string;
  customerAddress: string;
  customerMobileNumber: number | null;
  customerAadharNumber: number | null;
  Active:string
}

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css'],
})
export class EditcustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerData: accountHolder = {
    customerName: '',
    customerIFSCCode: 'ABCBDN1234',
    customerAddress: '',
    customerMobileNumber: null,
    customerAadharNumber: null,
    Active:"123"
  };
  
  
  constructor(
    private formBuilder: FormBuilder,
    private httpservice: HttpserviceService,
    private router: ActivatedRoute,
    private routes:Router
   
  ) {
    this.customerForm = this.formBuilder.group({
      customerName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-z ]*$'),
        ],
      ],
      customerAddress: ['', [Validators.required, Validators.minLength(7)]],
      Active: ['', [Validators.required, Validators.pattern('^[A-Za-z ]*$'),, Validators.minLength(6)]],
      customerMobileNumber: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      customerAadharNumber: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(12),
          Validators.maxLength(12),
        ],
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
      const id = this.router.snapshot.params['id'];

      this.httpservice.updateCustomerData(this.customerData, id).subscribe(
        (res) => {
          console.log(res);
         setTimeout(() => {
          alert("SuccessFully Update..")
          this.routes.navigate(['/viewcustomer']);

         }, 1000);

        
        },
        (error) => {
          console.error(error);
        }
      );

      this.customerForm.reset();
      
    }
  }



 
}
