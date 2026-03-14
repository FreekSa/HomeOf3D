import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculation3DPrintPageComponent } from './calculation-3-d-print-page.component';

describe('Calculation3DPrintComponent', () => {
  let component: Calculation3DPrintPageComponent;
  let fixture: ComponentFixture<Calculation3DPrintPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculation3DPrintPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculation3DPrintPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
