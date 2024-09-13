import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblanceComponent } from './addblance.component';

describe('AddblanceComponent', () => {
  let component: AddblanceComponent;
  let fixture: ComponentFixture<AddblanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddblanceComponent]
    });
    fixture = TestBed.createComponent(AddblanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
