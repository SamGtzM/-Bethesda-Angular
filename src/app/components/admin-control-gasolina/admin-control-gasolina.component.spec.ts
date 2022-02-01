import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlGasolinaComponent } from './admin-control-gasolina.component';

describe('AdminControlGasolinaComponent', () => {
  let component: AdminControlGasolinaComponent;
  let fixture: ComponentFixture<AdminControlGasolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminControlGasolinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlGasolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
