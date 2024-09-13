import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutbanaceroutiComponent } from './cutbanacerouti.component';

describe('CutbanaceroutiComponent', () => {
  let component: CutbanaceroutiComponent;
  let fixture: ComponentFixture<CutbanaceroutiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CutbanaceroutiComponent]
    });
    fixture = TestBed.createComponent(CutbanaceroutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
