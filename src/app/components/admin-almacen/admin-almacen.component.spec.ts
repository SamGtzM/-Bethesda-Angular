import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlmacenComponent } from './admin-almacen.component';

describe('AdminAlmacenComponent', () => {
  let component: AdminAlmacenComponent;
  let fixture: ComponentFixture<AdminAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
