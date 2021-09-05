import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesSalesMaintancesComponent } from './purchases-sales-maintances.component';

describe('PurchasesSalesMaintancesComponent', () => {
  let component: PurchasesSalesMaintancesComponent;
  let fixture: ComponentFixture<PurchasesSalesMaintancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesSalesMaintancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesSalesMaintancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
