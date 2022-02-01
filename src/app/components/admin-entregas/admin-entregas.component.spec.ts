import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntregasComponent } from './admin-entregas.component';

describe('AdminEntregasComponent', () => {
  let component: AdminEntregasComponent;
  let fixture: ComponentFixture<AdminEntregasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEntregasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
