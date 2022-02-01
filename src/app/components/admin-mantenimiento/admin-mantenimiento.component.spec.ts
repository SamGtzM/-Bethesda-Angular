import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMantenimientoComponent } from './admin-mantenimiento.component';

describe('AdminMantenimientoComponent', () => {
  let component: AdminMantenimientoComponent;
  let fixture: ComponentFixture<AdminMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
