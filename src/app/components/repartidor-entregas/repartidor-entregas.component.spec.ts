import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorEntregasComponent } from './repartidor-entregas.component';

describe('RepartidorEntregasComponent', () => {
  let component: RepartidorEntregasComponent;
  let fixture: ComponentFixture<RepartidorEntregasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartidorEntregasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartidorEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
