import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbanaceroutingComponent } from './addbanacerouting.component';

describe('AddbanaceroutingComponent', () => {
  let component: AddbanaceroutingComponent;
  let fixture: ComponentFixture<AddbanaceroutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbanaceroutingComponent]
    });
    fixture = TestBed.createComponent(AddbanaceroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
