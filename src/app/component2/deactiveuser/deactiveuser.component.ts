import { Component } from '@angular/core';
import { HttpserviceService } from 'src/app/service2/httpservice.service';

@Component({
  selector: 'app-deactiveuser',
  templateUrl: './deactiveuser.component.html',
  styleUrls: ['./deactiveuser.component.css'],
})
export class DeactiveuserComponent {
  currentPage: number = 1;
  itemsPerPage: number = 5;
  customerlist: any;
  shareData: any;
  fiterdata: any;
  value12: boolean = false;
  dataempty = false;
  img =
    'https://static.vecteezy.com/system/resources/previews/005/006/031/original/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg';
  img2 =
    'data:image/png;base64,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';
  fdata: boolean = false;
  tablesearch: boolean = false;

  searchTimer: any;

  searchdata() {
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      const searchInput = document.querySelector(
        '#searchInput'
      ) as HTMLInputElement | null;

      if (searchInput) {
        const searchQuery = searchInput.value;

        if (searchQuery) {
          if (searchQuery.length > 12) {
            alert('Aadhar Number Length Is 12! Not Allow Above 12 Digits');
            this.fiterdata = [];
            this.value12 = true;
            this.tablesearch = false;
          } else {
            this.fiterdata = this.shareData.filter((data: any) => {
              return (
                data.customerAccountNumber
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) &&
                data.Active !== 'Activate'
              );
            });

            if (this.fiterdata.length === 0) {
              this.fdata = true;
            } else {
              this.fdata = false;
            }
            this.tablesearch = true;
            this.value12 = false;
          }
        } else {
          this.fiterdata = [];
          this.tablesearch = false;
          this.value12 = false;
        }
      }
    }, 500);
  }

  constructor(private gethttp: HttpserviceService) {
    this.gethttp.getData().subscribe(
      (data) => {
        this.customerlist = data;

        this.checkDataEmpty();
      },

      (err) => {
        console.log(err);
      }
    );

  
    this.gethttp.getData().subscribe((data) => {
      this.shareData = data.filter((item: any) => {
        return item.Active !== 'Activate';
      });

      console.log(this.shareData);
    });
  }

  updateDataOnServer(index: number): void {
    this.shareData[index];
  }

  ngOnInit(): void {
    this.gethttp.data$.subscribe(() => {
      this.gethttp.getData().subscribe((data) => {
        this.customerlist = data;
        this.checkDataEmpty();
      });
    });
  }
  check(id: any) {
    this.gethttp.getcurrentdata(id).subscribe((res) => {
      console.log(res.id);
    });
  }
  deletecustomer(id: any) {
    this.gethttp.deletecustomerdata(id).subscribe(
      (data) => {
        console.log(data);

        this.gethttp.refreshData();
        setTimeout(() => {
          alert('SuccessFully Delete..');
        }, 1000);
      },
      (error) => {
        // console.error(error)
        setTimeout(() => {
          alert('Please After Some Time..');
        }, 1000);
     
      }
    );
  }
  checkDataEmpty() {
    if (this.customerlist && this.customerlist.length === 0) {
      this.dataempty = true;
    } else {
      this.dataempty = false;
    }
  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
