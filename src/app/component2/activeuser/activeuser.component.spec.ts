import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveuserComponent } from './activeuser.component';

describe('ActiveuserComponent', () => {
  let component: ActiveuserComponent;
  let fixture: ComponentFixture<ActiveuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveuserComponent]
    });
    fixture = TestBed.createComponent(ActiveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
