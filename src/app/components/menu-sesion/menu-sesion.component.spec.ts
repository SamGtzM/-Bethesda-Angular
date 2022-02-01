import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSesionComponent } from './menu-sesion.component';

describe('MenuSesionComponent', () => {
  let component: MenuSesionComponent;
  let fixture: ComponentFixture<MenuSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
