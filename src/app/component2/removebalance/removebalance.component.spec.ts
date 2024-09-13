import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebalanceComponent } from './removebalance.component';

describe('RemovebalanceComponent', () => {
  let component: RemovebalanceComponent;
  let fixture: ComponentFixture<RemovebalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovebalanceComponent]
    });
    fixture = TestBed.createComponent(RemovebalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
