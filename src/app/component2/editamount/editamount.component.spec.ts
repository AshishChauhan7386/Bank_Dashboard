import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditamountComponent } from './editamount.component';

describe('EditamountComponent', () => {
  let component: EditamountComponent;
  let fixture: ComponentFixture<EditamountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditamountComponent]
    });
    fixture = TestBed.createComponent(EditamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
