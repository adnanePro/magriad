import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeleComponent } from './new-sele.component';

describe('NewSeleComponent', () => {
  let component: NewSeleComponent;
  let fixture: ComponentFixture<NewSeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
