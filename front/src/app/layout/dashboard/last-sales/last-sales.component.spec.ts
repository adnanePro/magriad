import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSalesComponent } from './last-sales.component';

describe('LastSalesComponent', () => {
  let component: LastSalesComponent;
  let fixture: ComponentFixture<LastSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
