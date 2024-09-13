import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveuserComponent } from './deactiveuser.component';

describe('DeactiveuserComponent', () => {
  let component: DeactiveuserComponent;
  let fixture: ComponentFixture<DeactiveuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeactiveuserComponent]
    });
    fixture = TestBed.createComponent(DeactiveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
