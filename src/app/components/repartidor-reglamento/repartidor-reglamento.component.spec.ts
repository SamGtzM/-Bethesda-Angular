import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorReglamentoComponent } from './repartidor-reglamento.component';

describe('RepartidorReglamentoComponent', () => {
  let component: RepartidorReglamentoComponent;
  let fixture: ComponentFixture<RepartidorReglamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartidorReglamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartidorReglamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
